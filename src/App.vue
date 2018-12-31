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
    this.$store.dispatch('init')
  }
}
</script>

<style lang="scss">
#app {
  color: #2c3e50;
  font-family: Arial, Helvetica, sans-serif;
  background: #eee;
}

#nav {
  display: none;
}

button, a, li {
  font-size: 1.4em !important;
}
</style>
