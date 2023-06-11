function Emp(id,name){
    this.id=id
    this.name=name
}
Emp.prototype.com="tyss"
Emp.prototype.place="Bangalore"
let s1=new Emp(1,"a")
console.log(s1);

let s2=new Emp(2,"b")
let s3=new Emp(3,"c")
s2.com="google"
console.log(s2);
s3.com="amazon"
console.log(s3);

Emp.prototype.place="haveri"
console.log(s2);