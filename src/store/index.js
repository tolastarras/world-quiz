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
      'America',
      'Oceania'
    ],
    categories: [
      'Flags',
      'Capitals'
    ],
    score: 0
  },
  mutations: {
    [types.SET_CONTINENT] (state, payload) { state.continent = payload },
    [types.SET_CATEGORY] (state, payload) { state.category = payload }
  },
  actions: {
    setContinent ({ commit }, payload) {
      commit('SET_CONTINENT', payload)
    },
    setCategory ({ commit }, payload) {
      commit('SET_CATEGORY', payload)
    }
  },
  getters: {
    continent: state => state.continent,
    continents: state => state.continents,
    category: state => state.category,
    categories: state => state.categories
  }
})
