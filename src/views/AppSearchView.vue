<template>
  <div>
    <h1>Список постів</h1>
    <the-app-button @clickButton="buttonClicked">Додати пост</the-app-button>
    <the-app-input placeholder="try to search">Search page</the-app-input>
  </div>
</template>

<script>
export default {
  name: "AppSearchView",
  methods: {
    buttonClicked(arg) {
      alert("Event clickButton Cathed" + arg)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>