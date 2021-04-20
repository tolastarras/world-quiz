import { formatCountryName } from '@/utils/string'

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
    formattedCountryName: state => formatCountryName(state.country.name),
    region: state => state.country.region
  }
}
