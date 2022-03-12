const fs = require("fs");

// fs.writeFile("message.txt", "Hey, I am in here", (err)=>{
//     if (err) throw err;
//     console.log("file has been written")
// });

fs.readFile('./message.txt', "utf8",(err, data)=>{
    if (err) {
        throw err
    }
    console.log(data)
})

console.log("hello");