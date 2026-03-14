const { log } = require('console');
const fs= require('fs')
fs.readFile('./content/first.txt','utf8',(err,result)=>
{
    if(err)
    {
        console.log('Haa , error')
        return ;
    }
    const first = result
    fs.readFile('./content/second.txt','utf8',(err, result)=>
    {
        if(err)
        {
            console.log("Haa error again")
            return ;
        }
        const second = result
        console.log(`here is the both files =>`)
        console.log(`fist one = > ${first } and the second one ${second }` )
        fs.writeFile('./content/result-async.txt',`hello i am narayan`,(err,result)=>
        {
            if(err)
            {
                console.log("error")
                return 
            }
            
        })
    })
})
//hello this is testing 