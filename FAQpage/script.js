document.addEventListener("DOMContentLoaded",function(){
    const toggleButtons = document.querySelectorAll(".toggle")
    toggleButtons.forEach(function(button){
        button.addEventListener("click",function(){
            const answer = this.parentNode.nextElementSibling;
            console.log(answer)
            if(answer.style.display === "block"){
                answer.style.display = "none"
            }
            else{
                answer.style.display = "block"
                answer.style.padding = "20px"
            }
        })
    })
})