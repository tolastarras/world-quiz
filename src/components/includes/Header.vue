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
        <settings :show-hint="showHint" @toggle="handleClick" />
      </h3>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import Settings from '@/components/settings'

export default {
  name: 'AppHeader',
  computed: {
    ...mapState({
      category: state => state.category.category,
      showHint: state => state.settings.showHint
    }),
    ...mapGetters('continent', ['formattedContinent'])
  },
  components: {
    Settings
  },
  methods: {
    ...mapActions({
      setShowHint: 'settings/setShowHint'
    }),
    handleClick () {
      this.setShowHint(!this.showHint)
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
