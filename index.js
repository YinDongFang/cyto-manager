const getCurrentTimestamp = require('./getCurrentTimestamp')
const getMaxValue = require('./getMaxValue')
const isEvenNumber = require('./isEvenNumber')

module.exports = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }