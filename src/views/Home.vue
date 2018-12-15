<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="jumbotron text-center">
      <div class="container">
        <h1>Learn the World Quiz</h1>
        <p>Looking for a collection of all <a href="/">country flags in SVG</a>?</p>
      </div>
      <div class="bottom">
        <a href="#" class="" data-url="/game/capital/" data-text="Learn the capitals of the World by playing a game!">Tweet</a>
      </div>
    </div>
    <div class="container">
      <div class="text-center">
        <div class="btn-group">
          <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span class="fa fa-globe"></span> Region: World <span class="caret"></span>
          </button>
          <ul class="dropdown-menu">
            <li><a href="/game/capital/#question">World</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="/game/capital/Africa/#question" rel="nofollow">Africa</a></li>
            <li><a href="/game/capital/Asia/#question" rel="nofollow">Asia</a></li>
            <li><a href="/game/capital/Europe/#question" rel="nofollow">Europe</a></li>
            <li><a href="/game/capital/North+America/#question" rel="nofollow">North America</a></li>
            <li><a href="/game/capital/South+America/#question" rel="nofollow">South America</a></li>
            <li><a href="/game/capital/Oceania/#question" rel="nofollow">Oceania</a></li>
          </ul>
        </div>
        <div class="btn-group">
          <button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span class="fa fa-gamepad"></span>  Find a Capital <span class="caret"></span>
          </button>
          <ul class="dropdown-menu">
            <li><a href="/game/capital/#question" rel="nofollow">Find a Capital</a></li>
            <li><a href="/game/country/#question" rel="nofollow">Find a Country</a></li>
          </ul>
        </div>
      </div>
      <hr>
      <div class="text-center">
        <div class="anchor" id="question"></div>
        <div id="notifications"></div>
        <h2>What's the capital of <strong>Netherlands</strong>?</h2>
        <img class="flag-question" src="https://lipis.github.io/flag-icon-css/flags/4x3/nl.svg">

        <div class="row">
          <div class="choices offset-md-4 col-md-4">
            <a class="btn btn-reddit btn-block btn-loading" data-loading-text="Please wait..." href="/answer/capital/6000004/ag9zfmZsYWctaWNvbi1jc3NyEAsSB0NvdW50cnkYhJvuAgw/" rel="nofollow">
              Amsterdam
            </a>
            <a class="btn btn-reddit btn-block btn-loading" data-loading-text="Please wait..." href="/answer/capital/6000004/ag9zfmZsYWctaWNvbi1jc3NyDwsSB0NvdW50cnkYlYtADA/" rel="nofollow">
              Suva
            </a>
            <a class="btn btn-reddit btn-block btn-loading" data-loading-text="Please wait..." href="/answer/capital/6000004/ag9zfmZsYWctaWNvbi1jc3NyEAsSB0NvdW50cnkYwZ-rAww/" rel="nofollow">
              Brasília
            </a>
            <a class="btn btn-reddit btn-block btn-loading" data-loading-text="Please wait..." href="/answer/capital/6000004/ag9zfmZsYWctaWNvbi1jc3NyEAsSB0NvdW50cnkYtYXwAgw/" rel="nofollow">
              Kigali
            </a>
          </div>
        </div>
        <div class="score row">
          <div class="offset-md-4 col-md-4">
            <div class="row">
              <div class="col-xs-6">
                <h3 class="text-success">Streak: <strong>3</strong></h3>
              </div>
              <div class="col-xs-6">
                <h3 class="text-primary">Record: <strong>7</strong></h3>
              </div>
            </div>
          </div>
        </div>
        <hr>
        <div class="social-buttons">
          <a href="#">Github</a> |
          <a href="#">Github</a> |
          <a href="#">Github</a> |
          <a href="#">Github</a>
        </div>
      </div>
    </div>
    <footer class="footer">
      <div class="container">
        <ul class="links">
          <li><a href="#" onclick=""><span class="fa fa-github"></span> GitHub</a></li>
          <li><a href="#" onclick=""><span class="fa fa-twitter"></span> Twitter</a></li>
          <li><a href="#" onclick=""><span class="fa fa-google-plus"></span> Google+</a></li>
        </ul>
        <p>
          &copy; 2018 - world-quiz
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    // HelloWorld
  }
}
</script>

<style lang="scss">
#nav {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
}

ul {
  list-style-type: none;

  li {
    list-style-type: none;
    display: inline;
  }
}

.score {
  margin-top: 2em;
  
  h3 {
    background: yellow;
  }
}

.choices > a {
  border: 2px solid red;
}

.jumbotron {
  background: linear-gradient(90deg,#0d6632,#f4c01a);

  h1 {
    margin-top: 1em;
  }

  p {
    margin-bottom: 2rem !important;
  }

  .bottom {
    position: absolute;
    top: 14em;
    // left: 0;
    // bottom: 0;
    left: 0;
    right: 0;
    padding: 18px 0;
    background-color: rgba(0,0,0,.2);
  }
}

.flag-question {
  padding: 4px;
  line-height: 1.4;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 0;
  -webkit-transition: all .2s ease-in-out;
  transition: all .2s ease-in-out;
  display: inline-block;
  max-width: 100%;
  width: 128px;
  height: 96px;
  border-radius: 2px;
  margin-bottom: 10.5px;  
}

footer {
  text-align: center;
  opacity: .8;
  padding: 50px;
  background: linear-gradient(90deg,#f4c01a,#0d6632);
}
</style>

