<template>
  <div class="container my-5">
    <quiz-options />
    <div class="text-center">
      <div v-if="isFlagsCategory" class="row">
        <flags-category v-on:handle-response="handleResponse" v-on:update-score="updateScore" />
      </div>
      <div v-else-if="isCountriesCategory" class="row">
        <countries-category v-on:handle-response="handleResponse" v-on:update-score="updateScore" />
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

import FlagsCategory from '@/components/quiz/categories/Flags'
import CapitalsCategory from '@/components/quiz/categories/Capitals'
import CountriesCategory from '@/components/quiz/categories/Countries'
import ScoreBoard from '@/components/ScoreBoard'
import QuizOptions from './options/'

const QUIZ_CHOICES = 4

export default {
  components: {
    ScoreBoard,
    QuizOptions,
    FlagsCategory,
    CapitalsCategory,
    CountriesCategory
  },
  async mounted () {
    if (!localStorage.getItem('countries')) {
      // get records from api and load local storage
      await Axios.get('https://restcountries.eu/rest/v2/all?fields=name;region;flag;capital')
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
          console.log(records[index].name + ' is already selected (choosing another)...')
          i--
          continue
        }
        countries.push(records[index])
      }

      this.$store.dispatch('setCountries', countries)

      // debuggin ONLY
      countries.map(country => console.log(country.name))
      console.log('*************')

      // choose country from randomly selected countries
      let index = this.rand(QUIZ_CHOICES)

      this.$store.dispatch('setCountry', countries[index])
    },
    handleResponse () {
      // load new set of questions
      this.questions()
    },
    updateScore (correctAnswer) {
      let streak = this.score.streak
      let record = this.score.record

      if (correctAnswer) {
        streak++
        if (streak > record) {
          record++
        }
      } else {
        streak = 0
      }

      this.$store.dispatch('updateScore', { streak, record })
    }
  },
  computed: {
    ...mapGetters(['continent', 'category', 'score']),
    isFlagsCategory () {
      return this.category.toLowerCase() === 'flags'
    },
    isCountriesCategory () {
      return this.category.toLowerCase() === 'countries'
    }
  }
}
</script>
