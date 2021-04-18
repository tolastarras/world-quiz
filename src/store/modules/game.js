export default {
  namespaced: true,
  state: {
    showHint: false
  },
  mutations: {
    SET_SHOW_HINT (state, show) {
      state.showHint = show
    }
  },
  actions: {
    setShowHint ({ commit }, show) {
      commit('SET_SHOW_HINT', show)
    }
  }
}
