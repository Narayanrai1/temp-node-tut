const http = require('http')
const server = http.createServer((req,res)=>
{
    if(req.url==='/')
    {
        res.write("hello world")
        res.end()
    }
    else if(req.url==='/about')
    {
        //blocking code
        for(let i = 0;i<1000;i++)
        {
            for(let j=0;j<1000;j++)
            {
                console.log("what what what")
            }
        }
        res.write("hello i am narayan rai")
        res.end()
    }
    else
    {
        res.write("hello this is the normal page");
        res.end()
    }
})
server.listen(5000,()=>
{
    console.log(`server port 5000 is listening . . .`)
})