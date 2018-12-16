<template>
  <div class="home">
    <header-section />
    <div class="container">
      <world-quiz />
    </div>
    <footer-section />
  </div>
</template>

<script>
import HeaderSection from '@/components/Header'
import WorldQuiz from '@/components/WorldQuiz'
import FooterSection from '@/components/Footer'

export default {
  name: 'home',
  components: {
    HeaderSection,
    WorldQuiz,
    FooterSection
  }
}
</script>

<style lang="scss">

</style>
