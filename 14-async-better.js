// const fs = require('fs');
// const util = require('util');
// const readFile = util.promisify(fs.readFile);
// const writeFile = util.promisify(fs.writeFile);

// const doit = async()=>
// {
//     const first= await readFile('./content/first.txt','utf8');
//     const second = await readFile('./content/second.txt','utf8')
//     await writeFile('./content/mind-grande.txt',`HELLO THIS IS MY NEW TRY:${first},${second}`);
// };
// doit();






// const fs = require('fs')
// const fist =(path)=>
// {
//     return new Promise((resolve,reject)=>
//     {
//          fs.readFile(path,'utf8',(err,result)=>
//         {
//             if(err)
//             {
//                 reject(err)
//             }
//             else
//             {
//                 resolve(result)
//             }
//         })
//     })
    
// }



// fist('./content/first.txt')
//     .then((result)=> {console.log(result)})
//     .catch((err)=> {console.log(err)})
// console.log("kuch to log kahenge")




// fist('./content/second.txt')
//     .then((result)=> {console.log(result)})
//     .catch((err)=> {console.log(err)})





// const first = async()=>
// {
//     try 
//     {
//         const first = await fist('./content/first.txt');
        
//         const second = await fist('./content/second.txt');
//         console.log(first,second)
//     }
//     catch(err)
//     {
//         return err;
//     }
// }
// first()  //important










// const fs = require('fs')
// const first = new Promise ((resolve , reject)=>
// {
//     fs.readFile('./content/first.txt','utf8',(err , res)=>
//     {
//         if(err)
//         {
//             reject(err);
//         }
//         else
//         {
//             resolve(res);
//         }
//     })
// })
// first
//     .then((result)=>{console.log(result)})
//     .catch((error)=>{console.log(error)})
// const first2 = async()=>
// {
//     try{
//     const first2= await first;
//     console.log(first2);
//     }
//     catch(err)
//     {
//         return err    
//     }

// }
// first2();