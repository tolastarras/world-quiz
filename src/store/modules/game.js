export default {
  namespaced: true,
  state: {
    loading: true
  },
  mutations: {
    SET_LOADING (state, loading) {
      state.loading = loading
    }
  },
  actions: {
    setLoading ({ commit }, loading) {
      commit('SET_LOADING', loading)
    }
  }
}
