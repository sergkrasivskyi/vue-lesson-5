<template>
  <nav class="header-nav">
    <div class="header-nav__logo">
      <router-link class="header-nav__link" to="/"><img src="../assets/logo.png" alt="Logo"></router-link>
    </div>
    <div class="links">
      <router-link class="header-nav__link" to="/">Home</router-link> |
      <router-link class="header-nav__link" to="/about">About</router-link> |
      <router-link class="header-nav__link" to="/search">Search</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "AppHeader"
}
</script>

<style lang="scss" scoped>
.header-nav {
  height: 3rem;
  display: flex;
  align-items: center;

  .links {
    margin-left: auto;
  }

  &__logo {
    height: inherit;

    img {
      height: 100%;
    }

  }

  &__link {}
}
</style>