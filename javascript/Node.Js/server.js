//---------install express and ejs module using npm install express ejs

var slugify = require('slugify')
let a = slugify('some string') // some-string
console.log(a)
// if you prefer something other than '' as separator
slugify('some string', '_') // some_string