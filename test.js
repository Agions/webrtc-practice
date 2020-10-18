/* eslint-disable no-unused-expressions */
typeof 123 // "number"
typeof '123' // "string"
typeof false // "boolean"
// console.log(typeof 123)
// console.log(typeof '123')
// console.log(typeof false)
// function f() {}
// console.log(typeof f)
var o = {}
var a = []

o instanceof Array // false
a instanceof Array // true
// console.log(o instanceof Array)
// console.log(a instanceof Array)
// console.log(Number(null))
// console.log(Object.create(null))
// console.log(parseInt('011', 2))
var obj = { p: 1 }
// console.log(obj.valueOf())
// console.log(obj.valueOf().toString())

function copyObject(orig) {
  return Object.create(
    Object.getPrototypeOf(orig),
    Object.getOwnPropertyDescriptors(orig)
  )
}

var c = copyObject(obj)
c.p = 3
console.log(c)
console.log(obj)
