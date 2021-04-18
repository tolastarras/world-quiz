import Vue from 'vue'
import Vuex from 'vuex'

import { category, continent, country, score, game } from '@/store/modules'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    category,
    continent,
    country,
    score,
    game
  }
})
