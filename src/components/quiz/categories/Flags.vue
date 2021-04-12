<template>
  <div>
    <h2 class="mt-4">What country has this flag?</h2>
    <transition name="fade">
      <h4 class="message" :class="messageType">{{ message }}</h4>
    </transition>
    <div class="flag mt-2 mb-5 col-md-6" :style="backgroundImage" />
    <ui-button
      v-for="country in countries"
      :key="country.name"
      :text="country.name"
      :disabled="didAnswer"
      @check-answer="checkAnswer"
    />
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import { UiButton } from '@/components/ui'

export default {
  name: 'Flags',
  data: () => ({
    message: '',
    didAnswer: false,
    correct: false
  }),
  components: {
    UiButton
  },
  mounted () {
    if (!this.message) {
      this.showHint()
    }
  },
  methods: {
    checkAnswer (answer) {
      // disable all buttons
      this.didAnswer = true

      if (answer === this.formattedCountryName) {
        this.correct = true

        // display message
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
    }
  },
  computed: {
    ...mapState({
      country: state => state.country.country,
      countries: state => state.country.countries,
      score: state => state.score.score
    }),
    ...mapGetters({
      getHint: 'score/getHint',
      formattedCountryName: 'country/formattedCountryName'
    }),
    disableButton () {
      return this.didAnswer ? 'disabled' : ''
    },
    backgroundImage () {
      return 'backgroundImage: url(' + this.country.flag + ')'
    },
    messageType () {
      // determine the color of the message text
      let type = 'danger'
      if (!this.correct && !this.didAnswer) {
        type = 'primary'
      } else if (this.correct) {
        type = 'success'
      }

      return 'text-' + type
    }
  }
}
</script>
