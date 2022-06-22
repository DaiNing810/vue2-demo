import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/pathify',
    name: 'Pathify',
    component: () => import('../views/Pathify.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
