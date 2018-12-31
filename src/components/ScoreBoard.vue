<template>
  <div class="row my-5 text-center">
    <div class="offset-md-3 col-md-6">
      <div class="row">
        <div class="col-md-6">
          <div class="score text-uppercase mb-3">
            <h3>Streak</h3>
            <div class="display-3 text-success ">
              <strong>{{ score.streak }}</strong>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="score text-uppercase">
            <h3>Record</h3>
            <div class="display-3 text-primary">
              <strong>{{ score.record }}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ScoreBoard',
  computed: {
    ...mapGetters(['score'])
  }
}
</script>

<style scoped>
  .score {
    border: 1px solid #aaa;
    border-radius: 4px;
    padding: 1em 0 !important;
    background: #eee;
  }
</style>
