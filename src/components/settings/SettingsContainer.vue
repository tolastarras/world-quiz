<template>
  <div :class="showSettingsClasses">
    <cog-icon
      title=""
      class="cog-icon"
      fillColor="white"
      :size="32"
      @click="handleClick"
    />
    <settings-options
      :difficulty-level="difficultyLevel"
      @update-difficulty-level="handleDifficultyLevel"
    />
  </div>
</template>

<script>
import CogIcon from 'vue-material-design-icons/Cog'

export default {
  name: 'SettingsContainer',
  props: {
    difficultyLevel: {
      type: String,
      required: true
    },
    showSettings: {
      type: Boolean,
      default: false
    }
  },
  components: {
    CogIcon,
    SettingsOptions: () => import('@/components/settings/SettingsOptions')
  },
  computed: {
    showSettingsClasses () {
      return `settings bg-dark ${this.showSettings ? 'show-settings-container' : ''}`
    }
  },
  methods: {
    handleClick () {
      this.$emit('toggle-settings', !this.showSettings)
    },
    handleDifficultyLevel (value) {
      this.$emit('update-difficulty-level', value)
    }
  }
}
</script>

<style lang="scss" scoped>
.settings {
  position: fixed;
  top: 16%;
  right: 0;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  z-index: 1;
  width: 46px;
  height: 44px;
  transition: all 1s ease-in-out;
  overflow: hidden;

  &.show-settings-container {
    width: 280px;
    height: 360px;
  }

  .cog-icon {
    position: absolute;
    top: 6px;
    left: 8px;

    &:hover {
      cursor: pointer;
    }
  }
}
</style>
