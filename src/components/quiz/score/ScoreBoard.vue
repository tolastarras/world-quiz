<template>
  <div class="row mt-5">
    <div class="col d-flex justify-content-center">
      <score-card
        class="mr-3"
        title="Streak"
        color="success"
        :score="score.streak"
      />
      <score-card title="Record" :score="score.record" />
    </div>
  </div>
</template>

<script>
import ScoreCard from './ScoreCard'

export default {
  name: 'ScoreBoard',
  props: {
    score: {
      type: Object,
      required: true
    }
  },
  components: {
    ScoreCard
  }
}
</script>
