<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  created () {
    this.$store.dispatch('score/init')
  }
}
</script>

<style lang="scss">
#app {
  font-family: Arial, Helvetica, sans-serif;
  background: rgba(0, 100, 200, 0.5);
  background-image: url('./assets/mosaic.png');
}

button, a, li {
  font-size: 1.4em !important;
}
</style>
