<template>
  <form class="auth-container">
    <img src="../assets/logo-wolox.png" class="logo" />
    <slot name="content"></slot>
    <button
      type="button"
      class="button primary sign-up-button"
      @click.prevent="primaryAction"
      :disabled="!valid"
    >{{primaryTitle}}</button>
    <router-link type="button" class="button secondary" :to="alternativeRoute">{{alternativeRouteTitle}}</router-link>
    <span class="request-error" :v-show="!!error">{{error}}</span>
  </form>
</template>

<style scoped lang="scss">
@import "../scss/application";

$padding-sides: 30px;

.auth-container {
  background-color: #f0f0f0;
  border-top: 3px solid $blue;
  max-width: 270px;
  width: 330px;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 50%;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px $padding-sides;
}

.logo {
  height: auto;
  margin-bottom: 20px;
  width: calc(100% - 2 * #{$padding-sides});
}

.sign-up-button {
  margin-bottom: 40px;
  position: relative;

  &::after {
    content: "";
    height: 1px;
    background-color: grey;
    position: absolute;
    bottom: -20px;
    left: 0;
    right: 0;
  }

  &:disabled {
    background-color: #D0D0D0;
  }
}

.request-error {
  color: red;
  height: 10px;
  margin-top: 10px;
}
</style>

<script>

export default {
  name: 'AuthContainer',
  props: {
    primaryAction: {
      type: Function,
      required: true
    },
    primaryTitle: {
      type: String,
      required: true
    },
    alternativeRoute: {
      type: String,
      required: true
    },
    alternativeRouteTitle: {
      type: String,
      required: true
    },
    valid: {
      type: Boolean,
      default: true
    }
  }
}
</script>
