<template>
  <div class="content my-5">
    <div class="text-center">
      <button-continents />
      <button-categories />
    </div>

    <div class="text-center">
      <div class="anchor" id="question"></div>
      <div id="notifications"></div>

      <h2 class="mt-5">{{ question }}</h2>
      <transition name="fade">
        <h6 v-if="didAnswer" class="mt-4" :class="'text-' + (correct ? 'success' : 'danger')">{{ message }}</h6>
      </transition>
      <img class="flag my-5" :src="country.flag">
      <div class="row">
        <div class="countries offset-md-4 col-md-4">
          <a @click="checkAnswer" :key="country.name" v-for="country in countries" class="btn btn-primary btn-block text-light" :class="disableButton">{{ country.capital | nocapital }}</a>
        </div>
      </div>
      <score-board />
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
import { mapGetters } from 'vuex'

import ScoreBoard from './ScoreBoard'
import ButtonContinents from './ButtonContinents'
import ButtonCategories from './ButtonCategories'

const QUIZ_CHOICES = 4

export default {
  data () {
    return {
      question: '',
      country: {},
      countries: [],
      didAnswer: false,
      correct: false,
      message: ''
    }
  },
  components: {
    ScoreBoard,
    ButtonContinents,
    ButtonCategories
  },
  mounted () {
    if (!localStorage.getItem('countries')) {
      // get records from api and load local storage
      Axios.get('https://restcountries.eu/rest/v2/all?fields=name;region;flag;capital')
        .then(response => {
          localStorage.setItem('countries', JSON.stringify(response.data))
        })
    }

    this.questions()
  },
  watch: {
    category () {
      this.questions()
    }
  },
  methods: {
    rand (max) {
      return Math.floor(Math.random() * max)
    },
    questions () {
      this.clearAll()

      let records = JSON.parse(localStorage.getItem('countries'))

      for (let i = 0; i < QUIZ_CHOICES; i++) {
        let index = this.rand(records.length)
        // avoid duplicate keys
        if (this.countries.indexOf(records[index]) > -1) {
          console.log(records[index] + ' is already in the array...')
          i--
          continue
        }
        this.countries.push(records[index])
      }

      // choose country from randomly selected countries
      let index = this.rand(QUIZ_CHOICES)

      this.country = this.countries[index]

      // question based on choosen category
      if (this.category.toLowerCase() === 'flags') {
        this.question = `To which country does this flag belong?`
      } else if (this.category.toLowerCase() === 'capitals') {
        this.question = `What's the capital of ${this.country.name}?`
      }

      // console log all countries selected (debuging purposes)
      // this.countries.map(country => console.log(country.name))
      console.log('country: ' + this.country.name)
      console.log('capital: ' + this.country.capital)
      console.log('*****************************')
    },
    checkAnswer (e) {
      // disable all buttons
      this.didAnswer = true

      let answer = e.target.text
      if (answer === this.country.capital) {
        this.correct = true

        // display message
        this.message = `Congrats! the capital of ${this.country.name} is ${answer}`
        this.updateScore(true)
      } else {
        // display error message
        this.message = `Sorry, the capital of ${this.country.name} is not ${answer}`
        this.updateScore(false)
      }

      // show next questions in 2 seconds
      setTimeout(() => {
        this.questions()
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
    clearAll () {
      this.country = {}
      this.countries = []
      this.didAnswer = false
      this.correct = false
      this.message = ''
    }
  },
  computed: {
    ...mapGetters(['score', 'category']),
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

<style lang="scss" scoped>
ul {
  list-style-type: none;

  li {
    list-style-type: none;
    display: inline;
  }
}

.flag {
  border: 1px solid #ddd;
  line-height: 1.4;
  border-radius: 0;
  transition: all .2s ease-in-out;
  display: inline-block;
  width: 200px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
