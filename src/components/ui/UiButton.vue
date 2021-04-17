<template>
  <button
    type="button"
    class="btn btn-primary btn-block mb-2 mx-auto"
    :disabled="disabled"
    @click.prevent="handleClick"
  >
    <slot />
  </button>
</template>

<script>
import { formatCountryName } from '@/utils/format-string'

export default {
  name: 'UiButton',
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  filters: {
    formatCountryName
  },
  methods: {
    handleClick (e) {
      this.$emit('check-answer', e.target.innerText)
    }
  }
}
</script>
