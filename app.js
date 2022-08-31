const directions = document.querySelector(".directions")
const start = document.querySelector(".start")
const message = document.querySelector(".message")
const results = document.querySelector(".results")
const gameArea = document.querySelector(".gameArea")

var click=0
var startt=0
var startOne=0
function colorGen (object){
    const a = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const c = Math.floor(Math.random() * 255);
    object.style.backgroundColor='rgb(' + a + ',' + b + ',' + c + ')';
  }

function circleCreater(){
    const circle = document.createElement("div");
    circle.classList.add("box");
    colorGen(circle)
    circle.style.left = `${Math.floor(Math.random() * 200)}px`;
    circle.style.top= `${Math.floor(Math.random() * 200)}px`;
    if(startOne==0){
        directions.textContent="Starting..."
    }
    setTimeout(function(){
        gameArea.appendChild(circle)
        if(startOne==0){
            directions.textContent="Go!"
        }
         startt = new Date().getTime();

      }, 3000);

startOne=1
}

document.addEventListener("click",(e)=>{
    if(e.target.className=="box"){

    
    var end = new Date().getTime();
    var time = end - startt;
    if(click<15){
        if(time<1000){
            console.log("win")
            click=click+1
            console.log(click,"0",time)
            gameArea.removeChild(gameArea.firstChild);
            if(click!=15){
               circleCreater() 
            }
            
            console.log("tt")
            var seconds = ((time % 60000) / 1000);

            directions.textContent=`It took you ${seconds} seconds to click`
            directions.textContent+=` Score: ${click} of 15`
    
    
        }else{
            startOne=0
                        var seconds = ((time % 60000) / 1000);

            message.innerHTML=`<div class="message"><h3>It took you ${seconds} seconds to click</h3></div>`
    

            console.log(time)
            start.style.visibility=""
            results.innerHTML=`<div class="results">Too Slow! <span id="loser">You Lose!</span> Your score was ${click} .<br> Click the start button to play again!</div>`
            gameArea.removeChild(gameArea.firstChild);
            //click=13
            directions.textContent=""
    
            
        }
    }
    if(click==15){
        //click=13
        startt=0
        startOne=0
        start.style.visibility=""
        directions.textContent=""
        results.innerHTML=`<div class="results">You reached 15! <span id="winner">You win!</span> <br> Click start to Play again.</div>`
    }
    }
})


start.addEventListener("click",(e)=>{
   // directions.style.visibility="hidden"
   click=0
   results.innerHTML=""
   message.innerHTML=""
    start.style.visibility="hidden"
    circleCreater()
})