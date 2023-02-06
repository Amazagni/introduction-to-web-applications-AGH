let main = document.getElementById("main")
let ball = document.getElementById("ball")
let body = document.getElementById("body")
main.addEventListener("click",mainClick)
body.addEventListener("click",bodyClick)
function bodyClick(event){
    event.stopPropagation()    
    alert("DON'T GO THERE MY FRIEND")
}

function mainClick(event){
    event.stopPropagation()
    let x = event.clientX
    let y = event.clientY
    x -= 24;
    y -= 24;
    ball.style.top = y + "px";
    ball.style.left = x + "px";

}