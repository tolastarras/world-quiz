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
  background: $color5;
}

button, a, li {
  font-size: 1.4em !important;
}
</style>
