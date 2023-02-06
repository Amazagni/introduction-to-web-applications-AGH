let summ = 0
let prop = true
let ord = true
let tab = ["nacisnąłeś niebieski o wartości 1", "nacisnąłeś czerwony o wartości 2", "nacisnąłeś żółty o wartości 5"];
let summOutput = document.getElementById("summ")
let comment1 = document.getElementById("comment1")
let comment2 = document.getElementById("comment2")
let comment3 = document.getElementById("comment3")
let blue = document.getElementById("blue")
let red = document.getElementById("red")
let yellow = document.getElementById("yellow")
let reset = document.getElementById("reset")
let propagationSwitch = document.getElementById("propagationSwitch")
let order = document.getElementById("order")

yellow.addEventListener("click",yellowClick)
red.addEventListener("click",redClick)
blue.addEventListener("click",blueClick)
reset.addEventListener("click",resetClick)
propagationSwitch.addEventListener("click",propagationSwitchClick)
order.addEventListener("click",orderClick)


function blueClick(event){
    if(prop == false)event.stopPropagation();
    addNumber(1)
    rotateComments(0)
}

function redClick(event){
    if(prop == false)event.stopPropagation();
    addNumber(2)
    rotateComments(1)
}

function yellowClick(event){
    if(prop == false)event.stopPropagation();
    addNumber(5)
    rotateComments(2);
}

function addNumber(n){
    summ += n
    summOutput.innerText = summ;
    if(summ > 30){
        red.removeEventListener("click",redClick)
        red.style.backgroundColor = "gray"
    }
    if(summ > 50){
        yellow.removeEventListener("click",yellowClick)
        yellow.style.backgroundColor = "gray" 
    }
}
function rotateComments(n){
    if (!ord){[comment1.innerText,comment3.innerText] = [comment3.innerText,comment1.innerText]
    }
    if (comment1.innerText == tab[0])
    {
        comment1.innerText = "none"
        comment2.innerText = "none"
    }
    if(prop == false){
        comment3.innerText = "none"
        comment2.innerText = "none"   
    }
    else{
        comment3.innerText = comment2.innerText;
        comment2.innerText = comment1.innerText; 
    }
    comment1.innerText = tab[n];
    if (!ord){[comment1.innerText,comment3.innerText] = [comment3.innerText,comment1.innerText]
    }

}


function resetClick(){
    order = true
    comment1.innerText = "none"
    comment2.innerText = "none"
    comment3.innerText = "none"
    summ = 0
    summOutput.innerText = summ;
    prop = true
    propagationSwitch.innerHTML = "Stop Propagation"
    yellow.addEventListener("click",yellowClick)
    red.addEventListener("click",redClick)
    red.style.backgroundColor = "red"
    yellow.style.backgroundColor = "yellow" 


}

function propagationSwitchClick(){
    if(prop){
        propagationSwitch.innerHTML = "Start Propagation"
    }
    else{
        propagationSwitch.innerHTML = "Stop Propagation"
    }
    prop = !prop
}
function orderClick(){
    ord = !ord;

}