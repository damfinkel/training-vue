<template>
  <auth-container
    :primary-action="signup"
    :primary-title="primaryTitle"
    :alternative-route="alternativeRoute"
    :alternative-route-title="alternativeRouteTitle"
    :error="error"
    :valid="!$v.$invalid"
  >
    <template v-slot:content>
      <form-input v-model="$v.firstName" name='first_name' title='First Name' :error='firstNameError' />
      <form-input v-model="$v.lastName" name='last_name' title='Last Name' :error='lastNameError' />
      <form-input v-model="$v.email" name='email' title='Email' :error='emailError' />
      <form-input
        v-model="$v.password"
        name="password"
        title="Password"
        type="password"
        :error='passwordError'
      />
    </template>
  </auth-container>
</template>

<script>
import FormInput from '@/components/FormInput'
import AuthContainer from '@/components/AuthContainer'
import { required, email } from 'vuelidate/lib/validators'
import { passwordFormat, REQUIRED_ERROR, watchFieldError } from '@/utils/validators'
import { register } from '@/services/AuthService'

const ERROR_TYPES = ['required', 'format']

const ERRORS = {
  firstName: {
    required: REQUIRED_ERROR
  },
  lastName: {
    required: REQUIRED_ERROR
  },
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
  name: 'Signup',
  components: { FormInput, AuthContainer },
  data () {
    return {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      emailError: '',
      passwordError: '',
      firstNameError: '',
      lastNameError: '',
      primaryTitle: 'Sign up',
      alternativeRouteTitle: 'Login',
      alternativeRoute: '/login',
      error: null
    }
  },
  watch: {
    firstName () {
      this.firstNameError = watchFieldError(this.$v, ERROR_TYPES, ERRORS, 'firstName')
    },
    lastName () {
      this.lastNameError = watchFieldError(this.$v, ERROR_TYPES, ERRORS, 'lastName')
    },
    email () {
      this.emailError = watchFieldError(this.$v, ERROR_TYPES, ERRORS, 'email')
    },
    password () {
      this.passwordError = watchFieldError(this.$v, ERROR_TYPES, ERRORS, 'password')
    }
  },
  methods: {
    async signup (event) {
      const response = await register({
        email: this.email,
        password: this.password,
        password_confirmation: this.password,
        first_name: this.firstName,
        last_name: this.lastName,
        locale: 'en'
      })
      if (response.ok) {
        localStorage.accessToken = response.data.access_token
      } else {
        // Showing only the first error just for simplicity
        this.error = response.data.error[0]
      }
    }
  },
  validations: {
    firstName: {
      required
    },
    lastName: {
      required
    },
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
