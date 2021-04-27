<template>
  <div>
    <div :class="overlayClasses" @click="closeDialog" />
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
        @update-auto-play="handleAutoPlay"
      />
    </div>
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
    },
    overlayClasses () {
      return this.showSettings ? 'overlay' : ''
    }
  },
  methods: {
    handleClick () {
      this.$emit('toggle-settings', !this.showSettings)
    },
    handleDifficultyLevel (value) {
      this.$emit('update-difficulty-level', value)
    },
    handleAutoPlay (value) {
      this.$emit('update-auto-play', value)
    },
    closeDialog () {
      this.handleClick()
    }
  }
}
</script>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 100, 0.5);
  z-index: 1;
  transition: all 1s ease-in-out;
  cursor: pointer;
}

.settings {
  position: fixed;
  top: 16%;
  right: 0;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  z-index: 2;
  width: 46px;
  height: 44px;
  transition: all 0.5s ease-in-out;
  overflow: hidden;

  &.show-settings-container {
    width: 280px;
    height: 500px;
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
