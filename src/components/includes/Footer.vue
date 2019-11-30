<template>
  <footer class="footer">
    <div class="container">
      <social-media v-show="showSocialMedia" />
      <p>
        &copy; 2018 - World Quiz. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script>
import SocialMedia from '@/components/SocialMedia'

export default {
  data () {
    return {
      showSocialMedia: false
    }
  },
  components: {
    SocialMedia
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/components/_footer';
</style>
