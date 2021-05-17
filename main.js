/**
 * Get a random integer between `min` and `max`.
 *
 * @param {number} min - min number
 * @param {number} max - max number
 * @return {int} a random integer
 */

let getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const fs = require('fs')
let obj = JSON.parse(fs.readFileSync('./src/testLunch.json', 'utf8'))
// console.log(obj.lunch.length)
console.log("性感人妻明天做" + obj.dish1[getRandomInt(0, obj.dish1.length - 1)] + "和" + obj.dish2[getRandomInt(0, obj.dish2.length - 1)] +"还有" + obj.dish3[getRandomInt(0, obj.dish3.length - 1)]+"吧！")
