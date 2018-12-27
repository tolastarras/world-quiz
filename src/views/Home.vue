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
import HeaderSection from '@/components/includes/Header'
import FooterSection from '@/components/includes/Footer'
import WorldQuiz from '@/components/quiz/'

export default {
  name: 'home',
  components: {
    HeaderSection,
    WorldQuiz,
    FooterSection
  }
}
</script>
