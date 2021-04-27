<template>
  <div class="header pt-3 text-center bg-primary">
    <h1 class="text-light">
      <span>Take the </span>World Quiz
    </h1>
    <div class="bottom py-2">
      <h3 class="text-warning lead mb-0">
        <b class="font-weight-normal">Test your knowledge of the </b>
        <span class="font-weight-bold text-uppercase">{{ category }}</span> of
        <span class="font-weight-bold text-uppercase">{{ formattedContinent }}</span>
        <settings
          :auto-play="autoPlay"
          :difficulty-level="difficultyLevel"
          :show-settings="showSettings"
          @toggle-settings="toggleSettings"
          @update-auto-play="toggleAutoPlay"
          @update-difficulty-level="updateDifficultyLevel"
        />
        <show-hint
          :show-hint="showHint"
          @toggle-hint="toggleHint"
        />
      </h3>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import { ShowHint, Settings } from '@/components/settings'

export default {
  name: 'AppHeader',
  computed: {
    ...mapState({
      category: state => state.category.category,
      showHint: state => state.settings.showHint,
      showSettings: state => state.settings.showSettings,
      difficultyLevel: state => state.settings.difficultyLevel,
      autoPlay: state => state.settings.autoPlay
    }),
    ...mapGetters('continent', ['formattedContinent']),
    iconColor () {
      return this.showHint ? '#f4c01a' : '#ccc'
    }
  },
  components: {
    Settings,
    ShowHint
  },
  methods: {
    ...mapActions({
      setShowHint: 'settings/setShowHint',
      setShowSettings: 'settings/setShowSettings',
      setDifficultyLevel: 'settings/setDifficultyLevel',
      setAutoPlay: 'settings/setAutoPlay'
    }),
    toggleHint () {
      this.setShowHint(!this.showHint)
    },
    toggleSettings () {
      this.setShowSettings(!this.showSettings)
    },
    toggleAutoPlay (value) {
      this.setAutoPlay(value)
    },
    updateDifficultyLevel (value) {
      this.setDifficultyLevel(value)
    }
  }
}
</script>

<style lang="scss" scoped>
.bottom {
  background-color: rgba($black, 0.1);

  h3 {
    max-width: $max-header-width;
    width: 100%;
    margin: 3px auto;
    position: relative;

    .toggle-icon {
      position: absolute;
      bottom: -3px;
      right: 6px;

      &:hover {
        cursor: pointer;
      }
    }
  }
}

@media screen and (max-width: 736px) {
  h1 > span {
    display: none;
  }

  h3 > b {
    display: none;
  }
}

@media screen and (max-width: 430px) {
  h3 > span {
    display: block;
  }
}
</style>
