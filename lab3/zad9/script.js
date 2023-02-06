let firstWorker = document.getElementById("firstWorker")
let secondWorker = document.getElementById("secondWorker")
let thirdWorker = document.getElementById("thirdWorker")
let workers = [firstWorker,secondWorker,thirdWorker]
let leftArrow = document.getElementById("leftArrow")
let rightArrow = document.getElementById("rightArrow")
let randomArrow = document.getElementById("random")
let id = 10002
leftArrow.addEventListener("click", leftArrowClick)
rightArrow.addEventListener("click", rightArrowClick)
randomArrow.addEventListener("click",randomArrowClick)

function rightArrowClick(){
    let leftWorker = workers[id%3]
    let middleWorker = workers[(id+1)%3]
    let rightWorker = workers[(id+2)%3]
    middleWorker.style.left = "-480px"
    middleWorker.style.opacity = "0"
    rightWorker.style.left = "0"
    rightWorker.style.opacity = "1"
    leftWorker.style.left = "480px"
    id += 1 
}

function leftArrowClick(){
    let leftWorker = workers[id%3]
    let middleWorker = workers[(id+1)%3]
    let rightWorker = workers[(id+2)%3]
    middleWorker.style.left = "480px"
    middleWorker.style.opacity = "0"
    rightWorker.style.left = "-480px"
    leftWorker.style.left = "0"
    leftWorker.style.opacity = "1"
    id -= 1
}
function randomArrowClick(){
    let number = Math.random()*100
    if(number < 50){
        leftArrowClick()
    }
    else {
        rightArrowClick()
    } 
        
}