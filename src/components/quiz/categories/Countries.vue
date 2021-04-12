<template>
  <div class="col categories">
    <h2 class="mt-4">{{ country.capital }} is the capital of?</h2>
    <transition name="fade">
      <h4 class="message" :class="messageType">{{ message }}</h4>
    </transition>
    <div class="row">
      <div class="countries offset-md-3 col-md-6">
        <a
          v-for="country in countries"
          :key="country.capital"
          class="btn btn-primary btn-block text-light text-left"
          :class="disableButton"
          @click="checkAnswer"
        >
          <img :src="country.flag" alt="country flag" />
          {{ country.name | formatCountryName }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import { formatCountryName } from '@/utils/format-string'

export default {
  name: 'Countries',
  data: () => ({
    message: '',
    didAnswer: false,
    correct: false
  }),
  filters: {
    formatCountryName
  },
  mounted () {
    if (!this.message) {
      this.showHint()
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

        // show hint after displaying results
        this.showHint()
      }, 2000)
    },
    reset () {
      this.message = ''
      this.didAnswer = false
      this.correct = false
    },
    showHint () {
      this.message = this.getHint
    }
  },
  watch: {
    country () {
      this.showHint()
    }
  },
  computed: {
    ...mapState('country', ['country', 'countries']),
    ...mapState(['score']),
    ...mapGetters('score', ['getHint']),
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
/* style in assets/scss/categories.scss */
.countries {
  > a {
    justify-content: left;
  }
}
</style>
