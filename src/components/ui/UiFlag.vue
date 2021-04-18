
<template>
  <div class="mt-0 mb-5 px-0">
    <vue-spinner v-if="loading" />
    <img v-else :src="src" alt="flag" :class="imageShadowClass" />
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
    },
    imageShadow: {
      type: Boolean,
      default: false
    }
  },
  components: {
    VueSpinner
  },
  computed: {
    imageShadowClass () {
      return this.imageShadow ? 'shadow' : ''
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  max-width: 100%;

  &.shadow {
    box-shadow: 5px 5px 12px 2px $grey3;
  }
}

@media screen and (max-width: 640px) {
  img {
    box-shadow: 0 5px 12px 0 $grey3;
  }
}
</style>
