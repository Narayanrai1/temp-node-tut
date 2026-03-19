/*This is not completed just complete it when necessary*/ 

const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res)=>
{
    // const text = fs.readFileSync('./content/big.txt' ,'utf8');
    // res.end(text);
    const fileStream = fs.createReadStream('./content/big.txt',{
        highWaterMark:64,
        encoding: 'utf8'
    })
    fileStream.on('open' , ()=>
    {
        fileStream.pipe()    
    })
    fileStream.on('error', ()=>
    {
        console.log(err);
    })
})
server.listen(5000,()=>
{
    console.log("listening . . .")
})