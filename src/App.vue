<template>
  <h1
    v-if="loading"
    class="text-secondary text-center mt-5"
  >
    Loading...
  </h1>
  <div v-else id="home">
    <header-section />
    <div>
      <world-quiz />
    </div>
    <footer-section />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { HeaderSection, FooterSection } from '@/components/includes'
import WorldQuiz from '@/components/quiz/'

export default {
  name: 'App',
  components: {
    HeaderSection,
    WorldQuiz,
    FooterSection
  },
  computed: {
    ...mapState({
      loading: 'game/loading'
    })
  },
  methods: {
    ...mapActions({
      init: 'score/init'
    })
  },
  created () {
    this.init()
  }
}
</script>

<style lang="scss">
#home {
  font-family: Arial, Helvetica, sans-serif;
  background-image: url('./assets/logo-bg.png');
  background-repeat: repeat;
  background-color: #eeefff;
  height: 100vh;
}

button, a, li {
  font-size: 1.4em !important;
}
</style>
