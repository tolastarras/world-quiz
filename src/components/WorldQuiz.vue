<template>
  <div class="content my-5">
    <div class="text-center">
      <button-continents />
      <button-categories />
    </div>

    <div class="text-center">
      <div class="anchor" id="question"></div>
      <div id="notifications"></div>

      <h2>What's the capital of <strong>Netherlands</strong>?</h2>
      <img class="flag-question my-4" src="https://lipis.github.io/flag-icon-css/flags/4x3/nl.svg">

      <div class="row">
        <div class="choices offset-md-4 col-md-4">
          <a class="btn btn-primary btn-block btn-loading" data-loading-text="Please wait..." href="/answer/capital/6000004/ag9zfmZsYWctaWNvbi1jc3NyEAsSB0NvdW50cnkYhJvuAgw/" rel="nofollow">
            Amsterdam
          </a>
          <a class="btn btn-primary btn-block btn-loading" data-loading-text="Please wait..." href="/answer/capital/6000004/ag9zfmZsYWctaWNvbi1jc3NyDwsSB0NvdW50cnkYlYtADA/" rel="nofollow">
            Suva
          </a>
          <a class="btn btn-primary btn-block btn-loading" data-loading-text="Please wait..." href="/answer/capital/6000004/ag9zfmZsYWctaWNvbi1jc3NyEAsSB0NvdW50cnkYwZ-rAww/" rel="nofollow">
            Brasília
          </a>
          <a class="btn btn-primary btn-block btn-loading" data-loading-text="Please wait..." href="/answer/capital/6000004/ag9zfmZsYWctaWNvbi1jc3NyEAsSB0NvdW50cnkYtYXwAgw/" rel="nofollow">
            Kigali
          </a>
        </div>
      </div>
      <score-board />
    </div>
  </div>
</template>

<script>
import ScoreBoard from './ScoreBoard'
import ButtonContinents from './ButtonContinents'
import ButtonCategories from './ButtonCategories'

export default {
  components: {
    ScoreBoard,
    ButtonContinents,
    ButtonCategories
  }
}
</script>

<style lang="scss" scoped>
ul {
  list-style-type: none;

  li {
    list-style-type: none;
    display: inline;
  }
}

.flag-question {
  padding: 4px;
  line-height: 1.4;
  background-color: #fff;
  border-radius: 0;
  transition: all .2s ease-in-out;
  // display: inline-block;
  max-width: 14%;
  // width: 128px;
  // height: 96px;
}
</style>
