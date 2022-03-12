const path = require("path")

const fileLocation = path.join(__dirname, "app.js")
console.log(fileLocation)

const filename = path.basename(fileLocation)
console.log(filename)