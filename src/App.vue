<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view />
  </div>
</template>

<script>
import { setAccessTokenHeader } from '@/services/api'
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  },
  created () {
    if (localStorage.accessToken) {
      setAccessTokenHeader(localStorage.accessToken)
    }
  }
}
</script>

<style lang="scss">
@import './scss/application.scss';
</style>
