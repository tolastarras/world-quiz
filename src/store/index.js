import Vue from 'vue'
import Vuex from 'vuex'

import category from '@/store/modules/category'
import continent from '@/store/modules/continent'
import country from '@/store/modules/country'
import score from '@/store/modules/score'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    category,
    continent,
    country,
    score
  }
})
