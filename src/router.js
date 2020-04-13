import Vue from 'vue'
import Router from 'vue-router'
import Signin from './views/Signin.vue'
import Login from './views/Login.vue'
import Home from './views/Home.vue'

Vue.use(Router)

const routes = [
  {
    path: '/signup',
    component: Signin,
    meta: { private: false }
  },
  {
    path: '/login',
    component: Login,
    meta: { private: false }
  },
  {
    path: '/home',
    component: Home,
    meta: { private: true }
  }
]

const router = new Router({ routes: routes, mode: 'history' })

const getIsAuthenticated = () => !!localStorage.accessToken

router.beforeEach((to, from, next) => {
  const isAuthenticated = getIsAuthenticated()
  if (to.meta.private && !isAuthenticated) next({ path: '/login' })
  if (!to.meta.private && isAuthenticated) next({ path: '/home' })
  else next()
})

export default router
