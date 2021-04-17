<template>
  <div class="quiz-container my-5">
    <quiz-options
      :category="category"
      :categories="categories"
      :continent="continent"
      :continents="continents"
      @select-category="selectCategory"
      @select-region="selectContinent"
    />
    <div class="text-center">
      <play-game
        :category="category"
        @handle-response="handleResponse"
        @update-score="updateTotal"
      />
      <score-board :score="score" />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import DataService from '@/services/DataService'
import ScoreBoard from '@/components/quiz/score/ScoreBoard'
import QuizOptions from './options/'

const QUIZ_CHOICES = 3

export default {
  components: {
    ScoreBoard,
    QuizOptions,
    PlayGame: () => import('./categories/PlayGame')
  },
  async mounted () {
    if (!localStorage.getItem('countries')) {
      // get records from api and load local storage
      await DataService.fetchData()
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
    ...mapActions({
      setCountry: 'country/setCountry',
      setCountries: 'country/setCountries',
      setContinent: 'continent/setContinent',
      setCategory: 'category/setCategory',
      updateScore: 'score/updateScore'
    }),
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

        // TODO: avoid countries with no capitals like Antarctica

        // avoid duplicate keys
        if (countries.indexOf(records[index]) > -1) {
          console.log(records[index].name + ' is already selected (choosing another)...')
          i--
          continue
        }
        countries.push(records[index])
      }

      this.setCountries(countries)

      // choose country from randomly selected countries
      let index = this.rand(QUIZ_CHOICES)

      this.setCountry(countries[index])

      // DEBUGGING ONLY
      this.showAnswer(countries, index)
    },
    showAnswer (countries, index) {
      if (process.env.NODE_ENV === 'development') {
        countries.map(country => console.log(country.name))
        console.log('A: ' + JSON.stringify(countries[index]))
        console.log('*************')
      }
    },
    handleResponse () {
      // load new set of questions
      this.questions()
    },
    updateTotal (correctAnswer) {
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

      this.updateScore({ streak, record })
    },
    selectCategory (value) {
      this.setCategory(value)
    },
    selectContinent (value) {
      this.setContinent(value)
    }
  },
  computed: {
    ...mapState({
      category: state => state.category.category,
      categories: state => state.category.categories,
      continent: state => state.continent.continent,
      continents: state => state.continent.continents,
      country: state => state.country.country,
      countries: state => state.country.countries,
      score: state => state.score.score
    }),
    isFlagsCategory () {
      return this.category.toLowerCase() === 'flags'
    },
    isCountriesCategory () {
      return this.category.toLowerCase() === 'countries'
    }
  }
}
</script>

<style lang="scss" scoped>
.quiz-container {
  padding: 5px;
}
</style>
