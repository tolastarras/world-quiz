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
      <img class="flag my-5" :src="country.flag">

      <div class="row">
        <div class="choices offset-md-4 col-md-4">
          <a :key="choice.name" v-for="choice in choices" class="btn btn-primary btn-block text-light">{{ choice.capital }}</a>
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
      choices: [],
      records: []
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
      console.log('from localStorage ...')
      let countries = JSON.parse(localStorage.getItem('countries'))

      let choices = []
      for (let i = 0; i < 4; i++) {
        let index = this.rand()
        // todo: if not in array ...
        choices.push(countries[index])
      }

      // choose country from choices
      let index = this.rand(3)

      this.country = countries[index]
      this.choices = choices

      console.log('choices', choices)
      console.log('country', countries[index])
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
  width: 150px;

}
</style>
