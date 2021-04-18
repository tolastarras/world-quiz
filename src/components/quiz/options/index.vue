<template>
  <div class="text-center">
    <select-button
      title="Region"
      :option="continent"
      :options="continents"
      @select-option="selectRegion"
    />
    <select-button
      title="Category"
      :option="category"
      :options="categories"
      @select-option="selectCategory"
    />
  </div>
</template>

<script>
import SelectButton from './SelectButton'

export default {
  name: 'QuizOptions',
  props: {
    category: {
      type: String,
      default: ''
    },
    categories: {
      type: Array,
      default: () => []
    },
    continent: {
      type: String,
      default: ''
    },
    continents: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    selectRegion (region) {
      this.$emit('select-region', region)
    },
    selectCategory (category) {
      this.$emit('select-category', category)
    }
  },
  components: {
    SelectButton
  }
}
</script>

<style lang="scss">
button i {
  font-size: .85em;
  font-style: normal;
}
.dropdown-menu {
  padding: 0 8px;
  width: 100%;

  > li {
    border-bottom: 1px solid $grey3;
    padding: 6px;

    &:hover {
      cursor: pointer;
      color: $white;
    }

    &:last-child {
      border: none;
    }
  }
}

@media screen and (max-width: 760px) {
  .btn-group {
    width: 100%;

    button {
      width: 100%;
      margin-right: 0 !important;
    }
  }
}

@media screen and (max-width: 320px) {
  button {
    font-size: 1.1em !important;
  }
}
</style>
