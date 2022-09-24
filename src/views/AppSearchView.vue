<template>
  <div>
    <h1>Список номерів будинків</h1>
    <div class="search-form">
      <the-app-input 
        type="text" 
        placeholder="введіть номер будинку"
        aria-controls="search-input"
        v-model:modelValue="checkingHouseNumber"
        >Введіть номер будинку для перевірки
      </the-app-input>
      <the-app-button>Перевірити</the-app-button>
    </div>
    <p>{{checkingHouseNumber}}</p>
    <p v-for="post in posts" :key="post.id">
      {{post.text}}
    </p>
  </div>
  <!-- v-model:colorField="colorField"
    v-model:checkHouseNumber="checkingHouseNumber"
      v-model:placeholder="placeholder" -->
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
      ],
      placeholder: "номер будинку",
      checkingHouseNumber: '',
      colorField: ''
    }
  },
  methods: {
    buttonClicked(arg) {
      alert("Event clickButton Cathed" + arg)
    },
    checkedNumber(value) {
      this.checkingHouseNumber = value
    }
  }
}
</script>

<style lang="scss" scoped>
.search-form {
  margin: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>