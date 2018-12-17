import Vue from 'vue'
import Vuex from 'vuex'

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
      'North America',
      'South America',
      'Oceania'
    ],
    categories: [
      'Flags',
      'Capitals',
      'Countries'
    ]
  },
  mutations: {
    updateContinent (state, payload) { state.continent = payload },
    updateCategory (state, payload) { state.category = payload }
  },
  actions: {
    changeContinent ({ commit }, payload) {
      commit('updateContinent', payload)
    },
    changeCategory ({ commit }, payload) {
      commit('updateCategory', payload)
    }
  },
  getters: {
    continent: state => state.continent,
    continents: state => state.continents,
    category: state => state.category,
    categories: state => state.categories
  }
})
