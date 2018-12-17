<template>
  <div class="btn-group">
    <button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <span class="fa fa-gamepad"></span> Category: Find {{ category }} <span class="caret"></span>
    </button>
    <ul class="dropdown-menu">
      <li @click="selectCategory" class="list-item" :key="category" v-for="category in categories">{{ category }}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  methods: {
    selectCategory (e) {
      this.$store.dispatch('changeCategory', e.target.innerText)
    }
  },
  computed: {
    ...mapGetters([
      'category',
      'categories'
    ])
    // category () {
    //   console.log(this.$store.getters.getCategory)
    //   return this.$store.getters.getCategory
    // },
    // categories () {
    //   return this.$store.getters.getCategories
    // }
  }
}
</script>

<style lang="scss" scoped>
.dropdown-menu {
  background-color: #43ac6a;
  border-color: #3c9a5f;
}
</style>
