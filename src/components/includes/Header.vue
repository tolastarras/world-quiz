<template>
  <div class="header pt-3 text-center bg-primary">
    <div class="container">
      <h1 class="text-light">
        <span>Take the </span>World Quiz
      </h1>
    </div>
    <div class="bottom py-2">
      <h3 class="text-warning lead mb-0">
        <b class="font-weight-normal">Test your knowledge of the </b>
        <span class="font-weight-bold text-uppercase">{{ category }}</span> of
        <span class="font-weight-bold text-uppercase">{{ formattedContinent }}</span>
      </h3>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'AppHeader',
  computed: {
    ...mapState('category', ['category']),
    ...mapGetters('continent', ['formattedContinent'])
  }
}
</script>

<style lang="scss" scoped>
.bottom {
  background-color: rgba($color1, 0.1);
}

@media screen and (max-width: 736px) {
  h1 {
    padding-bottom: .4em;
  }

  h3 {
    font-size: 1.6em;
  }
}

@media screen and (max-width: 480px) {
  h1 {
    font-size: 3em;
    padding-bottom: 1em;

    > span {
      display: none;
    }
  }

  h3 {
    font-size: 1.3em;
    margin: 0 1em;
  }
}
</style>
