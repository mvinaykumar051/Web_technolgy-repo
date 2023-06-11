let grand=document.getElementById("grand")
let parent=document.getElementById("parent")
let child=document.getElementById("child")

grand.addEventListener('click',(e)=>{
    e.stopPropagation()
    console.log("Grand Clicked");
},true)


parent.addEventListener('click',(x)=>{
    x.stopPropagation()
    console.log("Parent Clicked");
},true)


child.addEventListener('click',(y)=>{
    y.stopPropagation()
    console.log("Child Clicked");
},true)

