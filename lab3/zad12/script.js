let playButton = document.getElementById("playButton")
let score = document.getElementById("score")
let currentPoints = 0
let board = document.getElementById("board")
let heartsNumber = 3
let hearts = document.getElementById("hearts")
playButton.addEventListener("click",startGame)
let end = document.getElementById("end")



function startGame(e){
    heartsNumber = 3
    end.style.opacity = 0
    hearts.innerText = "❤️ " + heartsNumber
    currentPoints = 0
    score.innerText = currentPoints
    board.addEventListener("click",missedShot)
    e.stopPropagation()
    hearts.style.opacity = 1
    playButton.style.display = "none"
    score.style.display = "block"


    let interval = setInterval(() => {
        let randomTimeout = Math.floor(Math.random() * 1000)
        let zombie = document.createElement("div")
        zombie.classList.add("zombie")
        if(heartsNumber <= 0){
            clearInterval(interval)
            prepareToRestart()
            board.removeEventListener("click",missedShot)
            zombie.style.opacity = 0
            zombie.remove()
        }
        setTimeout(spawnZombie(zombie),randomTimeout)
    },400)
}

//size, top, speed, 
function spawnZombie(zombie){
    let size = Math.random()* 0.75  + 0.6
    let top = Math.floor(Math.random() * 40) + 40
    // let zombie = document.createElement("div")
    // zombie.classList.add("zombie")
    zombie.style.top = top + "vh"
    zombie.style.transform = "scale(" + size +")"
    if(heartsNumber <= 0)zombie.style.opacity = 0; 
    else zombie.style.opacity = 1
    board.appendChild(zombie)
    runZombie(zombie)  
}

function runZombie(zombie){
    let speed = Math.floor(Math.random()*4.99) // one of 0/1/2/3/4 (5 speed levels)
    speed = speed*10 + 15// 15/25/35/45/55
    let cage = 0
    let left = 100
    let interval = setInterval(
        function(){
            console.log("D")
            zombie.style.backgroundPositionX = cage + "px"
            cage -= 200
            if(cage == -200)cage = 1800
            zombie.style.left = left + "vw"
            left -= 1
            if(left == -20){
                heartsNumber -= 1
                heartsNumber = Math.max(heartsNumber,0)
                hearts.innerText = "❤️ " + heartsNumber
                clearInterval(interval)
                zombie.remove()
            }
        },speed
        )
        // click on zombie removes both: interval and zombie
        zombie.addEventListener("click",(e) => {
            e.stopPropagation()
            currentPoints += 12
            score.innerText = currentPoints
            clearInterval(interval)
            zombie.remove()
        })
    }

function missedShot(){
    currentPoints -= 6
    score.innerText = currentPoints
}


function prepareToRestart(){
    end.style.opacity = 1
    setTimeout(()=>{
        playButton.style.display = "block"
        playButton.innerText = "Click to play again"
        playButton.style.backgroundColor = "rgba(255,255,255,0.2)"
        playButton.style.height = "400px"
        playButton.style.top = "300px"
    },4000)

}
    

//CURSOR
const cursorMiddle = document.getElementById("cursorMiddle")
const cursorBorder = document.getElementById("cursorBorder")
window.addEventListener("mousemove",moveCursor)
function moveCursor(e){
    let mouseY = e.clientY
    let mouseX = e.clientX
    cursorMiddle.style.top = (mouseY-14) + "px";
    cursorMiddle.style.left = (mouseX-14) + "px";
    cursorBorder.style.top = (mouseY-40) + "px";
    cursorBorder.style.left = (mouseX-40) + "px";

}