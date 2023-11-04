const figlet = require('figlet')

// figlet("Hello  Dedicated Daya Pal",function(err,data){
//     if (err){
//         console.log("Something went wrong...");
//         console.dir(err);
//         return;
//     }
//     console.log(data)
// });

figlet("Hello everyone", (error,data1)=>{
    if(error){
        console.log("Hey Daya")
        console.dir(error);
        return;
    }
    console.log(data1)
})
