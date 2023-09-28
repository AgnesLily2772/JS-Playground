const menuToggle = document.querySelector(".menu-toggle");
const navItems = document.querySelector(".navItems");

menuToggle.addEventListener("click", () => {
        if(menuToggle.classList.toggle("active")){
                navItems.style.display = "block";
                menuToggle.classList.toggle("remove")
        }
        else navItems.style.display = "none";
});