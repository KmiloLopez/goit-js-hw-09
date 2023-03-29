console.log("conected")

 const buttons= document.querySelectorAll('button')
console.log(buttons)
const start = buttons[0]
const stop = buttons[1]
let timerId =null
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

start.addEventListener('click',startColors)
function startColors(){
    timerId=setInterval(()=>{
        document.body.style.backgroundColor = getRandomHexColor();
    },1000)
    console.log("Click en start")
    console.log(getRandomHexColor)
    /* document.body.backgrougnColor=getRandomHexColor()  */
    buttons[0].disabled=true
   
}
stop.addEventListener('click',letsStop)
function letsStop(){
    console.log("DEtenido")
    clearInterval(timerId)
    console.log(`Interval with id ${timerId} has stopped!`);
    buttons[0].disabled=false
    console.log("aa")
}
