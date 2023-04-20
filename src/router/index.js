import {createWebHistory, createRouter} from 'vue-router'
import Home from '../pages/index.vue'
import About from '../pages/about.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: About
  }
]


const router = createRouter({
  history: createWebHistory(),
  routes
})


export default router
