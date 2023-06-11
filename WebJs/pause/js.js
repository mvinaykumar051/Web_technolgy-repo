let text=document.getElementById("text")//textarea
let play=document.getElementById("play")//<input type="number" name="speed" id="speed" min=".5" max="3" step=".5" value="1">
let speed=document.getElementById("speed")//button
let pau=document.getElementById("pause")
let stop=document.getElementById("stop")


play.addEventListener('click',()=>{
    playText(text.value)
})

pau.addEventListener('click',()=>{
    pauseText();
})

stop.addEventListener('click',()=>{
    stopText()
})

function playText(text){
if(speechSynthesis.paused && speechSynthesis.speaking){
    return speechSynthesis.resume()
}

const utterance = new SpeechSynthesisUtterance(text)
utterance.rate = speed.value
utterance.addEventListener('end',()=>{
    text.disabled=false
    })
text.disabled = true
speechSynthesis.speak(utterance)

}

function pauseText(){
    if(speechSynthesis.speaking)speechSynthesis.pause()
}


function stopText(){
    speechSynthesis.resume()
    speechSynthesis.cancel()
}