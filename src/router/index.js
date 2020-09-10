import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Topology',
    component: () => import('../views/Topology.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
