<template lang="pug" v-if="localStorage.accessToken">
  nav.navbar-container
    img.navbar-image(src="../assets/wolox-navbar-icon.png")
    button.logout-button(type="button" @click="logout") Logout
</template>

<style scoped lang="scss">
@import '../scss/application';

.navbar-container {
  align-items: center;
  background-color: white;
  border-top: 3px solid $blue;
  box-shadow: 0px 2px 5px 0px $grey;
  display: flex;
  height: 70px;
  justify-content: space-between;
  padding: 0 100px;
}

.navbar-image {
  max-height: 70%;
}

.logout-button {
  color: black;
  font-size: 18px;
}
</style>

<script>

export default {
  name: 'navbar',
  methods: {
    logout () {
      localStorage.removeItem('accessToken')
      this.$router.push('/login')
    }
  }
}
</script>
