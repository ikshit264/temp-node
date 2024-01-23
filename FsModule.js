//Sync

const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./content/first.txt', 'utf8')
const Second = readFileSync('./content/second.txt', 'utf8')

writeFileSync('./content/result-sync.txt', `Here is the result : ${first}, ${Second} \n`, {flag: 'a'})

console.log(first, Second)