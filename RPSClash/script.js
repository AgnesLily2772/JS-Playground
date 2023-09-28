let choices = {
    rock: "&#9994;&#127996;",
    paper: "&#9995;&#127996;",
    scissor: "&#9996;&#127996;",
};
function declareWinner(comp,user){
        if(comp === user) return("Match draw")

        if((comp === "rock" && user === "scissor") ||
        (comp === "scissor" && user === "paper" ) || 
        (comp === "paper" && user === "rock")) return("You lost")

        if((comp === "scissor" && user === "rock") || 
        (comp === "paper" && user === "scissor")  ||
        (comp === "rock" && user === "paper")) return("You won")

}
const ground = document.getElementById("ground");

const result = document.getElementById("result");

const board = document.getElementById("board")

const computer = document.getElementById("computer");

const user = document.getElementById("user");

const replayBtn = document.getElementById("replayBtn")
replayBtn.addEventListener("click",function(){
        window.location.reload()
})

const radioButtons = document.querySelectorAll('input[name="choice"]');

radioButtons.forEach((radio) => {
    radio.addEventListener("input", function (e) {
        const selectedValue = e.target.value;
        ground.style.display = "none";
        result.style.display = "grid";
        let choiceArray = Object.keys(choices);
        let randomChoice =
            choiceArray[
                Math.floor(Object.values(choiceArray).length * Math.random())
            ];
        user.innerHTML = choices[selectedValue];
        computer.innerHTML = choices[randomChoice];
        const res = declareWinner(randomChoice,selectedValue)
        board.textContent = "Result: "+res
    });
});
