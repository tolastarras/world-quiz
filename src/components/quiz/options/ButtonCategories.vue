<template>
  <div class="btn-group">
    <button
      type="button"
      class="btn btn-success dropdown-toggle mb-2"
      data-toggle="dropdown" aria-haspopup="true"
      aria-expanded="false"
    >
      Category: Find {{ category }}
    </button>
    <ul class="dropdown-menu">
      <li
        v-for="category in categories"
        :key="category"
        class="list-item"
        @click="selectCategory"
      >
        {{ category }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions('category', ['setCategory']),
    selectCategory ({ target }) {
      this.setCategory(target.innerText)
    }
  },
  computed: mapState('category', ['category', 'categories'])
}
</script>

<style lang="scss" scoped>
.dropdown-menu {
  background-color: #43ac6a;
  border-color: #3c9a5f;

  > li {
    color: lightgreen;
  }
}
</style>
