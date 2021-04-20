<template>
  <div class="play-game">
    <vue-spinner
      v-if="loading"
      class="spinner mt-4 d-flex align-items-center"
      size="large"
      width="8px"
    />
    <div v-else>
      <quiz-question :category="category" :country="country" />
      <transition name="fade">
        <h4 class="message" :class="messageType">
          {{ message || hintText }}
        </h4>
      </transition>
      <ui-flag
        v-show="!isCountriesCategory"
        :has-shadow="country.name !== 'Nepal'"
        :src="country.flag"
      />
      <ui-button
        v-for="country in countries"
        class="d-flex pl-4"
        :class="`justify-content-${isCountriesCategory ? 'left' : 'center'}`"
        :key="country.name"
        :disabled="didAnswer"
        @check-answer="checkAnswer"
      >
        <ui-flag
          v-show="isCountriesCategory"
          class="mr-2"
          is-thumbnail
          :src="country.flag"
        />
        {{ country[categoryKey] | formatCountryName }}
      </ui-button>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import VueSpinner from 'vue-simple-spinner'
import { UiButton, UiFlag } from '@/components/ui'
import QuizQuestion from './QuizQuestion'
import { formatCountryName } from '@/utils/string'

export default {
  name: 'PlayGame',
  data: () => ({
    loading: true,
    message: '',
    didAnswer: false,
    correct: false
  }),
  components: {
    UiButton,
    UiFlag,
    QuizQuestion,
    VueSpinner
  },
  props: {
    category: {
      type: String,
      required: true
    }
  },
  mounted () {
    this.loading = false
  },
  methods: {
    checkAnswer (answer) {
      // disable all buttons
      this.didAnswer = true

      if (answer.trim() === this.country[this.categoryKey]) {
        this.correct = true
        this.message = `Congrats! ${answer} is correct`
        this.$emit('update-score', true)
      } else {
        this.message = `Sorry, ${answer} is incorrect`
        this.$emit('update-score', false)
      }

      // show next question set in x seconds
      setTimeout(() => {
        // load new set of questions
        this.$emit('handle-response')

        // reset values
        this.reset()
      }, 3000)
    },
    reset () {
      this.message = ''
      this.didAnswer = false
      this.correct = false
    },
    showTextMessage () {
      if (this.showHint) {
        return this.hint
      }

      return this.message
    }
  },
  computed: {
    ...mapState({
      country: state => state.country.country,
      countries: state => state.country.countries,
      notification: state => state.notification.notification,
      score: state => state.score.score,
      showHint: state => state.game.showHint
    }),
    ...mapGetters({
      region: 'country/region',
      categoryKey: 'category/key',
      isCountriesCategory: 'category/isCountries'
    }),
    disableButton () {
      return this.didAnswer ? 'disabled' : ''
    },
    hintText () {
      if (!this.showHint) { return '' }

      let continent = this.region

      if (continent.toLowerCase() === 'americas') {
        continent = continent.slice(0, -1)
      }

      return `Hint: This country is in ${continent}`
    },
    messageType () {
      let type = 'danger'
      if (!this.correct && !this.didAnswer) {
        type = 'primary'
      } else if (this.correct) {
        type = 'success'
      }

      return 'text-' + type
    }
  },
  filters: {
    formatCountryName
  }
}
</script>

<style lang="scss" scoped>
.play-game {
  max-width: $max-content-width;
  margin: auto;

  .spinner {
    min-height: 200px;
  }
}
</style>
