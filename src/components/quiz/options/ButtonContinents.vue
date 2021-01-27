<template>
  <div class="btn-group mr-2">
    <button
      type="button"
      class="btn btn-primary dropdown-toggle mb-2"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      Region: {{ continent }}
    </button>
    <ul class="dropdown-menu">
      <li
      v-for="continent in continents"
      :key="continent"
      class="list-item"
      @click="selectContinent"
      >
        {{ continent }}
      </li>
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
