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
        v-show="showNextQuestion"
        class="next-question"
        @check-answer="nextQuestion"
      >
        Next Question
      </ui-button>
      <ui-button
        v-for="country in countries"
        class="d-flex pl-4"
        :class="`${btnClasses} ${btnColor(country)}`"
        :key="country.name"
        :disabled="!!userAnswer"
        @check-answer="checkAnswer"
      >
        <ui-flag
          v-show="isCountriesCategory"
          class="mr-2"
          is-thumbnail
          :src="country.flag"
        />
        {{ btnText(country) }}
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
    userAnswer: '',
    showNextQuestion: false
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
  updated () {
    this.loading = false
  },
  methods: {
    checkAnswer (answer) {
      // disable all buttons
      this.userAnswer = answer

      if (answer === this.correctAnswer) {
        this.message = `Congrats! ${answer} is correct`
        this.$emit('update-score', true)
      } else {
        this.message = `Sorry, ${answer} is incorrect`
        this.$emit('update-score', false)
      }

      if (this.autoPlay) {
        this.autoReset()
      } else {
        this.showNextQuestion = true
      }
    },
    reset () {
      this.message = ''
      this.userAnswer = ''
      this.loading = true
    },
    autoReset () {
      const AUTO_RESET_MILLISECONDS = 3000
      // show next question set in x seconds
      setTimeout(() => {
        // load new set of questions
        this.$emit('handle-response')

        // reset values
        this.reset()
      }, AUTO_RESET_MILLISECONDS)
    },
    showTextMessage () {
      return this.showHint ? this.Hint : this.message
    },
    btnText (country) {
      return formatCountryName(country[this.categoryKey])
    },
    btnColor (country) {
      const btnText = this.btnText(country)
      const correct = !!this.userAnswer && btnText === this.correctAnswer
      const wrong = this.userAnswer === btnText && this.userAnswer !== this.correctAnswer

      return wrong ? 'btn-danger' : (correct ? 'btn-success' : '')
    },
    nextQuestion () {
      this.$emit('handle-response')

      // reset values
      this.reset()
      this.showNextQuestion = false
    }
  },
  computed: {
    ...mapState({
      country: state => state.country.country,
      countries: state => state.country.countries,
      notification: state => state.notification.notification,
      score: state => state.score.score,
      showHint: state => state.settings.showHint,
      autoPlay: state => state.settings.autoPlay
    }),
    ...mapGetters({
      region: 'country/region',
      categoryKey: 'category/key',
      isCountriesCategory: 'category/isCountries'
    }),
    hintText () {
      if (!this.showHint) { return '' }

      const region = this.region
      const continent = region === 'Americas' ? region.slice(0, -1) : region

      return `Hint: This country is in ${continent}`
    },
    messageType () {
      const correctAnswer = this.correctAnswer === this.userAnswer
      const noAction = !correctAnswer && !this.userAnswer.length

      return `text-${noAction ? 'primary' : (correctAnswer ? 'success' : 'danger')}`
    },
    correctAnswer () {
      return formatCountryName(this.country[this.categoryKey])
    },
    btnClasses () {
      return `justify-content-${this.isCountriesCategory ? 'left' : 'center'}`
    }
  }
}
</script>

<style lang="scss" scoped>
.play-game {
  max-width: $max-content-width;
  margin: auto;
  position: relative;

  .spinner {
    min-height: 200px;
  }

  .next-question {
    cursor: pointer;
    position: absolute;
    top: 32%;
    left: 0;
    font-size: 46px !important;
    color: $white;
    background: rgba(0, 105, 217, 0.9)
  }
}
</style>
