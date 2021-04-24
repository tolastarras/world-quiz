export default {
  namespaced: true,
  state: {
    showHint: false,
    showSettings: false,
    autoPlay: true,
    difficultyLevel: 'EASY'
  },
  mutations: {
    SET_SHOW_HINT (state, show) {
      state.showHint = show
    },
    SET_SHOW_SETTINGS (state, show) {
      state.showSettings = show
    },
    SET_AUTO_PLAY (state, value) {
      state.auto = value
    },
    SET_DIFFICULTY_LEVEL (state, value) {
      state.difficultyLevel = value
    }
  },
  actions: {
    setShowHint ({ commit }, show) {
      commit('SET_SHOW_HINT', show)
    },
    setShowSettings ({ commit }, show) {
      commit('SET_SHOW_SETTINGS', show)
    },
    setAutoPlay ({ commit }, value) {
      commit('SET_AUTO_PLAY', value)
    },
    setDifficultyLevel ({ commit }, value) {
      commit('SET_DIFFICULTY_LEVEL', value)
    }
  }
}
