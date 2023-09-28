const content = {
        visionBtn:"Content:Vision",
        historyBtn:"Content:History",
        goalsBtn:"Content:Goals"
}

var tabContent = document.getElementById("tab")
tabContent.textContent = content["historyBtn"]

var historyBtn = document.getElementById("historyBtn")
historyBtn.addEventListener("click",function(){
        tabContent.textContent = content["historyBtn"]
})

var goalsBtn = document.getElementById("goalsBtn")
goalsBtn.addEventListener("click",function(){
        tabContent.textContent = content["goalsBtn"]
})

var visionBtn = document.getElementById("visionBtn")
visionBtn.addEventListener("click",function(){
        tabContent.textContent = content["visionBtn"]
})