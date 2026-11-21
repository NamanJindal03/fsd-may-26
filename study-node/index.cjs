const os = require('os')
const operations = require('./operations.cjs')


const addedValues = operations.add2(100, 200)
const diffValues  = operations.substract10(100, 200)
console.log(os.homedir());
console.log(os.machine())
console.log(os.version())
console.log(addedValues, diffValues)