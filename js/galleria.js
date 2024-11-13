const kuvausElementtiLista = document.querySelectorAll(".kuvaus") // tallennetaan muuttujaan arrayksi kaikki .kuvaus luokan sisältävät elementit
const kestoElementtiLista = document.querySelectorAll(".kesto") // tallennetaan muuttujaan arrayksi kaikki .kesto luokan sisältävät elementit
const hintaElementtiLista = document.querySelectorAll(".hinta") // tallennetaan muuttujaan arrayksi kaikki .hinta luokan sisältävät elementit
const pElementtiLista = document.querySelectorAll("p")          // tallennetaan muuttujaan arrayksi kaikki p-elementit


// Funktio, jolla saadaan näkyväksi remontin kuvaus:
//Lisätään ensin forEachillä kaikille eventlistenerit klikkaukselle
kuvausElementtiLista.forEach(function(kuvaus) {
    kuvaus.addEventListener("click", function(){
        // jos elementin luokista löytyy jo .open ja elementtiä klikataan, poistetaan .open luokka
        if (kuvaus.classList.contains("open")){
            kuvaus.classList.remove("open")
            // Testaus console.log, toimiiko click
            // console.log("Poistettu open luokka")
            //jos poistetaan .open-luokka, verrataan sen elementin id:tä p-elementtien luokkakuvauksiin
            pElementtiLista.forEach(function(pElementti) {
                // jos p-elementin luokkalista sisältää saman id:n, asetetaan sen p-elementin display noneksi
                if (pElementti.classList.contains(kuvaus.id)){
                    pElementti.style.display ="none"
                }
            })
        // jos elementin luokkalistauksessa ei ole .open-luokkaa, se lisätään
        } else {
            kuvaus.classList.add("open")
            // Testaus console.log, toimiiko click
            // console.log('Lisätty open luokka')
            // kun .open-luokka lisätään, sen p-elementin display muutetaan blockiksi jonka luokkalistauksesta löytyy vastaavuus elementin id-tietoon
            pElementtiLista.forEach(function(pElementti) {
                if (pElementti.classList.contains(kuvaus.id)){
                    pElementti.style.display ="block"
                }
            })
        }
    })
})

// Funktio, jolla saadaan näkyväksi remontin kesto
// sama toimintaperiaate kuin edellisessä funktiossa
kestoElementtiLista.forEach(function(kesto) {
    kesto.addEventListener("click", function(){
        if (kesto.classList.contains("open")){
            kesto.classList.remove("open")
            // Testaus console.log, toimiiko click
            // console.log("Poistettu open luokka kestosta")
            pElementtiLista.forEach(function(pElementti) {
                if (pElementti.classList.contains(kesto.id)){
                    pElementti.style.display ="none"
                }
            })
        } else {
            kesto.classList.add("open")
            // Testaus console.log, toimiiko click
            // console.log('Lisätty open luokka kestoon')
            pElementtiLista.forEach(function(pElementti) {
                if (pElementti.classList.contains(kesto.id)){
                    pElementti.style.display ="block"
                }
            })
        }
    })
})

// Funktio, jolla saadaan näkyväksi remontin hinta
// sama toimintaperiaate kuin edellisessä funktiossa
hintaElementtiLista.forEach(function(hinta) {
    hinta.addEventListener("click", function(){
        if (hinta.classList.contains("open")){
            hinta.classList.remove("open")
            // Testaus console.log, toimiiko click
            // console.log("Poistettu open luokka hinnasta")
            pElementtiLista.forEach(function(pElementti) {
                if (pElementti.classList.contains(hinta.id)){
                    pElementti.style.display ="none"
                }
            })
        } else {
            hinta.classList.add("open")
            // Testaus console.log, toimiiko click
            // console.log('Lisätty open luokka hintaan')
            pElementtiLista.forEach(function(pElementti) {
                if (pElementti.classList.contains(hinta.id)){
                    pElementti.style.display ="block"
                }
            })
        }
    })
})


