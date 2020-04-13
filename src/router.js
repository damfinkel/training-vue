import Vue from 'vue'
import Router from 'vue-router'
const Signin = () => import('./views/Signin.vue')
const Login = () => import('./views/Login.vue')
const BookList = () => import('./views/BookList.vue')

Vue.use(Router)

const privateRoutes = [{ path: '/signup', component: Signin }, { path: '/login', component: Login }]
const publicRoutes = [{ path: '/home', component: BookList }, { path: '/', component: BookList }]

const routes = [
  ...privateRoutes,
  ...publicRoutes
]

const router = new Router({ routes: routes, mode: 'history' })

const getIsAuthenticated = () => !!localStorage.accessToken

router.beforeEach((to, from, next) => {
  const isAuthenticated = getIsAuthenticated()
  if (publicRoutes.find(route => route.path === to.path) && !isAuthenticated) next({ path: '/login' })
  if (privateRoutes.find(route => route.path === to.path) && isAuthenticated) next({ path: '/home' })
  else next()
})

export default router
