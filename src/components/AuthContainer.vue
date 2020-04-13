<template lang="pug">
  form.auth-container(@submit.prevent)
    img.logo(src='../assets/logo-wolox.png')
    slot(name='content')
    button.button.primary.sign-up-button(type='submit' :disabled="!valid" @click.prevent="primaryAction") {{ primaryTitle }}
    router-link.button.secondary(type='button' :to='alternativeRoute') {{ alternativeRouteTitle }}
    span.request-error(:v-show='!!error') {{ error }}
</template>

<script>
export default {
  name: 'AuthContainer',
  props: {
    primaryAction: { type: Function, required: true },
    primaryTitle: { type: String, required: true },
    alternativeRoute: { type: String, required: true },
    alternativeRouteTitle: { type: String, required: true },
    valid: { type: Boolean, default: true },
    error: { type: String }
  }
}
</script>

<style scoped lang="scss">
@import '../scss/colors';

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
    content: '';
    height: 1px;
    background-color: grey;
    position: absolute;
    bottom: -20px;
    left: 0;
    right: 0;
  }

  &:disabled {
    background-color: #d0d0d0;
  }
}

.request-error {
  color: red;
  height: 10px;
  margin-top: 10px;
}
</style>
