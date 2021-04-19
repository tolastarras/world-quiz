export default {
  namespaced: true,
  state: {
    continent: '',
    continents: [
      'World',
      'Africa',
      'Americas',
      'Asia',
      'Europe',
      'Oceania'
    ]
  },
  mutations: {
    SET_CONTINENT (state, continent) {
      state.continent = continent
    }
  },
  actions: {
    setContinent ({ commit }, continent) {
      commit('SET_CONTINENT', continent)
    }
  },
  getters: {
    formattedContinent: ({ continent }) =>
      ['World', 'Americas'].includes(continent) ? `the ${continent}` : continent
  }
}
