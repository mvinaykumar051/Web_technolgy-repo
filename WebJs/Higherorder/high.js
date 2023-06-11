//2

// function higherorder(a,b,task){
//     let x=task(a,b);
//     return x;
// }

// let add=higherorder(20,30,function(a,b) {
//      return a+b;
// })
// console.log(add);

// let mul= higherorder(100,2,function(a,b){
//     return a*b;
// })
// console.log(mul);

//3

function higherorder(a,b,c,task){
    let x=task(a,b,c);
    return x;
}
let add1=higherorder(20,30,10,function(a,b,c) {
    return a+b+c;
})
console.log(add1);
let mul=higherorder(2,3,5,function(a,b,c) {
    return a*b*c;
})
console.log(mul);