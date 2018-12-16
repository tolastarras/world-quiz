<template>
  <footer class="footer">
    <div class="container">
      <social-media />
      <p>
        &copy; 2018 - world-quiz
      </p>
    </div>
  </footer>
</template>

<script>
import SocialMedia from './SocialMedia'

export default {
  components: {
    SocialMedia
  }
}
</script>

<style lang="scss" scoped>
footer {
  text-align: center;
  opacity: .8;
  padding: 50px;
  background: linear-gradient(90deg,#f4c01a,#0d6632);
  color: #ccc;
}
</style>
