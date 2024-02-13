import { createRouter, createWebHistory } from 'vue-router'
import Chatroom from '../views/Chatroom.vue'
import NotFoundVue from '@/views/NotFound.vue'
import Login from '@/views/Login.vue'
import Signup from '@/views/Signup.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'chatroom',
      component: Chatroom
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundVue
    },
  ]
})

export default router
