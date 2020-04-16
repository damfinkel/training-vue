import Vue from 'vue'
import Vuelidate from 'vuelidate'
import VueI18n from 'vue-i18n'

import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(Vuelidate)
Vue.use(VueI18n)

Vue.config.productionTip = false

const i18n = new VueI18n({
  locale: 'es',
  messages: {
    en: {
      login: {
        email: 'Email',
        password: 'Password',
        login: 'Login',
        signup: 'Sign up'
      }
    },
    es: {
      login: {
        email: 'Email',
        password: 'Contraseña',
        login: 'Iniciar sesión',
        signup: 'Registrarse'
      }
    }
  }
})

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App)
}).$mount('#app')
