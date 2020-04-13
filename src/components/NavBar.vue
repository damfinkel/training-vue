<template lang="pug" v-if="localStorage.accessToken">
  nav.navbar-container
    img.navbar-image(src="../assets/wolox-navbar-icon.png")
    .link-container
      button.see-cart(type="button")
        span.cart-badge {{ cartAmount }}
      button.logout-button(type="button" @click="logout") Logout
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'navbar',
  methods: {
    logout () {
      localStorage.removeItem('accessToken')
      this.$router.push('/login')
    }
  },
  computed: {
    ...mapGetters({ cartAmount: 'books/getCartAmount' })
  }
}
</script>

<style scoped lang="scss">
@import '../scss/colors';

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

.link-container {
  display: flex;
}

.see-cart {
  background: url('../assets/ic_cart.png') center/contain no-repeat;
  height: 23px;
  margin-right: 30px;
  position: relative;
  width: 23px;
}

.cart-badge {
  background-color: $blue;
  border-radius: 50%;
  color: white;
  height: 15px;
  font-size: 10px;
  position: absolute;
  right: 0;
  top: 0;
  transform: translate(50%, -50%);
  width: 15px;
}
</style>
