<template>
  <cog-icon
    :title="title"
    :fillColor="helpIconColor"
    :size="34"
    class="toggle"
    @click="handleClick"
  />
</template>

<script>
import CogIcon from 'vue-material-design-icons/Cog'

export default {
  name: 'Settings',
  props: {
    showHint: {
      type: Boolean,
      default: false
    }
  },
  components: {
    CogIcon
  },
  methods: {
    handleClick () {
      this.$emit('toggle', !this.showHint)
    }
  },
  computed: {
    title () {
      return `${!this.showHint ? 'Show' : 'Hide'} Hint`
    },
    helpIconColor () {
      return !this.showHint ? '#aaa' : '#f4c01a'
    }
  }
}
</script>

<style lang="scss" scoped>
.toggle {
  position: absolute;
  bottom: -3px;
  right: 6px;

  &:hover {
    cursor: pointer;
  }
}
</style>
