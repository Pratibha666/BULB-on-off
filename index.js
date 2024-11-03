let bulb=document.querySelector("#bulb")
let btn1=document.querySelector("#on")
let btn2=document.querySelector("#off")
btn1.addEventListener("click",function(){
    bulb.style.backgroundColor="yellow"
})

btn2.addEventListener("click",function(){
    bulb.style.backgroundColor="white"
})