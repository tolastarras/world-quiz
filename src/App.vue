<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  created () {
    this.$store.dispatch('changeContinent', 'World')
    this.$store.dispatch('changeCategory', 'Capitals')
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  display: none;
}

.dropdown-menu {
  li {
    color: #eee;
    margin: 0 8px;
    padding: 5px 0;
    border-bottom: 1px solid #ddd;

    &:hover {
      color: #fff;
      cursor: pointer;
    }

    &:last-child {
      padding-bottom: 0;
      border-bottom: 0;
    }
  }
}
</style>
