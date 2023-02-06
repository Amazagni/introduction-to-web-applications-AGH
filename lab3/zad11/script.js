let container = document.getElementById("container")
let subregions = []//name; population; area;
let subregionObjects = []
let citiesObjects = []
let minPopulation = document.getElementById("minPopulation")
let maxPopulation = document.getElementById("maxPopulation")
let minArea = document.getElementById("minArea")
let maxArea = document.getElementById("maxArea")
let sortNr = 0
let minPop = minPopulation.value
let maxPop = maxPopulation.value
let minAr = minArea.value
let maxAr = maxArea.value
let populationButton = document.getElementById("Population")
let nameButton = document.getElementById("Name")
let capitalButton = document.getElementById("Capital")
let areaButton = document.getElementById("Area")
let sortButtons = [nameButton,capitalButton,populationButton,areaButton]
let onPage = document.getElementById("onPage")
let onPageVal = 25
let tmpp
let data
let next = document.getElementById("next")
let prev = document.getElementById("prev")
let pageNumber = 1
let page = document.getElementById("page")
next.addEventListener("click",nextClick)
prev.addEventListener("click",prevClick)
nameButton.addEventListener("click",sortNow0)
capitalButton.addEventListener("click",sortNow1)
populationButton.addEventListener("click",sortNow2)
areaButton.addEventListener("click",sortNow3)
onPage.addEventListener("keypress",refresh)
minPopulation.addEventListener("keypress",refresh)
maxPopulation.addEventListener("keypress",refresh)
minArea.addEventListener("keypress",refresh)
maxArea.addEventListener("keypress",refresh)
//25 subregionow
let countries = []//name; population; area;
for(let i = 0; i < 25; i++){
    countries.push([])
}

function nextClick(){
    if(pageNumber * onPageVal < 25){
        pageNumber += 1
        page.innerText = pageNumber
        build()
    }
}
function prevClick(){
    if(pageNumber > 1){
        pageNumber -= 1
        page.innerText = pageNumber
        build()
    }
}
function sortNow0(){
    if(sortNr != 0){
        sortButtons[sortNr].style.backgroundColor = "lightgray"
        sortNr = 0
        sortButtons[0].style.backgroundColor = "gray"
        refreshh()
    }   
}


function sortNow1(){
    if(sortNr != 1){
        sortButtons[sortNr].style.backgroundColor = "lightgray"
        sortNr = 1
        sortButtons[sortNr].style.backgroundColor = "gray"
        refreshh()
    }
}
function sortNow2(){
    if(sortNr != 2){
        sortButtons[sortNr].style.backgroundColor = "lightgray"
        sortNr = 2
        sortButtons[sortNr].style.backgroundColor = "gray"
        refreshh()
    }    
}
function sortNow3(){
    if(sortNr != 3){
        sortButtons[sortNr].style.backgroundColor = "lightgray"
        sortNr = 3
        sortButtons[sortNr].style.backgroundColor = "gray"
        refreshh()
    }
}    
function refreshh(){
    
    minPop = minPopulation.value
    maxPop = maxPopulation.value
    minAr = minArea.value
    maxAr = maxArea.value
    onPageVal = onPage.value
    build()
}
function refresh(e){
    if(e.key === "Enter"){
        minPop = minPopulation.value
        maxPop = maxPopulation.value
        minAr = minArea.value
        maxAr = maxArea.value
        onPageVal = onPage.value
        pageNumber = 1
        page.innerText = pageNumber
        build()
    }

}
function subregionClick(){
    for(i in subregionObjects){
        if(subregionObjects[i][0] === this){
            if(subregionObjects[i][2] == true){
                subregionObjects[i][2] = false
                subregionObjects[i][1].style.display = "none"
            }
            else{
                subregionObjects[i][2] = true
                subregionObjects[i][1].style.display = "block"
            }
        }
    }
}


async function start(){
    tmpp = await fetch("https://restcountries.com/v3.1/all")
    data = await tmpp.json()

    for(i in data){
        let flag = true
        let tmp = data[i].subregion
        for(j in subregions){
            if(subregions[j][0] == tmp)
            {
                countries[j].push([data[i].name.common,data[i].capital,data[i].population,data[i].area])
                subregions[j][1] += data[i].population
                subregions[j][2] += data[i].area
                flag = false
                break
            }
        }
        if(flag)subregions.push([tmp,data[i].population,data[i].area])
    }
    for(i in countries){
        countries[i].sort(function(a,b){
            if(a[0] <= b[0])return -1
            return 1
        })
    }



    for(i in subregions){
        let subregionDiv = document.createElement("div")
        let countriesDiv = document.createElement("div")


        let subregionName = document.createElement("p")
        subregionName.innerText = subregions[i][0]
        let subregionPopulation = document.createElement("p")
        subregionPopulation.innerText = subregions[i][1]
        let subregionArea = document.createElement("p")
        subregionArea.innerText = subregions[i][2]
        subregionDiv.appendChild(subregionName)
        subregionDiv.appendChild(subregionPopulation)
        subregionDiv.appendChild(subregionArea)
        subregionName.classList.add("countryName")
        subregionPopulation.classList.add("countryPopulation")
        subregionArea.classList.add("countryArea")
        subregionDiv.classList.add("subregionDiv")
        countriesDiv.classList.add("countriesDiv")

        for(j in countries[i]){
            let countryDiv = document.createElement("div")
            let countryName = document.createElement("p")
            countryName.innerText = countries[i][j][0]
            let countryCapital = document.createElement("p")
            countryCapital.innerText = countries[i][j][1]
            let countryPopulation = document.createElement("p")
            countryPopulation.innerText = countries[i][j][2]
            let countryArea = document.createElement("p")
            countryArea.innerText = countries[i][j][3]
            countryName.classList.add("countryName")
            countryPopulation.classList.add("countryPopulation")
            countryCapital.classList.add("countryCapital")
            countryArea.classList.add("countryArea")
            
            countryDiv.appendChild(countryName)
            countryDiv.appendChild(countryCapital)
            countryDiv.appendChild(countryPopulation)
            countryDiv.appendChild(countryArea)
            countryDiv.classList.add("countryDiv")
            countriesDiv.appendChild(countryDiv)
        }

        container.appendChild(subregionDiv)
        container.appendChild(countriesDiv)
        subregionObjects.push([subregionDiv,countriesDiv,false])
        countriesDiv.style.display = "none"
        subregionDiv.addEventListener("click",subregionClick)
    }

}
function build(){
    for(i in subregionObjects){
        subregionObjects[i][0].remove()
        subregionObjects[i][1].remove()
    }
    subregionObjects = []
    subregions = []
    countries = []
    count = 0
    for(let i = 0; i < 25; i++){
        countries.push([])
    }
    for(i in data){
        let flag = true
        let tmp = data[i].subregion
        for(j in subregions){
                if(subregions[j][0] == tmp)
                {
                    flag = false
                    break
                }
        }
        if(flag){subregions.push([tmp,0,0]);count+=1}
    }
    for(i in data){
        let tmp = data[i].subregion
        for(j in subregions){
            if(subregions[j][0] == tmp){
                if(minPop <= data[i].population && maxPop >= data[i].population && minAr <= data[i].area && maxAr >= data[i].area)
                {   console.log(countries[j])
                    console.log(j)
                    countries[j].push([data[i].name.common,data[i].capital,data[i].population,data[i].area])
                    subregions[j][1] += data[i].population
                    subregions[j][2] += data[i].area
                }
        }}
    }
    if(sortNr<2){
        for(i in countries){
            countries[i].sort(function(a,b){
                if(a[sortNr] <= b[sortNr])return -1
                return 1
            })
        }
    }
    else{
        for(i in countries){
            countries[i].sort(function(a,b){
                if(a[sortNr] <= b[sortNr])return 1
                return -1
            })
        }

    }
    for(i in subregions){
        if(i >= onPageVal * (pageNumber-1) && i < onPageVal * (pageNumber)){
            let subregionDiv = document.createElement("div")
            let countriesDiv = document.createElement("div")
            
            
            let subregionName = document.createElement("p")
            subregionName.innerText = subregions[i][0]
            let subregionPopulation = document.createElement("p")
            subregionPopulation.innerText = subregions[i][1]
            let subregionArea = document.createElement("p")
            subregionArea.innerText = subregions[i][2]
            subregionDiv.appendChild(subregionName)
            subregionDiv.appendChild(subregionPopulation)
            subregionDiv.appendChild(subregionArea)
            subregionName.classList.add("countryName")
            subregionPopulation.classList.add("countryPopulation")
            subregionArea.classList.add("countryArea")
            subregionDiv.classList.add("subregionDiv")
            countriesDiv.classList.add("countriesDiv")
            
            for(j in countries[i]){
                let countryDiv = document.createElement("div")
                let countryName = document.createElement("p")
                countryName.innerText = countries[i][j][0]
                let countryCapital = document.createElement("p")
                countryCapital.innerText = countries[i][j][1]
                let countryPopulation = document.createElement("p")
                countryPopulation.innerText = countries[i][j][2]
                let countryArea = document.createElement("p")
                countryArea.innerText = countries[i][j][3]
                countryName.classList.add("countryName")
                countryPopulation.classList.add("countryPopulation")
                countryCapital.classList.add("countryCapital")
                countryArea.classList.add("countryArea")
                
                countryDiv.appendChild(countryName)
                countryDiv.appendChild(countryCapital)
                countryDiv.appendChild(countryPopulation)
                countryDiv.appendChild(countryArea)
                countryDiv.classList.add("countryDiv")
                countriesDiv.appendChild(countryDiv)
            }
            
            container.appendChild(subregionDiv)
            container.appendChild(countriesDiv)
            subregionObjects.push([subregionDiv,countriesDiv,false])
            countriesDiv.style.display = "none"
            subregionDiv.addEventListener("click",subregionClick)
        }
        
    }
    }
    start()