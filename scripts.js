let counterEl = document.getElementById("counter-el");
let savedNum = document.getAnimations("saved");

let counter = 0;

function increment() {
    counter = counter + 1;
    counterEl.innerHTML = counter;
}
function decrement() {
    counter -= 1;
    counterEl.innerHTML = counter;
}


function save() {
    saved.innerHTML += " |  " + counter;
    counterEl.innerText = 0;
    counter = 0;
}