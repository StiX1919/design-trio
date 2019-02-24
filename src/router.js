import Vue from 'vue'
import Router from 'vue-router'
import Static from './views/Static.vue'
import Complex from './views/Complex.vue'
import Dynamic from './views/Dynamic.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'static',
      component: Static
    },
    {
      path: '/complex',
      name: 'Complex',
      component: Complex
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/Dynamic',
      name: 'Dynamic',
      component: Dynamic
    },
  ]
})
