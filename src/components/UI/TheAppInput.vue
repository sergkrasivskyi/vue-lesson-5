<template>

    <label class="input-label" for="input-app" >
      <slot></slot>
    </label>
    <input id="input-app"
      v-bind="$attrs"
      :value="modelValue"
      @input="checkedNumber"
    >
    <!-- :colorField="colorField"
      :placeholder="placeholder" -->
</template>

<script>
export default {
  name: "the-app-input",
  props: {
    modelValue: { type: [String, Number], default: ""},
    colorField: { type: [String, Number] },
  },
  data() {
    // const placeholder = 'try to input some';

    return { 
    
    }
  },
  methods: {
    checkedNumber(event) {
      this.$emit('update:modelValue', event.target.value)
      // this.$emit('update:checkHouseNumber', $event.target.value)
    },
    
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
  outline: 2px solid mediumvioletred;
  border: none;
  border-radius: 1rem;
}
</style>