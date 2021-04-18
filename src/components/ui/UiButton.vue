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
export default {
  name: 'UiButton',
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick ({ target }) {
      this.$emit('check-answer', target.innerText)
    }
  }
}
</script>
