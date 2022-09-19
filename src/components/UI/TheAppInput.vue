<template>
  <div>
    <label class="input-label" for="input-app" >
      <slot></slot>
    </label>
    <input type="text" id="input-app" :placeholder="placeholder" >
  </div>
</template>

<script>
export default {
  name: "the-app-input",
  props: {
    placeholder: {type: String, default: "default placeholder"}
  },
  setup() {
    // const placeholder = 'try to input some';

    return {}
  }
}
</script>

<style lang="scss" scoped>
.input-label {
  font-size: 1rem;
  font-weight: 700;
  padding: 0.5rem;
}

input {
  outline: 2px solid mediumvioletred;
  border: none;
  border-radius: 1rem;
}
</style>