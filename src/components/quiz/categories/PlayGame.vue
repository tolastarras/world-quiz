<template>
  <div>
    <ask-question :category="category" :country="country" />
    <transition name="fade">
      <h4 class="message" :class="messageType">{{ message }}</h4>
    </transition>
    <ui-flag v-show="category !== 'Countries'" :src="country.flag" />
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
import AskQuestion from './AskQuestion'
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
    AskQuestion
  },
  props: {
    category: {
      type: String,
      required: true
    }
  },
  methods: {
    checkAnswer (answer) {
      console.log('answer', answer)
      // disable all buttons
      this.didAnswer = true

      if (answer === this.country.capital) {
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
      }, 2000)
    },
    reset () {
      this.message = ''
      this.didAnswer = false
      this.correct = false
    },
    showHint () {
      this.message = this.getHint
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
    ...mapGetters('score', ['getHint']),
    disableButton () {
      return this.didAnswer ? 'disabled' : ''
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
.thumbnail {
  border: 1px solid white;
}
</style>
