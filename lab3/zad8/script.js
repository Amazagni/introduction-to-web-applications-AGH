let firstButton = document.getElementById("firstButton")
let secondButton = document.getElementById("secondButton")
let firstPassword = document.getElementById("firstPassword")
let secondPassword = document.getElementById("secondPassword")
let firtsPasswordRealValue = ""
let secondButtonRealValue = ""

let firstReq = false 
let secondReq = false
let thirdReq = false
let fourthReq = false

let firstFlag = true
let secondFlag = true

secondPassword.addEventListener("keypress",keypressfun)
firstPassword.addEventListener("keypress",keypressfun)
firstPassword.addEventListener("keyup", firstPasswordKeyUp)
firstButton.addEventListener("click", firstButtonClick)
secondButton.addEventListener("click", secondButtonClick)

function keypressfun(event){
    if (event.key === "Enter"){
        if(secondPassword.value == firstPassword.value){
            if(firstReq && secondReq && thirdReq && fourthReq){
                alert("Hasło zostało zmienione")
            }
            else{
                alert("Hasło nie spełnia wszystkich wymagań")
            }
        }
        else{
            alert("Hasła nie są identyczne")
        }
    }
}


function firstPasswordKeyUp(){
    let passwordValue = firstPassword.value;

    let specialCharacter = /\W|_/g
    let specialCharacterMark = document.getElementById("specialCharactersMark")

    if(passwordValue.match(specialCharacter)){
        specialCharacterMark.src = "data/correct.png"
        firstReq = true
    }
    else{
        specialCharacterMark.src = "data/check-mark.png"
        firstReq = false
    }

    let capitalLetter = /[A-Z]/g
    let capitalLetterMark = document.getElementById("capitalLetterMark")
    if(passwordValue.match(capitalLetter)){
        capitalLetterMark.src = "data/correct.png"
        secondReq = true
    }
    else{
        capitalLetterMark.src = "data/check-mark.png"
        secondReq = false
    }

    let charactersMark = document.getElementById("charactersMark")
    if (passwordValue.length >= 8){
        charactersMark.src = "data/correct.png"
        thirdReq = true
    }
    else{
        charactersMark.src = "data/check-mark.png"
        thirdReq = false
    }

    let digit = /[0-9]/g
    let digitMark = document.getElementById("digitMark")
    if(passwordValue.match(digit)){
        digitMark.src = "data/correct.png"
        fourthReq = true
    }
    else{
        digitMark.src = "data/check-mark.png"
        fourthReq = false
    }


}

function firstButtonClick(){
    if(firstFlag){
        firstButton.src = "data/view.png"
        const type = firstPassword.getAttribute('type') === 'password' ? 'text' : 'password';
        firstPassword.setAttribute('type',type);
        
    }
    else{
        const type = firstPassword.getAttribute('type') === 'password' ? 'text' : 'password';
        firstPassword.setAttribute('type',type);
        
    }
    firstFlag = !firstFlag
}

function secondButtonClick(){
    if(secondFlag){
        secondButton.src = "data/view.png"
        const type = secondPassword.getAttribute('type') === 'password' ? 'text' : 'password';
        secondPassword.setAttribute('type',type);
        
    }
    else{
        secondButton.src = "data/hide.png"
        const type = secondPassword.getAttribute('type') === 'password' ? 'text' : 'password';
        secondPassword.setAttribute('type',type);
        
    }
    secondFlag = !secondFlag
}