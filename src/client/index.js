import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import store from './store'

const router = new VueRouter({
  mode: 'history',
  routes,
  // fixed from https://router.vuejs.org/en/advanced/scroll-behavior.html
  // reset scroll to 0, 0 after transition
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

Vue.use(VueRouter)
// register component
new Vue({
  base: '/',
  el: '#app',
  store,
  router,
  template: '<router-view />',
  created: () => {
    console.log('Doconfig is ready to use.')
  }
})
