const world = require('./outer')

function hello(){
  return `Hello ${world()}` //Hello world
}

console.log(hello())