const md5 = require('md5')
  
var password = '1234'
var pass = md5(password);
console.log('Normal password : ', password)
console.log('Hashed password : ',pass)