//sort

// let arr=["max","rex","girl","boy"]
// arr.sort();
// console.log(arr);

let arr=[20,30,10,40,60,50]
for(let arr1 in arr){
    console.log(`this is index ${arr1}`);             //For in
}

for(let arr1 of arr){
    console.log(`this is value ${arr1}`);              //For of
}

arr.forEach((value,index) =>{
console.log(`this is index ${value} this is value ${index}`);       //For Each
})