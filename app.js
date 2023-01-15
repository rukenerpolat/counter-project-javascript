let numberContainer = document.getElementById("number");
let value = 0;

let btnIncrease = document.querySelector(".increase");
let btnDecrease = document.querySelector(".decrease");
let btnReset = document.querySelector(".reset");

btnIncrease.addEventListener("click", () => {
    value++;
    numberContainer.textContent = value;
});

btnDecrease.addEventListener("click", () => {
    value--;
    numberContainer.textContent = value;
});

btnReset.addEventListener("click", () => {
    value = 0;
    numberContainer.textContent = value;
});