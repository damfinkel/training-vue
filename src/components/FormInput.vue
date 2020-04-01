<template>
  <div class="container">
    <div class="form-input-container">
      <label :for="name" class="label">{{ title }}</label>
      <input :id="name" :name="name" :type="type" class="input" v-model="computedValue.$model" />
    </div>
    <!-- <span class="error" v-show="!computedValue.required">Field is required</span>
    <span class="error" v-show="computedValue.format === false">Password should contain a capital letter and a number</span> -->
    <span class="error" v-show="!!error">{{error}}</span>
  </div>
</template>

<style scoped lang="scss">
.container {
  margin-bottom: 25px;
  position: relative;
  width: 100%;
}

.form-input-container {
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 5px;
}

.label {
  padding-left: 10px;
  font-size: 13px;
  font-weight: bold;
}

.input {
  border: none;
  border-radius: 6px;
  height: 30px;
  width: 100%;
}

.error {
  color: red;
  font-size: 10px;
  left: 0;
  position: absolute;
}

</style>

<script>
export default {
  name: 'FormInput',
  props: {
    title: String,
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      required: true
    },
    value: {
      type: Object,
      required: true
    },
    error: {
      type: String
    }
  },
  computed: {
    computedValue: {
      get () { return this.value },
      set (value) {
        this.$emit('input', value)
      }
    }
  }
}
</script>
