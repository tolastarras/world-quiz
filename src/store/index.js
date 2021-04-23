import Vue from 'vue'
import Vuex from 'vuex'

import { category, continent, country, score, settings } from '@/store/modules'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    category,
    continent,
    country,
    score,
    settings
  }
})
