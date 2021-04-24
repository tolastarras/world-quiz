<template>
  <div class="show-text">
    <h2 class="title text-white pt-3 pb-4">Difficulty</h2>
    <level-button
      v-for="button in buttons"
      :key="button.text"
      :difficulty="difficulty"
      :button="button"
      @update-difficulty-level="updateDifficultyLevel"
    >
      {{ button.text }}
    </level-button>
  </div>
</template>

<script>
import LevelButton from '@/components/settings/level/LevelButton'

export default {
  name: 'DifficultyLevel',
  props: {
    difficulty: {
      type: String,
      required: true
    },
    buttons: {
      type: Array,
      required: true
    }
  },
  components: {
    LevelButton
  },
  methods: {
    updateDifficultyLevel (value) {
      this.$emit('update-difficulty-level', value)
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  font-family: monospace;
}
</style>
