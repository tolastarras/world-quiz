<template>
  <div class="score row my-5 text-center">
    <div class="offset-md-4 col-md-4">
      <div class="row">
        <div class="col-md-6">
          <h3 class="text-success">Correct: <strong>{{ score.correct }}</strong></h3>
        </div>
        <div class="col-md-6">
          <h3 class="text-primary">Incorrect: <strong>{{ score.incorrect }}</strong></h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['score'])
  }
}
</script>
