let aAnswer = document.getElementById("aAnswer")
let bAnswer = document.getElementById("bAnswer")
let cAnswer = document.getElementById("cAnswer")
let dAnswer = document.getElementById("dAnswer")
let eAnswer = document.getElementById("eAnswer")
let fAnswer = document.getElementById("fAnswer")
let gAnswer = document.getElementById("gAnswer")

function a(data){
    let informations = data.filter(function(event) {
        return event.province === "małopolskie";
    })
    let answer = ""
    for (let i in informations){
        answer += informations[i].name + ",  "
    }
    aAnswer.innerText = answer
}

function b(data){
    let pattern = /A|a/g
    let informations = data.filter(function(event){
        let tmp = event.name.match(pattern)
        if(tmp === null)return false
        return tmp.length == 2 })
        
    let answer = ""
    for (i in informations){
        answer += informations[i].name + ",  "
    }
    bAnswer.innerText = answer
}


function c(data){
    let toSort = []
    for(i in data){
        toSort.push([data[i].name, data[i].dentensity])
    }
    toSort.sort(function(x,y){
        if(x[1] > y[1])return -1
        if(x[1] == y[1])return 0
        return 1
    })
    cAnswer.innerText = toSort[4][0]
}

function d(data){
    let answer = ""
    for(i in data){
        if(data[i].people > 100000){
            answer += data[i].name + " City, "
        
        }
    }
    dAnswer.innerText = answer
}

function e(data){
    let countAbove = 0
    let countBelow = 0
    for(i in data){
        if(data[i].people < 80000)countBelow++ 
        else countAbove++
    }
    let tmp = "Ilość miast powyżej 80000 mieszkańców: "+countAbove + ". Ilość miast poniżej 80000 mieszkańców: " + countBelow + "\n"
    if(countAbove > countBelow)tmp += "jest więcej miast posiadających powyżej 80000 mieszkańców"
    if(countAbove < countBelow)tmp += "jest więcej miast posiadających poniżej 80000 mieszkańców"
    if(countAbove == countBelow)tmp += "jest tyle samo miast posiadającyk powyżej mieszkańców 80000 co poniżej "
    eAnswer.innerText = tmp
}

function f(data){
    let numberOfCities = 0
    let sumOfAreas = 0
    for(i in data){
        if(data[i].township[0] === "P" || data[i].township[0] === "p"){
            numberOfCities++
            sumOfAreas += data[i].area
        }
    }
    let averageArea = sumOfAreas/numberOfCities
    fAnswer.innerText = averageArea + " (liczę powiaty rozpoczynające się na duże jak i małe p)"
    
}

function g(data){
    let x = 0
    let numberOfCities = 0
    let numberOfCitiesAboveN = 0
    for(i in data){
        x += 1
        if(data[i].province === "pomorskie")
        {
            numberOfCities += 1
            if(data[i].people > 5000){
                numberOfCitiesAboveN += 1
            }
        }
    }
    if(numberOfCities == numberOfCitiesAboveN){
        gAnswer.innerText = "Tak, wszystkie miasta z województwa pomorskiego mają więcej niż 5000 mieszkańców a jest ich: " +numberOfCities 
    }
    else{
        gAnswer.innerText = "Nie, nie wszystkie miasta z województwa pomorskiego mają więcej niż 5000 mieszkanćów \n Ilość miast posiadających więcej niż 5000 mieszkańców: " + numberOfCitiesAboveN
        + "\n Ilość wszystkich miast z województwa pomorskiego: " + numberOfCities
    }

}




async function start(){
    let tmp = await fetch("http://localhost:3000/cities")
    let data = await tmp.json()
    a(data)
    b(data)
    c(data)
    d(data)
    e(data)
    f(data)
    g(data)
}

start()