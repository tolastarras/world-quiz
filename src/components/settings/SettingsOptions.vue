<template>
  <div class="container mt-5">
    <div :class="`content ${contentClass}`">
      <level-difficulty
        :difficulty="difficultyLevel"
        :buttons="buttons"
        @update-difficulty-level="handleDifficultyLevel"
      />
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
    LevelDifficulty: () => import('@/components/settings/level/LevelDifficulty')
  },
  methods: {
    handleDifficultyLevel (value) {
      this.$emit('update-difficulty-level', value)
    }
  }
}
</script>
