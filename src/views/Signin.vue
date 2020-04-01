<template>
  <auth-container
    :primaryAction="signup"
    :primaryTitle="primaryTitle"
    :alternativeRoute="alternativeRoute"
    :alternativeRouteTitle="alternativeRouteTitle"
    :error="error"
    :valid="!$v.$invalid"
  >
    <template v-slot:content>
      <form-input name="first_name" title="First Name" v-model="$v.firstName" :error="firstNameError" />
      <form-input name="last_name" title="Last Name" v-model="$v.lastName" :error="lastNameError" />
      <form-input name="email" title="Email" v-model="$v.email" :error="emailError"/>
      <form-input name="password" title="Password" type="password" v-model="$v.password" :error="passwordError" />
    </template>
  </auth-container>
</template>

<script>
import FormInput from '@/components/FormInput.vue'
import AuthContainer from '@/components/AuthContainer.vue'
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
  name: 'signup',
  components: {
    FormInput,
    AuthContainer
  },
  data: () => ({
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
  }),
  watch: {
    firstName: function () {
      this.firstNameError = watchFieldError(this.$v, ERROR_TYPES, ERRORS, 'firstName')
    },
    lastName: function () {
      this.lastNameError = watchFieldError(this.$v, ERROR_TYPES, ERRORS, 'lastName')
    },
    email: function () {
      this.emailError = watchFieldError(this.$v, ERROR_TYPES, ERRORS, 'email')
    },
    password: function () {
      this.passwordError = watchFieldError(this.$v, ERROR_TYPES, ERRORS, 'password')
    }
  },
  methods: {
    signup: async function (event) {
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
