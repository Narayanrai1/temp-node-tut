const fs = require('fs');
const stream =  fs.createReadStream('./content/big.txt',{
    highWaterMark:640,
    encoding :'utf8'
});

//default 64 kb // for kb we can use highWaterMark  
//last buffer -remainder 

stream.on('data', (result)=>
{
    console.log(result);
})
stream.on('error' , (err) => console.log(err));