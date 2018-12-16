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
  data () {
    return {
      continents: [
        'World',
        'Africa',
        'Asia',
        'Europe',
        'North America',
        'South America',
        'Oceania'
      ]
    }
  },
  mounted () {
    // this.continent = this.continents[0]
  },
  methods: {
    selectContinent (e) {
      this.$store.dispatch('changeContinent', { continent: e.target.innerText })
    }
  },
  computed: {
    continent () {
      return this.$store.getters.getContinent.continent
    }
  }
}
</script>

<style lang="scss" scoped>
.dropdown-menu {
  background-color: #008cba;
  border-color: #0079a1;

  li {
    color: #ccc;
    margin: 0 8px;
    padding: 5px 0;
    border-bottom: 1px solid #ccc;

    &:hover {
      color: #eee;
      cursor: pointer;
    }

    &:last-child {
      padding-bottom: 0;
      border-bottom: 0;
    }
  }
}
</style>
