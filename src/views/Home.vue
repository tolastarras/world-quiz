<template>
  <div class="home">
    <header-section />
    <div>
      <world-quiz />
    </div>
    <footer-section />
  </div>
</template>

<script>
import { HeaderSection, FooterSection } from '@/components/includes'
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
