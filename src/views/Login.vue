<template lang="pug">
  auth-container(:primary-action="login" :primary-title="primaryTitle" :alternative-route="alternativeRoute" :alternative-route-title="alternativeRouteTitle" :valid="!$v.$invalid")
    template(v-slot:content)
      form-input(v-model="$v.email" name='email' title='Email' :error='emailError')
      form-input(
        v-model="$v.password"
        name="password"
        title="Password"
        type="password"
        :error='passwordError')
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
  name: 'Login',
  components: {
    FormInput,
    AuthContainer
  },
  data () {
    return {
      email: '',
      password: '',
      primaryTitle: 'Login',
      alternativeRouteTitle: 'Sign Up',
      alternativeRoute: '/signup',
      emailError: null,
      passwordError: null
    }
  },
  watch: {
    email () {
      this.emailError = watchFieldError(this.$v, ERROR_TYPES, ERRORS, 'email')
    },
    password () {
      this.passwordError = watchFieldError(this.$v, ERROR_TYPES, ERRORS, 'password')
    }
  },
  methods: {
    async login () {
      const response = await AuthService.login({ email: this.email, password: this.password })
      if (response.ok) {
        localStorage.accessToken = response.data.access_token
        this.$router.push('/home')
      } else {
        // Showing only the first error just for simplicity
        this.error = response.data.error[0]
      }
    }
  },
  validations: {
    email: { required, format: email },
    password: { required, format: passwordFormat }
  }
}
</script>
