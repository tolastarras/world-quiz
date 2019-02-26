<template>
  <div class="jumbotron text-center">
    <div class="container">
      <h1 class="display-4 mb-5 text-light"><span>Take the </span>World Quiz</h1>
    </div>
    <div class="bottom">
      <h3 class="text-warning"><b>Test your knowledge of the </b> <span>{{ category }}</span> of <span>{{ formattedContinent }}</span></h3>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapState('category', { cat: 'category' }),
    ...mapGetters('continent', ['formattedContinent']),
    category () {
      return this.cat.toUpperCase()
    }
  }
}
</script>

<style lang="scss" scoped>
.jumbotron {
  background: linear-gradient(90deg,#0d6632,#f4c01a);
  border-radius: 0;
  position: relative;

  h3 {
    letter-spacing: 2px;

    > b {
      font-weight: normal;
    }

    > span {
      color: lighten(#ffc107, 20);
    }
  }

  .bottom {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 18px 0;
    background-color: rgba(0,0,0,.2);
  }
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
