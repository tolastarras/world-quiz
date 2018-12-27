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
      'Asia',
      'Europe',
      'Americas',
      'Oceania'
    ],
    categories: [
      'Flags',
      'Capitals'
    ],
    country: {},
    countries: [],
    score: {
      streak: 0,
      record: 0
    }
  },
  mutations: {
    [types.SET_CONTINENT] (state, payload) { state.continent = payload },
    [types.SET_CATEGORY] (state, payload) { state.category = payload },
    [types.SET_COUNTRY] (state, payload) { state.country = payload },
    [types.SET_COUNTRIES] (state, payload) { state.countries = payload },
    [types.UPDATE_SCORE] (state, payload) { state.score = payload }
  },
  actions: {
    setContinent ({ commit }, payload) {
      commit('SET_CONTINENT', payload)
    },
    setCategory ({ commit }, payload) {
      commit('SET_CATEGORY', payload)
    },
    setCountry ({ commit }, payload) {
      commit('SET_COUNTRY', payload)
    },
    setCountries ({ commit }, payload) {
      commit('SET_COUNTRIES', payload)
    },
    updateScore ({ commit }, payload) {
      commit('UPDATE_SCORE', payload)
    }
  },
  getters: {
    continent: state => state.continent,
    continents: state => state.continents,
    category: state => state.category,
    categories: state => state.categories,
    country: state => state.country,
    countries: state => state.countries,
    score: state => state.score
  }
})
