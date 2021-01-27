<template>
  <div class="row my-5 text-center">
    <div class="offset-md-3 col-md-6">
      <div class="row">
        <div class="col-md-6">
          <div class="card text-uppercase py-3">
            <h3>Streak</h3>
            <div class="display-3 text-success">
              <strong>{{ score.streak }}</strong>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card text-uppercase py-3">
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
import { mapState } from 'vuex'

export default {
  name: 'ScoreBoard',
  computed: mapState('score', ['score'])
}
</script>
