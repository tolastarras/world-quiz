
<template>
  <div :class="`${thumbnailClasses} mt-0 px-0`">
    <img :src="src" alt="flag" :class="`${imageClasses}`" />
  </div>
</template>

<script>
export default {
  name: 'UiFlag',
  props: {
    src: {
      type: String,
      required: true
    },
    hasShadow: {
      type: Boolean,
      default: false
    },
    isThumbnail: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    imageClasses () {
      const shadow = this.hasShadow ? 'shadow' : ''
      const thumbnail = this.isThumbnail ? 'thumbnail' : ''
      return `${shadow} ${thumbnail}`
    },
    thumbnailClasses () {
      return `mb-${this.isThumbnail ? '0 img-div' : 5}`
    }
  }
}
</script>

<style lang="scss" scoped>

.img-div {
  max-width: 70px;
  height: 36px;
}

img {
  max-width: 60%;
  max-height: 240px;

  &.thumbnail {
    border: 2px solid $white;
  }
}

@media screen and (max-width: 460px) {
  img {
    max-width: 100%;
  }
}
</style>
