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
    ]
  },
  mutations: {
    [types.UPDATE_CONTINENT] (state, payload) { state.continent = payload },
    [types.UPDATE_CATEGORY] (state, payload) { state.category = payload }
  },
  actions: {
    changeContinent ({ commit }, payload) {
      commit('UPDATE_CONTINENT', payload)
    },
    changeCategory ({ commit }, payload) {
      commit('UPDATE_CATEGORY', payload)
    }
  },
  getters: {
    continent: state => state.continent,
    continents: state => state.continents,
    category: state => state.category,
    categories: state => state.categories
  }
})
