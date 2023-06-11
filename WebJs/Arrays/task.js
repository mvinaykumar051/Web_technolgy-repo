//Create an Array of Fruits and display the names of the fruits which is Startin with letters Vowels.....?



let x=["a","e","i","o","u"]
let fruits=["apple","bannana","mango","egg","papay","ipricot","orange"];
for(let i=0;i<fruits.length;i++){
    for(let j=0;j<x.length;j++){
        if(fruits[i].charAt(0).toLowerCase()==x[j])
        console.log(fruits[i]);
    }
}