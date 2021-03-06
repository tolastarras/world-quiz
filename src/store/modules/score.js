export default {
  namespaced: true,
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
      dispatch('continent/setContinent', 'World', { root: true })
      dispatch('category/setCategory', 'Capitals', { root: true })

      if (!localStorage.getItem('record')) {
        localStorage.setItem('record', 0)
      }
      commit('UPDATE_SCORE', { streak: 0, record: localStorage.getItem('record') })
    },
    updateScore ({ commit }, score) {
      commit('UPDATE_SCORE', score)
    }
  }
}
