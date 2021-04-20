<template>
  <footer class="bg-primary" :class="{ 'fixed-bottom': this.height > 1200 }">
    <p class="text-center mb-0 py-2 text-white-50">
      &copy; {{ new Date().getFullYear() }} - World Quiz. All rights reserved.
    </p>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  data: () => ({
    height: 0
  }),
  mounted () {
    this.height = window.innerHeight
  }
}
</script>
