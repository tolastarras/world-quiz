export default {
  namespaced: true,
  state: {
    country: {},
    countries: []
  },
  mutations: {
    SET_COUNTRY (state, country) {
      state.country = country
    },
    SET_COUNTRIES (state, countries) {
      state.countries = countries
    }
  },
  actions: {
    setCountry ({ commit }, country) {
      commit('SET_COUNTRY', country)
    },
    setCountries ({ commit }, countries) {
      commit('SET_COUNTRIES', countries)
    }
  },
  getters: {
    formatCountryName: state => {
      return state.country.name.replace(/(.*)\s\((.*)\)/, '$2 $1').replace(/(.*),(.*)/, '$2 $1')
    }
  }
}
