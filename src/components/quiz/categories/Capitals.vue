<template>
  <div class="col categories">
    <h2 class="mt-4">What is the capital of {{ country.name | format-country-name }}?</h2>
    <transition name="fade">
      <h4 class="message" :class="messageType">{{ message }}</h4>
    </transition>

    <div class="flag mt-2 mb-5 col-md-6" :style="backgroundImage"></div>
    <div class="row">
      <div class="countries offset-md-3 col-md-6">
        <a @click="checkAnswer" :key="country.name" v-for="country in countries" class="btn btn-primary btn-block text-light" :class="disableButton">
          {{ country.capital | nocapital }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      message: '',
      didAnswer: false,
      correct: false
    }
  },
  methods: {
    checkAnswer (e) {
      // disable all buttons
      this.didAnswer = true

      let answer = e.target.text.trim()

      if (answer === this.country.capital) {
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
        this.hint()
      }, 2000)
    },
    hint () {
      let the = ''
      if (this.country.region.toLowerCase() === 'americas') {
        the = 'the'
      }
      this.message = `Hint: Country is in ${the} ${this.country.region}`
    },
    reset () {
      this.message = ''
      this.didAnswer = false
      this.correct = false
    }
  },
  created () {
    // if (!this.message) {
    //   this.hint()
    // }
  },
  watch: {
    country () {
      if (!this.message) {
        this.hint()
      }
    }
  },
  computed: {
    ...mapGetters(['country', 'countries', 'score']),
    disableButton () {
      return this.didAnswer ? 'disabled' : ''
    },
    backgroundImage () {
      return 'backgroundImage: url(' + this.country.flag + ')'
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
    }
  }
}
</script>

<style>
/* style in assets/scss/categories.scss */
</style>
