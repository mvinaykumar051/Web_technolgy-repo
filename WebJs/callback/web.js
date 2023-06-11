 //callback fucntion without a method

 function x() {
    console.log("hii..");
    let name="darshan"
    y(name)
 }
 function y(name) {
    console.log("hello",name);
 }
 x()
 
 
 
 //callback without arguments i.e, direct calling one function into another
 
 
//  function x() {
//         console.log("hello");
//         y() //=>callback function
//     }
//     function y() {
//         console.log("bengalore");
//     }
//     x()







//callback by passing arguments



// function x() {
//     console.log("I am First");
// }
// function y() {
//     console.log("I am last");
// }
// function z(callback) {
//     console.log("I am Second");
//     callback();
// }
// x()
// z(y)