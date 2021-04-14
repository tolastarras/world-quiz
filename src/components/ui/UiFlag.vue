
<template>
  <div class="mt-0 mb-5 px-0">
    <vue-spinner v-if="loading" />
    <img v-else :src="src" alt="flag" />
  </div>
</template>

<script>
import VueSpinner from 'vue-simple-spinner'

export default {
  name: 'UiFlag',
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    src: {
      type: String,
      required: true
    }
  },
  components: {
    VueSpinner
  }
}
</script>

<style lang="scss" scoped>
img {
  max-width: $max-width;
  box-shadow: 5px 5px 12px 2px $grey3;
}

@media screen and (max-width: 640px) {
  img {
    max-width: 100%;
    box-shadow: 0 5px 12px 0 $grey3;
  }
}
</style>
