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
    score: {
      correct: 0,
      incorrect: 0
    }
  },
  mutations: {
    [types.SET_CONTINENT] (state, payload) { state.continent = payload },
    [types.SET_CATEGORY] (state, payload) { state.category = payload },
    [types.UPDATE_SCORE] (state, payload) {
      console.log('payload:', payload)
      state.score = payload
    }
  },
  actions: {
    setContinent ({ commit }, payload) {
      commit('SET_CONTINENT', payload)
    },
    setCategory ({ commit }, payload) {
      commit('SET_CATEGORY', payload)
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
    score: state => state.score
  }
})
