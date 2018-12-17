<template>
  <div class="jumbotron text-center">
    <div class="container">
      <h1>Take the World Quiz</h1>
      <h4 class="mb-5">Test your knowledge!</h4>
    </div>
    <div class="bottom">
      <h3 class="text-light">{{ category }} of {{ continent }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    continent () {
      let continent = this.$store.getters.continent

      if (continent.toLowerCase() === 'world') {
        return 'the ' + continent
      }

      return continent
    },
    category () {
      return this.$store.getters.category
    }
  }
}
</script>

<style lang="scss" scoped>
.jumbotron {
  background: linear-gradient(90deg,#0d6632,#f4c01a);
  border-radius: 0;
  position: relative;

  .bottom {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 18px 0;
    background-color: rgba(0,0,0,.2);
  }
}
</style>
