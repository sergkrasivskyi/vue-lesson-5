<template>
  <button class="button" @click="clickButton">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "TheAppButton",
  methods: {
      clickButton() {
        this.$emit("clickButton", "  It Happens")
      }
  }
}
</script>

<style lang="scss" scoped>
.button {
  padding-inline: 1.5rem;
  padding-block: 1rem;
  color: teal;
  background-color: transparent;
  outline: 2px solid mediumvioletred;
  border: none;
  border-radius: 1rem;
  transition: background-color 0.5s ease;

  &:hover,
  &:active,
  &:focus-within {
    color: bisque;
    background-color: teal;
  }
}
</style>