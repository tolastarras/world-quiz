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
  },
  getters: {
    key: state => state.category === 'Capitals' ? 'capital' : 'name'
  }
}
