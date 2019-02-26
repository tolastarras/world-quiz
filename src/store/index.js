import Vue from 'vue'
import Vuex from 'vuex'

import * as types from './mutation-types'
import category from '@/store/modules/category'
import continent from '@/store/modules/continent'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    category,
    continent
  },
  state: {
    country: {},
    countries: [],
    score: {
      streak: 0,
      record: 0
    }
  },
  mutations: {
    [types.SET_COUNTRY] (state, country) { state.country = country },
    [types.SET_COUNTRIES] (state, payload) { state.countries = payload },
    [types.UPDATE_SCORE] (state, score) {
      state.score = score
      localStorage.setItem('record', score.record)
    }
  },
  actions: {
    init ({ commit, dispatch }) {
      // default selections
      dispatch('continent/setContinent', 'World')
      dispatch('category/setCategory', 'Capitals')

      if (!localStorage.getItem('record')) {
        localStorage.setItem('record', 0)
      }

      commit('UPDATE_SCORE', { streak: 0, record: localStorage.getItem('record') })
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
    continents: state => state.continents,
    country: state => state.country,
    countries: state => state.countries,
    score: state => state.score
  }
})
