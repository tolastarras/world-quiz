<template>
  <div class="btn-group">
    <button type="button" class="btn btn-primary dropdown-toggle mr-2 mb-2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <span class="fa fa-globe"></span> Region: <i>{{ continent }}</i> <span class="caret"></span>
    </button>
    <ul class="dropdown-menu">
      <li @click="selectContinent" class="list-item" :key="continent" v-for="continent in continents">{{ continent }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions('continent', ['setContinent']),
    selectContinent ({ target }) {
      this.setContinent(target.innerText)
    }
  },
  computed: {
    ...mapState('continent', ['continent', 'continents'])
  }
}
</script>

<style lang="scss" scoped>
.dropdown-menu {
  background-color: #008cba;
  border-color: #0079a1;

  > li {
    color: lightblue;
  }
}
</style>
