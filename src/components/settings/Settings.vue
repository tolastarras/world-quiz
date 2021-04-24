<template>
  <div :class="showSettingsClasses">
    <cog-icon
      title=""
      class="cog-icon"
      fillColor="white"
      :size="32"
      @click="handleClick"
    />
    <transition name="fade">
      <div v-show="showSettings" class="mt-4">
        <p>Hello world</p>
      </div>
    </transition>
  </div>
</template>

<script>
import CogIcon from 'vue-material-design-icons/Cog'

export default {
  name: 'Settings',
  props: {
    showSettings: {
      type: Boolean,
      default: false
    }
  },
  components: {
    CogIcon
  },
  computed: {
    showSettingsClasses () {
      return `settings bg-secondary ${this.showSettings ? 'show' : ''}`
    }
  },
  methods: {
    handleClick () {
      console.log('hello')
      this.$emit('toggle-settings', !this.showSettings)
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

  &:hover {
    cursor: pointer;
  }

  &.show {
    width: 280px;
    height: 400px;
  }

  .cog-icon {
    position: absolute;
    top: 6px;
    left: 8px;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
}
</style>
