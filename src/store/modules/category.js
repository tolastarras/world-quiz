export default {
  namespaced: true,
  state: {
    category: '',
    categories: [
      'Capitals',
      'Countries',
      'Flags'
    ]
  },
  mutations: {
    SET_CATEGORY (state, category) {
      state.category = category
    }
  },
  actions: {
    setCategory ({ commit }, category) {
      commit('SET_CATEGORY', category)
    }
  }
}
