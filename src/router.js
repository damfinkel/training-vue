import Vue from 'vue'
import Router from 'vue-router'
import Signin from './views/Signin.vue'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/signup',
      component: Signin
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      redirect: '/login'
    }
  ],
  mode: 'history'
})
