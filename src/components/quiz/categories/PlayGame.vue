<template>
  <div class="play-game">
    <quiz-question :category="category" :country="country" />
    <transition name="fade">
      <h4 class="message" :class="messageType">{{ message }}</h4>
    </transition>
    <ui-flag
      v-show="category !== 'Countries'"
      :image-shadow="country.name !== 'Nepal'"
      :src="country.flag"
    />
    <ui-button
      v-for="country in countries"
      :class="`pl-4 text-${category === 'Countries' ? 'left' : 'center'}`"
      :key="country.name"
      :disabled="didAnswer"
      @check-answer="checkAnswer"
    >
      <img
        v-show="category === 'Countries'"
        class="thumbnail mr-2"
        :src="country.flag"
        alt="country flag"
        width="64"
      />
      {{ formatAnswer(country) }}
    </ui-button>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import { UiButton, UiFlag } from '@/components/ui'
import QuizQuestion from './QuizQuestion'
import { formatCountryName } from '@/utils/format-string'

export default {
  name: 'PlayGame',
  data: () => ({
    message: '',
    didAnswer: false,
    correct: false
  }),
  components: {
    UiButton,
    UiFlag,
    QuizQuestion
  },
  props: {
    category: {
      type: String,
      required: true
    }
  },
  methods: {
    checkAnswer (answer) {
      // disable all buttons
      this.didAnswer = true

      const category = this.category.toLowerCase()
      let categoryKey = this.country.name

      if (category === 'capitals') {
        categoryKey = this.country.capital
      }

      if (answer.trim() === categoryKey) {
        this.correct = true

        // display success message
        this.message = `Congrats! ${answer} is correct`
        this.$emit('update-score', true)
      } else {
        // display error message
        this.message = `Sorry, ${answer} is incorrect`
        this.$emit('update-score', false)
      }

      // show next question set in 2 seconds
      setTimeout(() => {
        // load new set of questions
        this.$emit('handle-response')

        // reset values
        this.reset()

        // show hint after displaying results
        this.showHint()
      }, 3000)
    },
    reset () {
      this.message = ''
      this.didAnswer = false
      this.correct = false
    },
    showHint () {
      this.message = this.hint
    },
    formatAnswer (country) {
      const category = this.category.toLowerCase()
      if (category === 'countries' || category === 'flags') {
        return formatCountryName(country.name)
      }
      return country.capital
    }
  },
  watch: {
    country () {
      if (!this.message) {
        this.showHint()
      }
    }
  },
  computed: {
    ...mapState({
      country: state => state.country.country,
      countries: state => state.country.countries,
      notification: state => state.notification.notification,
      score: state => state.score.score
    }),
    ...mapGetters({
      region: 'country/region'
    }),
    disableButton () {
      return this.didAnswer ? 'disabled' : ''
    },
    hint () {
      let continent = this.region
      console.log('continent', continent)

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
    nocapital (value) {
      return !value ? 'No Capital' : value
    },
    formatCountryName
  }
}
</script>

<style lang="scss" scoped>
.play-game {
  max-width: $max-width;
  margin: auto;

  .thumbnail {
    border: 1px solid white;
  }
}
</style>
