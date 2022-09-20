<template>
  <div>
    <h1>Список постів</h1>
    <the-app-button>Додати пост</the-app-button>
    <the-app-input placeholder="try to search">Search page</the-app-input>
    <p v-for="post in posts" :key="post.id">
      {{post.text}}
    </p>
  </div>
</template>

<script>
export default {
  name: "AppSearchView",
  data() {
    return {
      posts: [
        { id: 1, text: "asdasd" },
        { id: 2, text: "sdfgsdfg" },
        { id: 3, text: "assdfgsdfdasd" },
        { id: 4, text: "as12313123dasd" }
      ]
    }


  },
  methods: {
    buttonClicked(arg) {
      alert("Event clickButton Cathed" + arg)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>