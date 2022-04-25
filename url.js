var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(adr, false);      //true/flase for query

console.log(q.host); // 'localhost:8080'
console.log(q.pathname); // '/default.htm'
console.log(q.search); // '?year=2017&month=february'

 // an object: { year: 2017, month: 'february' }
console.log(q.query.month); // 'february'
console.log(q.query.year); // 'february'
console.log(global);