import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    continent: null
  },
  mutations: {
    changeContinent: (state, payload) => state.continent = payload
  },
  actions: {
    changeContinent ({ commit }, payload) {
      commit('changeContinent', payload)
    }
  },
  getters: {
    getContinent: state => state.continent
  }
})
