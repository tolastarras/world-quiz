import { randInt } from './helper'

export const records = key => {
  let records = JSON.parse(localStorage.getItem('countries'))

  // world records
  if (key === 'World') {
    return records
  }

  // continent specific records
  return records.filter(record => {
    if (record.region === key) {
      return record
    }
  })
}

export const ramdomSet = (records, size) => {
  let items = new Set()

  do {
    const index = randInt(records.length)
    const record = records[index]

    // add to set if capital is not empty
    if (record.capital) {
      items.add(record)
    }
  } while (items.size < size)

  return [...items]
}

export const showAnswer = (questions, answer) => {
  if (process.env.NODE_ENV === 'development') {
    console.log('QUESTIONS')
    questions.map(question => console.log(JSON.stringify(question)))
    console.log('A: ' + JSON.stringify(answer))
    console.log('*************')
  }
}
