const hamburgerButton = document.getElementById("hamburgerButton") // tähän tallennettu hampurilaisvalikon nappula
const closeIcon = "./assets/close-lg-svgrepo-com.svg" // tallennetaan sulkemisikoni muuttujaan
const hamburgerIcon = "./assets/hamburger-lg-svgrepo-com.svg" //tallennetaan hamppari-ikoni muuttujaan
const hamburgerSVG = document.getElementById("hamburgerSVG") // tallennetaan alkuperäinen svg-img elementti muuttujaan
const navbarDivElement = document.getElementById("navbarDiv") // tallennetaan navigoinnin container muuttujaan
const hamburgerNavbarElement = document.getElementById("hamburgerNavbar") // hampparivalikko muuttujaan

// lisätään klikkauksen kuuntelija hampurilaisvalikolle
hamburgerButton.addEventListener("click", () => {
    // tarkistetaan sisältääkö navigoinnin container luokan open ja toimitaan sen mukaan
    if(navbarDivElement.classList.contains("open")) {
        navbarDivElement.classList.remove("open")
        hamburgerNavbarElement.style.display = "none"
        hamburgerSVG.src = hamburgerIcon // käytetään hamppari-ikonia kun valikko on kiinni
    } else {
        navbarDivElement.classList.add("open")
        hamburgerNavbarElement.style.display = "flex"
        hamburgerSVG.src = closeIcon  // vaihdetaan näkyviin X-ikoni, kun valikko on avoinna

    }
})