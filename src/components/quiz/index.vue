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
        @handle-response="questions"
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
import { records, ramdomSet, showAnswer } from '@/utils/quiz'
import { randInt } from '@/utils/helper'

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
    async questions () {
      const items = await records(this.continent)
      const countries = await ramdomSet(items, QUIZ_CHOICES)
      const country = countries[randInt(countries.length)]

      this.setCountry(country)
      this.setCountries(countries)

      // DEBUGGING ONLY
      showAnswer(countries, country)
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
      this.setCategory(value.toLowerCase())
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
    })
  }
}
</script>

<style lang="scss" scoped>
.quiz-container {
  padding: 5px;
}
</style>
