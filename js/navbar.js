const hamburgerToggle = document.getElementById("hamburger")
const navbarDivElement = document.getElementById("navbarDiv")

hamburgerToggle.addEventListener("click", () => {
    if(navbarDivElement.classList.contains("open")) {
        navbarDivElement.classList.remove("open")
    } else {
        navbarDivElement.classList.add("open")
    }
    console.log('klikkasit hampurilaista')

})