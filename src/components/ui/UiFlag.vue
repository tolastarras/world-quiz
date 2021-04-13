
<template>
  <img :src="src" alt="flag" class="mt-0 mb-5 px-0" />
</template>

<script>
export default {
  name: 'UiFlag',
  props: {
    src: {
      type: String,
      required: true
    }
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
