
//1

// let x=new Promise((resolve,reject)=>{
//     let isRoomCleaned=true
//     if (isRoomCleaned) {
//         resolve("yes Room is Cleaned")
//     }else{
//         reject("no Room is not Cleaned")
//     }
// })

// console.log(x);
// x.then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// }).finally(()=>{
//     console.log("Yes Finally Done");
// })






//2

function x(m,n) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (isNaN(m) || isNaN(n)) {
                return reject()
            }
            for (i= m; i <= n; i++) {
                console.log(i);
            }
            return resolve()
        },2000)
    })
    
}

// function sucess(){
//     console.log("Yes Sucess");
// }

// console.log("Start");
// x(10,15).then(sucess).catch((err)=>{
//     console.log("No not sucess");
// })                                                       //Normal Merhod


async function y(){
    console.log("Start");
    try{
        await x(10,15)
        console.log("Sucess");
    }
    catch{
        console.log("error");
    }
}
y()                                                        //async await Method