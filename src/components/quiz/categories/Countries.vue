<template>
  <div class="col categories">
    <h2 class="mt-4">{{ country.capital }} is the capital of?</h2>
    <transition name="fade">
      <h4 class="message" :class="messageType">{{ message }}</h4>
    </transition>

    <div class="row">
      <div class="countries offset-md-3 col-md-6">
        <a @click="checkAnswer" :key="country.capital" v-for="country in countries" class="btn btn-primary btn-block text-light text-left" :class="disableButton">
          <img :src="country.flag"> {{ country.name | format-country-name }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      message: '',
      didAnswer: false,
      correct: false
    }
  },
  mounted () {
    if (!this.message) {
      this.hint()
    }
  },  
  methods: {
    checkAnswer (e) {
      // disable all buttons
      this.didAnswer = true

      let answer = e.target.text.trim()

      if (answer === this.country.name) {
        this.correct = true

        // display message
        this.message = `Congrats! ${answer} is correct`
        this.$emit('update-score', true)
      } else {
        // display error message
        this.message = `Sorry, ${answer} is incorrect`
        this.$emit('update-score', false)
      }

      // show next question set in 2 seconds
      setTimeout(() => {
        // load new set of questions
        this.$emit('handle-response')

        // reset values
        this.reset()
      }, 2000)
    },
    hint () {
      let the = ''
      if (this.country.region.toLowerCase() === 'americas') {
        the = 'the'
      }
      this.message = `Hint: ${this.country.capital} is in ${the} ${this.country.region}`
    },    
    reset () {
      this.message = ''
      this.didAnswer = false
      this.correct = false
    }
  },
  watch: {
    country () {
      this.hint()
    }
  },
  computed: {
    ...mapGetters(['country', 'countries', 'score']),
    disableButton () {
      return this.didAnswer ? 'disabled' : ''
    },
    messageType () {
      let type = 'danger'
      if (!this.correct && !this.didAnswer) {
        type = 'primary'
      } else if (this.correct) {
        type = 'success'
      }

      return 'text-' + type
    }    
  }
}
</script>

<style lang="scss" scoped>
.countries {
  > a {
    display: flex;
    align-items: center;
    font-size: 3em;
    height: 3em;

    > img {
      margin-left: 1em;
      margin-right: .5em;
      width: 70px;
      border: 1px solid white;
    }
  }
}

@media screen and (max-width: 415px) {
  .categories {
    h2 {
      font-size: 2.2em;
      line-height: .9em;
      margin-bottom: .5em;
    }
    h4 {
      font-size: 1em;
      line-height: 1em;
      margin-bottom: .5em;
      font-style: italic;
    }
  }

  .countries {
    > a {
      font-size: 1em !important;
      line-height: 1em;

      > img {
        width: 45px;
        margin-left: .4em;
      }
    }
  }
}
</style>
