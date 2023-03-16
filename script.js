const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

document.addEventListener("keydown", function(event) {
    jump();
});

function jump() {
    if (dino.classList != "jump") {
        dino.classList.add("jump");
    }
    setTimeout(function() {
        dino.classList.remove("jump");
    }, 300)
} 

let isAlive = setInterval(function() {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"))            //parseInt - разбивает строковое и выдает численное значение. getComputedStyle - просчет стилей, где находится элемент 
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"))

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 200) {
        alert("Game Over!!")
    }

}, 10)