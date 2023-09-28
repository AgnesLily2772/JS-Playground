function generateRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function colorChange(){
    const randomColor = generateRandomColor();
    const home = document.getElementById("home")
    home.style.backgroundColor = randomColor
}
  
const ColorChangeButton = document.getElementById("button1")
ColorChangeButton.addEventListener("click",colorChange)