<template>
  <div class="btn-group mr-2">
    <button
      type="button"
      :class="`btn btn-primary dropdown-toggle mb-2 btn-${btnColorClass}`"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      {{ title }}: {{ option }}
    </button>
    <ul :class="`${lcTitle} dropdown-menu`">
      <li
        v-for="option in options"
        :key="option"
        class="list-item"
        @click="selectOption"
      >
        {{ option }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SelectButton',
  props: {
    title: {
      type: String,
      required: true
    },
    option: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      required: true
    }
  },
  methods: {
    selectOption ({ target }) {
      this.$emit('select-option', target.innerText)
    }
  },
  computed: {
    lcTitle () {
      return this.title.toLowerCase()
    },
    btnColorClass () {
      return this.lcTitle === 'category' ? 'success' : 'primary'
    }
  }
}
</script>

<style lang="scss" scoped>
.category.dropdown-menu {
  background-color: $green1;
  border-color: $green2;

  > li {
    color: $green3;
  }
}

.region.dropdown-menu {
  background-color: $blue1;
  border-color: $blue2;

  > li {
    color: $blue3;
  }
}
</style>
