let fs = require('fs');

// To read file
fs.readFile('data.txt', 'utf-8', function(err, data){
    if(err){
        console.log("unable to read")
    }else{
        console.log(data);
    }
})


// to write the file
fs.readFile('data.txt', 'utf-8', function(err, data){
    if(err){
        console.log("unbale to read");
    }else{
        console.log(data);
    fs.writeFile('data1.txt', 'utf-8', function(err){
        if(err){
            console.log("error occured");
        }
    })
    }
})
