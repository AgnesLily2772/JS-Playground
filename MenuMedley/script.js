const menu = [
        {
            id: 1,
            name: "Idly",
            category: "Breakfast",
            price: 5.99, // Add the price for Idly
            description: "Soft steamed rice cakes served with coconut chutney and sambar.", // Add a description for Idly
        },
        {
            id: 2,
            name: "Dosai",
            category: "Breakfast",
            price: 7.99, // Add the price for Dosai
            description: "Thin and crispy South Indian crepes served with various chutneys and sambar.", // Add a description for Dosai
        },
        {
            id: 3,
            name: "Pongal",
            category: "Breakfast",
            price: 6.49, // Add the price for Pongal
            description: "A comforting and flavorful rice and lentil dish, typically served with ghee and chutney.", // Add a description for Pongal
        },
        {
            id: 4,
            name: "Sambar Rice",
            category: "Lunch",
            price: 8.99, // Add the price for Sambar Rice
            description: "A delicious combination of rice and tangy lentil stew (sambar), served with vegetables.", // Add a description for Sambar Rice
        },
        {
            id: 5,
            name: "Curd Rice",
            category: "Lunch",
            price: 7.49, // Add the price for Curd Rice
            description: "Cool and creamy rice mixed with yogurt, typically tempered with spices and herbs.", // Add a description for Curd Rice
        },
        {
            id: 6,
            name: "Full meals",
            category: "Lunch",
            price: 11.99, // Add the price for Full meals
            description: "A hearty and complete South Indian meal with rice, various curries, and accompaniments.", // Add a description for Full meals
        },
        {
            id: 7,
            name: "Chappathi",
            category: "Dinner",
            price: 5.49, // Add the price for Chappathi
            description: "Soft and unleavened Indian flatbreads, typically served with curries or gravies.", // Add a description for Chappathi
        },
        {
            id: 8,
            name: "Parotta",
            category: "Dinner",
            price: 6.99, // Add the price for Parotta
            description: "Flaky and layered South Indian flatbreads, often enjoyed with a side dish or curry.", // Add a description for Parotta
        },
        {
            id: 9,
            name: "Idiyappam",
            category: "Dinner",
            price: 7.29, // Add the price for Idiyappam
            description: "Delicate and stringy rice noodles, usually served with coconut milk or curry.", // Add a description for Idiyappam
        },
];

const page = document.getElementById("page")
function renderPage(category){
        const filteredMenu = category === "All" ? menu : menu.filter(item => item.category === category);
        console.log(filteredMenu)
        page.innerHTML = ""
        filteredMenu.forEach((element,index)=>{
                const elementDiv = document.createElement("div")
                elementDiv.className = "item"
        
                const elementDetails = document.createElement("div")
        
                const elementCover = document.createElement("img")
                elementCover.src = "./Imgs/"+element.id+".jpg"
                elementCover.className = "coverImg"
        
                const elementName = document.createElement("h3")
                elementName.textContent = element.name
        
                const elementPrice = document.createElement("span")
                elementPrice.textContent = "Rs. "+element.price
        
                const elementDescription = document.createElement("p")
                elementDescription.textContent = element.description
        
                elementDetails.append(elementName,elementPrice,elementDescription)
                elementDiv.append(elementCover,elementDetails)
                page.append(elementDiv)
        })

}
renderPage('All')
const categoryButtons = document.querySelectorAll(".categoryBtn");
categoryButtons.forEach(button => {
    button.addEventListener("click", () => {
        const selectedCategory = button.getAttribute("data-category");
        console.log(selectedCategory)
        renderPage(selectedCategory);
    });
});