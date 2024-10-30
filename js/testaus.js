const colorBoxElement1 = document.getElementById("testColorBox1") //talletetaan muuttujaan ensimmäinen väritestauslaatikko
const colorBoxElement2 = document.getElementById("testColorBox2") //ja talletetaan muuttujaan myös toinen väritestauslaatikko
let colorBallElement1 = document.querySelectorAll(".firstColor") //talletetaan muuttujaan kaikki ensimmäiseen laatikkoon valittavat värit
let colorBallElement2 = document.querySelectorAll(".secondColor") //ja samalla tavalla talletetaan muuttujaan kaikki toiseen laatikkoon valittavat värit


// käydään forEachilla läpi jokainen colorBallElement1 arrayssa oleva elementti ja lisätään niille eventListener
colorBallElement1.forEach(function(color) {
    color.addEventListener("click", function(){
        console.log(color.id)
        colorBoxElement1.style.backgroundColor  = color.id
    })
})

// käydään forEachilla läpi myös jokainen colorBallElement2 arrayssa oleva elementti ja lisätään niille samalla tavalla eventListenerit
colorBallElement2.forEach(function(color) {
    color.addEventListener("click", function(){
        console.log(color.id)
        colorBoxElement2.style.backgroundColor  = color.id
    })
})

document.getElementById("firstColorClearBtn").addEventListener("click", () => {
    colorBoxElement1.style.backgroundColor = "white"
})

document.getElementById("secondColorClearBtn").addEventListener("click", () => {
    colorBoxElement2.style.backgroundColor = "white"
})

// colorBallElement.addEventListener('click', () => {
//     console.log("hello")
// })