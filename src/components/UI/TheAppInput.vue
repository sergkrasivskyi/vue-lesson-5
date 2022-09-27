<template>

  <label class="input-label" for="input-app">
    <slot> </slot>
    <input id="input-app" v-bind="$attrs" :value="modelValue" @input="updateInput">
  </label>
    
</template>

<script>
export default {
  name: "the-app-input",
  props: {
    modelValue: { type: [String, Number], default: "" },
  },
  data() {
    return {
    }
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
.input-label {
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
  padding: 0.5rem;
}

input {
  margin: 0;
  margin-left: 1rem;
  padding: 1rem;
  border: 2px solid teal;
  border-radius: 1rem;

  &.valid {
    // color: teal;
    outline: 2px solid teal;
  }

  &.invalid {
    // color: red;
    outline: 5px solid rgb(223, 58, 8);
  }
}
</style>