export default {
  namespaced: true,
  state: {
    continent: {},
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
    formattedContinent: state => {
      let continent = state.continent

      if (['World', 'Americas'].includes(continent)) {
        continent = `the ${continent}`
      }

      return continent.toUpperCase()
    }
  }
}