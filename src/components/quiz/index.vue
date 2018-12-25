<template>
  <div class="content my-5">
    <quiz-options />
    <div class="text-center">
      <div class="row">
        <flags-category />
      </div>
      <score-board />
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
import { mapGetters } from 'vuex'

import FlagsCategory from '@/components/quiz/categories/FlagsCategory'
import ScoreBoard from '@/components/ScoreBoard'
import QuizOptions from './options/'

const QUIZ_CHOICES = 4

export default {
  components: {
    ScoreBoard,
    QuizOptions,
    FlagsCategory
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
      let records = JSON.parse(localStorage.getItem('countries'))

      let countries = []
      for (let i = 0; i < QUIZ_CHOICES; i++) {
        let index = this.rand(records.length)

        // avoid duplicate keys
        if (countries.indexOf(records[index]) > -1) {
          console.log(records[index] + ' is already in the array...')
          i--
          continue
        }
        countries.push(records[index])
      }

      this.$store.dispatch('setCountries', countries)

      // choose country from randomly selected countries
      let index = this.rand(QUIZ_CHOICES)

      this.$store.dispatch('setCountry', countries[index])
    }
  },
  computed: {
    ...mapGetters(['category']),
    isFlagCategory () {
      console.log('IS FLAG CATEGORY:', this.category.toLowerCase() === 'flags')
      return this.category.toLowerCase() === 'flags'
    }
  }
}
</script>
