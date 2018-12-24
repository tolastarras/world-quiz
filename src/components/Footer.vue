<template>
  <footer class="footer">
    <div class="container">
      <social-media v-show="false" />
      <p>
        &copy; 2018 - World Quiz. All rights reserved.
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
