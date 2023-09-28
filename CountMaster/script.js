const addButton = document.getElementById("addButton")
const subButton = document.getElementById("subButton")
const display = document.getElementById("display")

addButton.addEventListener("click",addFunction)
subButton.addEventListener("click",subFunction)

function addFunction(){
    let currentValue = parseInt(display.textContent)
    currentValue++
    display.textContent = currentValue
}

function subFunction(){
    let currentValue = parseInt(display.textContent)
    if(currentValue==0) {return}
    currentValue--
    display.textContent = currentValue
}