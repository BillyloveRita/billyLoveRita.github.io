// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Cube from 'cube-ui'
import router from './router'
import http from './js/service'
import '@/scss/common'

Vue.prototype.$http = http
Vue.config.productionTip = false

Vue.use(Cube)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<router-view/>'
})
