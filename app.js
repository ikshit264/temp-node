const amount = 12;
const name = require('./1-app')
const SayHi = require('./function')
const _ = require('lodash')
console.log(name)

SayHi(name.Ikshit)

const items = [1,[2,[3,[4],(2)]]]

const newItems = _.flattenDeep(items)

console.log(newItems)
