const slider = document.getElementById("slider")
const img = document.getElementById("img")
const defaultImg = img.src
const nextBtn = document.getElementById("next")
nextBtn.addEventListener("click",function(){
        let imgName = parseInt(img.src.match(/\/(\d+)\.jpg$/)[1])
        if(imgName<5){
                imgName = imgName+1
                img.src = "http://127.0.0.1:5500/ImageSlider/Imgs/"+(imgName)+".jpg"
                console.log(imgName)
        }
        else{
                img.src =defaultImg
        }
})
const prevBtn = document.getElementById("prev")
prevBtn.addEventListener("click",function(){
        let imgName = parseInt(img.src.match(/\/(\d+)\.jpg$/)[1])
        if(imgName>1){
                imgName = imgName+1
                img.src = "http://127.0.0.1:5500/ImageSlider/Imgs/"+(imgName)+".jpg"
        }
        else{
                img.src =defaultImg
        }
})