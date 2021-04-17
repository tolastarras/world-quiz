<template>
  <h2 class="mt-4">{{ question }}?</h2>
</template>

<script>
import { formatCountryName } from '@/utils/format-string'

export default {
  name: 'QuizQuestion',
  props: {
    country: {
      type: Object,
      required: true
    },
    category: {
      type: String,
      required: true
    }
  },
  computed: {
    question () {
      const category = this.category.toLowerCase()
      if (category === 'capitals') {
        return `What is the capital of ${formatCountryName(this.country.name)}`
      } else if (category === 'flags') {
        return 'What country has this flag'
      }
      return `${this.country.capital} is the capital of`
    }
  }
}
</script>
