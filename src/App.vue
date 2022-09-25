<template>
  <div class="flow">
    <app-header></app-header>
    <router-view />
  {{$store.state.housesNumbersList}}
  </div>
</template>
<script>
  // import AppHeader from "@/components/AppHeader.vue"
  
  export default {
    components: {
      // AppHeader
    }
  }
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
:where(.flow :not(:first-child, nav > *)) {
  margin-top: 1.5rem;
}
nav {
  padding: 2rem;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
