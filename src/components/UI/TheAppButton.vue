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
        this.$emit("clickButton")
      }
  }
}
</script>

<style lang="scss" scoped>
.button {
  margin: 0;
  padding-inline: 1.5rem;
  padding-block: 1rem;
  color: teal;
  background-color: transparent;
  border: 2px solid teal;
  border-radius: 1rem;
  transition: background-color 0.5s ease;
  cursor: pointer;

  &:hover,
  &:active,
  &:focus-visible {
    color: bisque;
    background-color: teal;
    cursor: pointer;
  }
}
</style>