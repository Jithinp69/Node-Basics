let fs = require('fs');
let words =  "we are appending this to data2";
fs.appendFile('data2.txt', words, function(err){
    if(err){
        console.log("append failed");
    } else {
        console.log("append successfully");
    }
})