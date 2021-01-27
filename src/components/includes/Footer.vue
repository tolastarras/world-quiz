<template>
  <footer class="bg-primary">
    <div class="container">
      <social-media v-show="showSocialMedia" />
      <p class="text-center mb-0 py-2 text-white-50">
        &copy; {{ new Date().getFullYear() }} - World Quiz. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script>
import SocialMedia from '@/components/SocialMedia'

export default {
  name: 'AppFooter',
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
