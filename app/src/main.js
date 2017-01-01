import Vue from 'vue'
import Electron from 'vue-electron'
import VueMaterial from 'vue-material'
import axios from 'axios'
import 'vue-material/dist/vue-material.css'

Vue.use(Electron)
Vue.use(VueMaterial)
Vue.config.debug = true
Vue.prototype.$http = axios
// Directives
Vue.directive('focus', {
  inserted: function (el) {
    el.focus()
  }
})

import App from './App'

/* eslint-disable no-new */
new Vue({
  ...App
}).$mount('#app')
