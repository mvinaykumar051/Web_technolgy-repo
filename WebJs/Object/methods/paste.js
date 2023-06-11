let obj={
    id:1234,
    name:"darshan",
    place:"banglore",

}
// console.log(obj);
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

// Object.seal(obj)
// console.log(obj.job="dev");
// console.log(obj);
// console.log(obj.id="5678");
// console.log(obj);

// console.log(Object.isSealed(obj));

Object.freeze(obj)
console.log(obj.job="developer");
console.log(obj);
console.log(obj.id=10000);
console.log(obj);

console.log(delete obj.id);
console.log(obj);

console.log(Object.isFrozen(obj));

// let obj={
//         id:1234,
//         name:"darshan",
//         place:"banglore",
//         job:function(max,rex){
//                 console.log(`this is ${max} -${rex}`);

//              console.log(this);
//         }

// }
// let obj1={
//         id:5678,
//         name:"mariamma",
//         place:"banglore",

// }
// obj.job.call(obj1,100,200)
// // obj.job.apply(obj1,[500,600])


// let obj1={
//         id:5678,
//         name:"mariamma",
//         place:"banglore",

// }

// function rex(){
//         console.log(this);
// }
// // let max=rex.call(obj1)
// let max=rex.apply(obj1)



// let dog={
//         name:"pummy",
//         barks:function(){

//                 console.log(`${this.name} sounds like bow bow`);
//         }

// }
// let parrot={
//         name:"parrot",
//         chirp:function(){

//                 console.log(this);
//         }

// }

// let rex=dog.barks.bind(parrot)
// rex()





// let obj={
//         a:1,
//         b:2,
//         c:function (){
//                 console.log(this);
//         }
// }

// let obj1={
//         a:20,
//         b:50,
// }

// let rex=obj.c.bind(obj1)
// rex()


























// -------------------------------------------------------------

// let obj={
//     name:"darshan",
//     age:28,
//     designation:"developer",
//     place:function x(rate,max){
    // console.log(`this is ${rate}-${max}`);
//         // console.log(this);
//     }
// }


// let obj1={
//     name:"darling",
//     age:28,
//     designation:"developer",

// }
// obj.place.call(obj1,5,1222)//call method takes arguments seperatly
// obj.place.apply(obj1,[5,1222])//apply method takes arguments as an array











// let obj3={
//     name:"darshan",
//     age:28,
//     designation:"developer",

// }


//  let add=  function x(){
//     console.log(this);
// }
// // add.call(obj3);





// ---------------bind-------------------


// let x1={
//     a:10,
//     b:20,
// }


// let x2={
//     a:100,
//     b:100,
// }

// function rex(){
//     console.log(this.a,this.b);
// }
// let max=rex.bind(x1)
// max()




// let dog={
//     name:"dog",
//     bark:function(){
//         console.log(this.name,"is barking");
//     }
// }

// let parrot={
//     name:"parrot",
//     bark:function(){
//         console.log(this.name,"is barking");
//     }
// }

// let speak=dog.bark.bind(parrot)
// speak();