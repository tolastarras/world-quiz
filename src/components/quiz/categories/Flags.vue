<template>
  <div class="col categories">
    <h2 class="mt-4">What country has this flag?</h2>
    <transition name="fade">
      <h4 class="message" :class="messageType">{{ message }}</h4>
    </transition>
    <div class="flag mt-2 mb-5 col-md-6" :style="backgroundImage"></div>
    <div class="row">
      <div class="countries offset-md-3 col-md-6">
        <a @click="checkAnswer" :key="country.name" v-for="country in countries" class="btn btn-primary btn-block text-light" :class="disableButton">
          {{ country.name | format-country-name }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  data () {
    return {
      message: '',
      didAnswer: false,
      correct: false
    }
  },
  mounted () {
    if (!this.message) {
      this.showHint()
    }
  },
  methods: {
    checkAnswer (e) {
      // disable all buttons
      this.didAnswer = true

      let answer = e.target.text.trim()

      if (answer === this.formatCountryName) {
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
    ...mapState('country', ['country', 'countries']),
    ...mapState(['score']),
    ...mapGetters('score', ['getHint']),
    ...mapGetters('country', ['formatCountryName']),
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
