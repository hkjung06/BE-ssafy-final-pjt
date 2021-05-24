import Vue from 'vue'
import VueRouter from 'vue-router'

import Tmdb from '@/views/movies/Tmdb'
import Signup from '@/views/accounts/Signup'
import Login from '@/views/accounts/Login'
import MovieRecommend from '@/views/movies/MovieRecommend'

Vue.use(VueRouter)

const routes = [
  {
    path: '/movies/',
    name: 'Tmdb',
    component: Tmdb
  },
  {
    path: '/accounts/signup',
    name: 'Signup',
    component: Signup,
  },
  {
    path: '/accounts/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/movies/recommend',
    name: 'MovieRecommend',
    component: MovieRecommend
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
