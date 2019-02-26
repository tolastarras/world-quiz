import Vue from 'vue'
import Vuex from 'vuex'

import category from '@/store/modules/category'
import continent from '@/store/modules/continent'
import country from '@/store/modules/country'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    category,
    continent,
    country
  },
  state: {
    score: {
      streak: 0,
      record: 0
    }
  },
  mutations: {
    UPDATE_SCORE (state, score) {
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
    updateScore ({ commit }, score) {
      commit('UPDATE_SCORE', score)
    }
  },
  getters: {
    score: state => state.score,
    getHint: (state, getters, rootState, rootGetters) => {
      // let country = rootGetters['country/formatCountryName']
      let continent = rootState.country.country.region
      if (continent.toLowerCase() === 'americas') {
        continent = continent.slice(0, -1)
      }
      return `Hint: This country is in ${continent}`
    }
  }
})
