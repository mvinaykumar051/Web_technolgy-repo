// 1.Literal method

// let obj={
// id:1234,
// name:"Darshan",
// job:"developer"
// }
// console.log(obj);
// console.log(typeof obj);
// console.log(obj.id);                       //fetch
// console.log(obj.place="bangalore");        //adding
// console.log(obj);
// let x=delete obj.id                        //deleting
// console.log(x);
// console.log(obj);



//2.Consrtuctor method using function


function rex(a,b){
    this.a=a;
    this.b=b;
}
let s=new rex(1,"Xyz")
console.log(s);
let s1=new rex("name","darshan")
console.log(s1);
let s2=new rex("man","wife")
console.log(s2);
console.log(typeof s);
