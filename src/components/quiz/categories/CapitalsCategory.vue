<template>
  <div class="col">
    <h2 class="mt-4">What is the capital of {{ country.name }}</h2>
    <transition name="fade">
      <h6 class="message" :class="'text-' + (correct ? 'success' : 'danger')">{{ message }}</h6>
    </transition>

    <img class="flag mt-2 mb-5" :src="country.flag">
    <div class="row">
      <div class="countries offset-md-4 col-md-4">
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
        this.message = `Congrats! the capital of ${this.country.name} is ${answer}`
        this.$emit('update-score', true)
      } else {
        // display error message
        this.message = `Sorry, the capital of ${this.country.name} is not ${answer}`
        this.$emit('update-score', false)
      }

      // show next question set in 2 seconds
      setTimeout(() => {
        // load new set of questions
        this.$emit('handle-response')

        // reset values
        this.reset()
      }, 2000)
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
  },
  filters: {
    nocapital (value) {
      return !value ? 'No Capital' : value
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
