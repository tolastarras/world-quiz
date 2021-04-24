<template>
  <button
    class="btn-block text-uppercase font-weight-bold py-2"
    :class="btnClasses"
    type="button"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script>

export default {
  name: 'LevelButton',
  props: {
    difficulty: {
      type: String,
      required: true
    },
    button: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    btnClasses () {
      const isActive = this.button.text === this.difficulty.toLowerCase()
      return `text-${this.button.color} ${isActive ? 'selected' : ''}`
    }
  },
  methods: {
    handleClick ({ target }) {
      this.$emit('update-difficulty-level', target.innerText)
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

button {
  background: transparent;
  border-color: transparent;
  border-width: 3px;
  border-style: dashed;
  font-family: 'Press Start 2P', courier;

  &:hover,
  &:focus {
    outline: none;
    border-color: grey;
  }

  &.selected {
    border-color: white;
  }
}
</style>
