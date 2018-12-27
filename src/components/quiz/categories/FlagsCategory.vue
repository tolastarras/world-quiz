<template>
  <div class="col">
    <h2 class="mt-4">To which country does this flag belong?</h2>
    <transition name="fade">
      <h6 class="message" :class="'text-' + (correct ? 'success' : 'danger')">{{ message }}</h6>
    </transition>

    <img class="flag mt-2 mb-5" :src="country.flag">
    <div class="row">
      <div class="countries offset-md-4 col-md-4">
        <a @click="checkAnswer" :key="country.name" v-for="country in countries" class="btn btn-primary btn-block text-light" :class="disableButton">
          {{ country.name }}
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

      if (answer === this.country.name) {
        this.correct = true

        // display message
        this.message = `Congrats! this is ${this.country.name}'s flag`
        this.updateScore(true)
      } else {
        // display error message
        this.message = `Sorry, this is NOT ${answer}'s flag`
        this.updateScore(false)
      }

      // show next question set in 2 seconds
      setTimeout(() => {
        // load new set of questions
        this.$emit('handle-response')

        // reset values
        this.reset()
      }, 2000)
    },
    updateScore (correctAnswer) {
      let correct = this.score.correct
      let incorrect = this.score.incorrect

      if (correctAnswer) {
        correct += 1
      } else {
        incorrect += 1
      }

      this.$store.dispatch('updateScore', { correct, incorrect })
    },
    reset () {
      this.message = ''
      this.didAnswer = false
      this.correct = false
    }
  },
  computed: {
    ...mapGetters(['country', 'countries', 'score']),
    disableButton () {
      return this.didAnswer ? 'disabled' : ''
    }
  }
}
</script>

<style>
.flag {
  border: 1px solid #ddd;
  line-height: 1.4;
  border-radius: 0;
  transition: all .2s ease-in-out;
  display: inline-block;
  width: 200px;
}

.message {
  height: 2em;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
