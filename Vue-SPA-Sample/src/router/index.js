import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import('../Views/Home/HomeView.vue')
  },
  {
    path: '/vue.js',
    name: 'vuejs',
    component: () => import('../Views/Vue.js/VueView.vue')
  },
  {
    path: '/vuetify',
    name: 'vuetify',
    component: () => import('../Views/Vuetify/VuetifyView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router