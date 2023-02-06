let add = document.getElementById("add")
let elements = document.getElementById("elements")
let deleteButton = document.getElementById("delete")
deleteButton.addEventListener("click",deleteButtonClick);
add.addEventListener("click",addClick)

function deleteButtonClick(){
    let id = Array.from(elements.children).indexOf(this.parentNode);
    elements.removeChild(elements.children[id]);
}

function addClick(){
    // checking valadity
    let check1 = document.getElementById("name")
    let check2 = document.getElementById("phone")
    if(check1.checkValidity() && check2.checkValidity()){

        let dataa = new FormData(document.querySelector('form')) 
        let nameData = dataa.get("name")
        let phoneData = dataa.get("phone")
        let person = document.createElement('div')
        let info = document.createElement('div')
        let name = document.createElement('p')
        let phone = document.createElement('p')
        let deleteButton = document.createElement('div')
        let deleteText = document.createElement('img')
        
        name.textContent = nameData
        phone.textContent = phoneData
        deleteText.src = "delete.png"
        
        name.style.fontWeight = "bold"
        person.classList.add("person")
        deleteButton.classList.add("delete")
        
        deleteButton.appendChild(deleteText)
        info.appendChild(name)
        info.appendChild(phone)
        person.appendChild(info)
        person.appendChild(deleteButton)
        elements.appendChild(person)
        deleteButton.addEventListener("click",deleteButtonClick)
    }
    if(!check1.checkValidity()){
        alert("Niepoprawny format imienia i nazwiska")
    }
    else{
        if(!check2.checkValidity()){
            alert("Niepoprawny format numeru telefonu")
        }
    }
    }
