const hamburgerToggle = document.getElementById("hamburgerButton")
const navbarDivElement = document.getElementById("navbarDiv")
const hamburgerNavbarElement = document.getElementById("hamburgerNavbar")

hamburgerToggle.addEventListener("click", () => {
    if(navbarDivElement.classList.contains("open")) {
        navbarDivElement.classList.remove("open")
        hamburgerNavbarElement.style.display = "none"
    } else {
        navbarDivElement.classList.add("open")
        hamburgerNavbarElement.style.display = "flex"
    }
    console.log('klikkasit hampurilaista')

})