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
        <ui-switch class="toggle" @toggle="onToggle" />
      </h3>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import { UiSwitch } from '@/components/ui'

export default {
  name: 'AppHeader',
  computed: {
    ...mapState({
      category: state => state.category.category,
      showHint: state => state.game.showHing
    }),
    ...mapGetters('continent', ['formattedContinent'])
  },
  components: {
    UiSwitch
  },
  methods: {
    ...mapActions({
      setShowHint: 'game/setShowHint'
    }),
    onToggle (value) {
      this.setShowHint(value)
    }
  }
}
</script>

<style lang="scss" scoped>
.bottom {
  background-color: rgba($black, 0.1);

  h3 {
    max-width: $max-header-width;
    margin: 3px auto;

    .toggle {
      float: right;
      margin-top: -3px;
    }
  }
}

@media screen and (max-width: 736px) {
  h1 {
    padding-bottom: .4em;
  }

  h3 {
    font-size: 1.6em;
  }
}

@media screen and (max-width: 480px) {
  h1 {
    font-size: 3em;
    padding-bottom: 1em;

    > span {
      display: none;
    }
  }

  h3 {
    font-size: 1.3em;
    margin: 0 1em;
  }
}
</style>
