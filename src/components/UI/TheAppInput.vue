<template>

  <label class="input-label" for="input-app">
    <slot></slot>
  </label>
  <input id="input-app" v-bind="$attrs" :value="modelValue" @input="updateInput">
  <!-- :colorField="colorField"
      :placeholder="placeholder" -->
</template>

<script>
export default {
  name: "the-app-input",
  props: {
    modelValue: { type: [String, Number], default: "" },
    // colorField: { type: [String, Number] },
  },
  data() {
    // const placeholder = 'try to input some';

    return {
      colorField: ''
    }
  },
  methods: {
    checkedNumber(event) {
      this.$emit('update:modelValue', event.target.value)
      // this.$emit('update:checkHouseNumber', $event.target.value)
    },
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
  padding: 1rem;
  outline: 2px solid rgb(157, 190, 190);
  border: none;
  border-radius: 1rem;

  &.valid {
    // color: teal;
    outline: 2px solid rgb(157, 190, 190);
  }

  &.invalid {
    // color: red;
    outline: 5px solid rgb(223, 58, 8);
  }
}
</style>