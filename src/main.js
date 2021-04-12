import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

// global filter
Vue.filter('format-country-name', value => {
  // value = "Korea (Democratic People's Republic of)"
  // value = "Virgin Islands (U.S.)"
  // value = 'Micronesia (Federated States of)'
  // value = 'Iran (Islamic Republic of)'
  // value = 'Macedonia (the former Yugoslav Republic of)
  if (!value) return ''
  return value.replace(/(.*)\s\((.*)\)/, '$2 $1')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
