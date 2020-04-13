import Vue from 'vue'
import Router from 'vue-router'
const Signin = () => import('./views/Signin.vue')
const Login = () => import('./views/Login.vue')
const BookList = () => import('./views/BookList.vue')

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
    path: '/books',
    component: BookList,
    meta: { private: true }
  }
]

const router = new Router({ routes: routes, mode: 'history' })

const getIsAuthenticated = () => !!localStorage.accessToken

router.beforeEach((to, from, next) => {
  const isAuthenticated = getIsAuthenticated()
  if (to.meta.private && !isAuthenticated) next({ path: '/login' })
  if (!to.meta.private && isAuthenticated) next({ path: '/books' })
  else next()
})

export default router
