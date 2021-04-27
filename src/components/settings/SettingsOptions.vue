<template>
  <div class="container mt-5">
    <div :class="`content ${contentClass}`">
      <level-difficulty
        :difficulty="difficultyLevel"
        :buttons="buttons"
        @update-difficulty-level="handleDifficultyLevel"
      />
      <hr class="bg-light" />
      <h2 class="title text-white mt-4 pb-4">Automation</h2>
      <ui-switch @toggle-switch="toggleAutoPlay" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SettingsOptions',
  data: () => ({
    contentClass: '',
    buttons: [
      { text: 'easy', color: 'warning' },
      { text: 'medium', color: 'primary' },
      { text: 'hard', color: 'danger' }
    ]
  }),
  props: {
    difficultyLevel: {
      type: String,
      required: true
    }
  },
  components: {
    UiSwitch: () => import('@/components/ui/UiSwitch'),
    LevelDifficulty: () => import('@/components/settings/level/LevelDifficulty')
  },
  methods: {
    handleDifficultyLevel (value) {
      this.$emit('update-difficulty-level', value)
    },
    toggleAutoPlay (value) {
      this.$emit('update-auto-play', value)
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  font-family: monospace;
}
</style>
