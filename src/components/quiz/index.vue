<template>
  <div class="container my-5">
    <quiz-options />
    <div class="text-center">
      <div v-if="isFlagsCategory" class="row">
        <flags-category v-on:handle-response="handleResponse" v-on:update-score="updateScore" />
      </div>
      <div v-else class="row">
        <capitals-category v-on:handle-response="handleResponse" v-on:update-score="updateScore" />
      </div>
      <score-board />
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
import { mapGetters } from 'vuex'

import FlagsCategory from '@/components/quiz/categories/FlagsCategory'
import CapitalsCategory from '@/components/quiz/categories/CapitalsCategory'
import ScoreBoard from '@/components/ScoreBoard'
import QuizOptions from './options/'

const QUIZ_CHOICES = 4

export default {
  components: {
    ScoreBoard,
    QuizOptions,
    FlagsCategory,
    CapitalsCategory
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
    continent () {
      this.questions()
    },
    category () {
      this.questions()
    }
  },
  methods: {
    rand (max) {
      return Math.floor(Math.random() * max)
    },
    records () {
      let records = JSON.parse(localStorage.getItem('countries'))

      // world records
      if (this.continent === 'World') {
        return records
      }

      // continent specific records
      return records.filter(record => {
        if (record.region === this.continent) {
          return record
        }
      })
    },
    questions () {
      let records = this.records()
      let countries = []
      for (let i = 0; i < QUIZ_CHOICES; i++) {
        let index = this.rand(records.length)

        // avoid duplicate keys
        if (countries.indexOf(records[index]) > -1) {
          console.log(records[index].name + ' is already in the array (choosing another)...')
          i--
          continue
        }
        countries.push(records[index])
      }

      this.$store.dispatch('setCountries', countries)

      // choose country from randomly selected countries
      let index = this.rand(QUIZ_CHOICES)

      this.$store.dispatch('setCountry', countries[index])
    },
    handleResponse () {
      // load new set of questions
      this.questions()
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
    }
  },
  computed: {
    ...mapGetters(['continent', 'category', 'score']),
    isFlagsCategory () {
      return this.category.toLowerCase() === 'flags'
    }
  }
}
</script>
