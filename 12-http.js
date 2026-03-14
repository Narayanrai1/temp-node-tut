const http = require ('http')
const server = http.createServer((req,res)=>
{
    if(req.url==='/')
    {
        res.write('Here is the another webpage')
        res.end()
    }
    else if(req.url==='/page')
    {
        res.write('what is this')
        res.end()
    }
    else{
        res.write(
            `<h1>Hello this is the html file</h1>
                <p>This is the paragraph</p>
                <a href="/">back home</a>
            `
        )
        res.end()
    }
   
    
    
})
server.listen(5000,()=>
{
    console.log("server is running ....");
})