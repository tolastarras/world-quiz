<template>
  <button
    type="button"
    class="btn btn-primary mb-2 mx-auto"
    :class="btnType"
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
    },
    width: {
      type: [String, Number, Boolean],
      default: false
    }
  },
  computed: {
    btnType () {
      return !this.width ? 'btn-block' : 'mx-0'
    }
  },
  methods: {
    handleClick ({ target }) {
      this.$emit('check-answer', target.innerText)
    }
  }
}
</script>
