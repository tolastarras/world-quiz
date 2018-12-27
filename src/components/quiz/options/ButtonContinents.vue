<template>
  <div class="btn-group">
    <button type="button" class="btn btn-primary dropdown-toggle mr-2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <span class="fa fa-globe"></span> Region: {{ continent }} <span class="caret"></span>
    </button>
    <ul class="dropdown-menu">
      <li @click="selectContinent" class="list-item" :key="continent" v-for="continent in continents">{{ continent }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    selectContinent (e) {
      this.$store.dispatch('setContinent', e.target.innerText)
    }
  },
  computed: {
    continent () {
      return this.$store.getters.continent
    },
    continents () {
      return this.$store.getters.continents
    }
  }
}
</script>

<style lang="scss" scoped>
.dropdown-menu {
  background-color: #008cba;
  border-color: #0079a1;
}

@media screen and (max-width: 415px) {
  button {
    margin-bottom: .5em;
  }
}
</style>
