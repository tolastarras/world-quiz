<template>
  <lightbulb-icon
    v-if="!showHint"
    :title="title"
    class="toggle-icon"
    :size="34"
    :fillColor="iconColor"
    @click="handleClick"
  />
  <lightbulb-on-icon
    v-else
    class="toggle-icon"
    :title="title"
    :size="36"
    :fillColor="iconColor"
    @click="handleClick"
  />
</template>

<script>
import LightbulbIcon from 'vue-material-design-icons/Lightbulb'
import LightbulbOnIcon from 'vue-material-design-icons/LightbulbOn'

export default {
  name: 'ShowHint',
  props: {
    showHint: {
      type: Boolean,
      default: false
    }
  },
  components: {
    LightbulbIcon,
    LightbulbOnIcon
  },
  methods: {
    handleClick () {
      this.$emit('toggle-hint', !this.showHint)
    }
  },
  computed: {
    title () {
      return `${!this.showHint ? 'Show' : 'Hide'} Hint`
    },
    iconColor () {
      return !this.showHint ? '#ccc' : '#f4c01a'
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
