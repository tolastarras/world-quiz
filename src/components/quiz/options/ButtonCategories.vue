<template>
  <div class="btn-group">
    <button type="button" class="btn btn-success dropdown-toggle mb-2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
      this.$store.dispatch('setCategory', e.target.innerText)
    }
  },
  computed: {
    ...mapGetters(['category', 'categories'])
    // category () {
    //   return this.$store.getters.getCategory
    // }
  }
}
</script>

<style lang="scss" scoped>
.dropdown-menu {
  background-color: #43ac6a;
  border-color: #3c9a5f;
  padding: 0 8px;
  width: 100%;

  > li {
    color: lightgreen;
    border-bottom: 1px solid #ddd;
    padding: 6px;

    &:hover {
      cursor: pointer;
      color: #fff;
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
