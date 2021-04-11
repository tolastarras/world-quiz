import Vue from 'vue'
import VueMq from 'vue-mq'

import App from './App.vue'
import router from './router'
import store from './store/'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

// global filter
Vue.filter('format-country-name', value => {
  // str = "Korea (Democratic People's Republic of)"
  if (!value) return ''
  return value.replace(/(.*)\s\((.*)\)/, '$2 $1')
})

Vue.use(VueMq, {
  breakpoints: {
    mobile: 450,
    tablet: 900,
    laptop: 1250,
    desktop: Infinity
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
