
<template>
  <auth-container
    :primaryAction="login"
    :primaryTitle="primaryTitle"
    :alternativeRoute="alternativeRoute"
    :alternativeRouteTitle="alternativeRouteTitle"
    :valid="!$v.$invalid"
  >
    <template v-slot:content>
      <form-input name="email" title="Email" v-model="$v.email" :error="emailError" />
      <form-input name="password" title="Password" type="password" v-model="$v.password" :error="passwordError" />
    </template>
  </auth-container>
</template>

<script>
import AuthContainer from '@/components/AuthContainer'
import FormInput from '@/components/FormInput.vue'
import { required, email } from 'vuelidate/lib/validators'
import { passwordFormat, watchFieldError, REQUIRED_ERROR } from '@/utils/validators'
import * as AuthService from '@/services/AuthService'

const ERROR_TYPES = ['required', 'format']

const ERRORS = {
  email: {
    required: REQUIRED_ERROR,
    format: 'Field must contain a valid email'
  },
  password: {
    required: REQUIRED_ERROR,
    format: 'Password should contain a capital letter and a number'
  }
}

export default {
  name: 'login',
  components: {
    FormInput,
    AuthContainer
  },
  data: () => ({
    email: '',
    password: '',
    primaryTitle: 'Login',
    alternativeRouteTitle: 'Sign Up',
    alternativeRoute: '/signup',
    emailError: null,
    passwordError: null
  }),
  methods: {
    login: async function () {
      const response = await AuthService.login({ email: this.email, password: this.password })
      console.log(response.data)
    }
  },
  watch: {
    email: function () {
      this.emailError = watchFieldError(this.$v, ERROR_TYPES, ERRORS, 'email')
    },
    password: function () {
      this.passwordError = watchFieldError(this.$v, ERROR_TYPES, ERRORS, 'password')
    }
  },
  validations: {
    email: {
      required,
      format: email
    },
    password: {
      required,
      format: passwordFormat
    }
  }
}
</script>
