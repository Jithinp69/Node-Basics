let fs = require('fs');
fs.rename('data1.txt', 'data2.txt', function(err){
    if(err){
        console.log('error occured');
    }else{
        console.log('successfull');
    }
})