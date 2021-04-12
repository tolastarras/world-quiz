<template>
  <button
    type="button"
    class="btn btn-primary btn-block mb-2 mx-auto"
    :disabled="disabled"
    @click.prevent="handleClick"
  >
    {{ text  | formatCountryName }}
  </button>
</template>

<script>
import { formatCountryName } from '@/utils/format-string'

export default {
  name: 'UiButton',
  props: {
    text: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  filters: {
    formatCountryName
  },
  methods: {
    handleClick () {
      this.$emit('check-answer', this.text)
    }
  }
}
</script>

<style lang="scss" scoped>
.btn {
  max-width: 460px;
}

@media screen and (max-width: 760px) {
  .btn {
    max-width: 100%;
  }
}
</style>
