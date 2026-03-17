const event = require('events');
const event1 = new event();
event1.on('respo' ,(name , id )=>
{
    console.log(`hello motherfucker ${name} and ${id}`)
})
event1.emit('respo','Ankit' ,36)

// const http = require('http')
// const server = http.createServer((req,res)=>
// {

// })
// server.listen(5000 ,()=>
// {
//     console.log(`listening...`)
// })

// const http = require('http')
// const server = http.createServer();
// server.on('request',(req,res)=>
// {
//     res.end("welcome");
// })           
// server.listen(5000,()=>
// {
//     console.log(`I am listening you all . . .`)
// })