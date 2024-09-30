//how nodejs is different from vanilla js
//1. node runs on a server - not in a browser (backend not frontend)
//2. the console is the  terminal window
console.log('hello world')
//3. gobal object instead of window object
//console.log('global');
//4. has commna core module 
//5. comman modules instead of ES6 modules
//6. missing some js APIs like fetch

const os = require('os')
const path = require('path')
//const math = require('./math')
const { add, subtract, multiply, divide } = require('./math')

console.log(add(2, 3))
console.log(subtract(2, 3))
console.log(multiply(2, 3))
console.log(divide(2, 3))
/* 
console.log(os.type())
console.log(os.version())
console.log(os.homedir())

console.log(__dirname)
console.log(__filename)

console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))

console.log(path.parse(__filename))
 */