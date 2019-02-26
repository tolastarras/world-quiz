import Vue from 'vue'
import Vuex from 'vuex'

import * as types from './mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    continent: null,
    category: null,
    continents: [
      'World',
      'Africa',
      'Americas',
      'Asia',
      'Europe',
      'Oceania'
    ],
    categories: [
      'Capitals',
      'Countries',
      'Flags'
    ],
    country: {},
    countries: [],
    score: {
      streak: 0,
      record: 0
    }
  },
  mutations: {
    [types.SET_CONTINENT] (state, continent) { state.continent = continent },
    [types.SET_CATEGORY] (state, category) { state.category = category },
    [types.SET_COUNTRY] (state, country) { state.country = country },
    [types.SET_COUNTRIES] (state, payload) { state.countries = payload },
    [types.UPDATE_SCORE] (state, score) {
      state.score = score
      localStorage.setItem('record', score.record)
    }
  },
  actions: {
    init ({ commit }) {
      // default selections
      commit('SET_CONTINENT', 'World')
      commit('SET_CATEGORY', 'Capitals')

      if (!localStorage.getItem('record')) {
        localStorage.setItem('record', 0)
      }

      commit('UPDATE_SCORE', { streak: 0, record: localStorage.getItem('record') })
    },
    setContinent ({ commit }, continent) {
      commit('SET_CONTINENT', continent)
    },
    setCategory ({ commit }, category) {
      commit('SET_CATEGORY', category)
    },
    setCountry ({ commit }, country) {
      commit('SET_COUNTRY', country)
    },
    setCountries ({ commit }, payload) {
      commit('SET_COUNTRIES', payload)
    },
    updateScore ({ commit }, score) {
      commit('UPDATE_SCORE', score)
    }
  },
  getters: {
    // continent: state => {
    //   let continent = state.continent.toLowerCase()
    //   if (continent === 'world' || continent === 'americas') {
    //     continent = 'the ' + continent
    //   }

    //   return continent
    // },
    category: state => state.category,
    continent: state => state.continent,
    continents: state => state.continents,
    country: state => state.country,
    countries: state => state.countries,
    score: state => state.score
  }
})
