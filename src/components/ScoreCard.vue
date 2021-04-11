<template>
  <div class="card text-uppercase py-3">
    <h3 class="font-weight-bold text-secondary text-nowrap">{{ title }}</h3>
    <div :class="`display-3 text-${color}`">
      <strong>{{ score }}</strong>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScoreCard',
  props: {
    title: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: 'primary'
    },
    score: {
      type: [Number, String],
      default: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  width: 12rem;
}

@media (max-width: 415px) {
  .card {
    height: 105px;

    > .display-3 {
      font-size: 3rem;
    }

    h3 {
      font-size: 18px;
      margin: 0;
    }

    strong {
      font-size: 40px;
    }
  }
}
</style>
