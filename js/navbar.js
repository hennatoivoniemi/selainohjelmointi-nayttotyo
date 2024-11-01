const hamburgerToggle = document.getElementById("hamburger")
const navbarElement = document.getElementById("navbarDiv")

hamburgerToggle.addEventListener("click", () => {
    if(navbarElement.classList.contains("open")) {
        navbarElement.classList.remove("open")
    } else {
        navbarElement.classList.add("open")
    }
    console.log('klikkasit hampurilaista')

})