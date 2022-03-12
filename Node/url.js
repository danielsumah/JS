const url = require("url");

const addrestt = "http://localhost:8080/default.html?year=2001&month=feburary"

const parseUrl = url.parse(addrestt, true)

console.log(parseUrl.host)
console.log(parseUrl.pathname)
console.log(parseUrl.query)
console.log(parseUrl.query.year)


