<template>
  <div class="content my-5">
    <div class="text-center">
      <button-continents />
      <button-categories />
    </div>

    <div class="text-center">
      <div class="anchor" id="question"></div>
      <div id="notifications"></div>

      <h2 class="mt-5">What's the capital of <strong>{{ country.name }}</strong>?</h2>
      <h4 v-if="didAnswer" class="mt-4" :class="'text-' + (correct ? 'success' : 'danger')">{{ message }}</h4>
      <img class="flag my-5" :src="country.flag">

      <div class="row">
        <div class="countries offset-md-4 col-md-4">
          <a @click="checkAnswer" :key="country.name" v-for="country in countries" class="btn btn-primary btn-block text-light" :class="disableButton">{{ country.capital }}</a>
        </div>
      </div>
      <score-board />
    </div>
  </div>
</template>

<script>
import Axios from 'axios'

import ScoreBoard from './ScoreBoard'
import ButtonContinents from './ButtonContinents'
import ButtonCategories from './ButtonCategories'

export default {
  data () {
    return {
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
      Axios.get('https://restcountries.eu/rest/v2/all?fields=name;region;flag;capital')
        .then(response => {
          localStorage.setItem('countries', JSON.stringify(response.data))
        })
    } else {
      const CHOICES = 4
      let records = JSON.parse(localStorage.getItem('countries'))

      let countries = []
      for (let i = 0; i < CHOICES; i++) {
        let index = this.rand()
        // TODO: if not in array ...
        countries.push(records[index])
      }

      // choose country from randomly selected countries
      let index = this.rand(CHOICES - 1)

      this.countries = countries
      this.country = countries[index]

      this.countries.map(country => console.log(country.name))
      console.log('country: ' + this.country.name)
      console.log('capital: ' + this.country.capital)
    }

    // Axios.get(`https://restcountries.eu/rest/v2/alpha/es`)
    //   .then(response => {
    //     console.log(response)
    //     this.country = response.data
    //   })
  },
  methods: {
    rand (max = 250) {
      return Math.floor(Math.random() * max + 1)
    },
    checkAnswer (e) {
      // disable all buttons
      this.didAnswer = true

      let answer = e.target.text
      if (answer === this.country.capital) {
        this.correct = true
        this.message = `Congrats! the capital of ${this.country.name} is ${answer}`

        console.log('CORRECT')
        // display corrent message and disable buttons
        // display next country?
        // continue exit buttons?
        // update record (correct answers)
      } else {
        // display error message
        this.message = `Sorry, the capital of ${this.country.name} is not ${answer}`
      }
    }   
  },
  computed: {
    disableButton () {
      return this.didAnswer ? 'disabled' : ''
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
</style>
