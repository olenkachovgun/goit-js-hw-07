// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input) підставляє його поточне значення в span#name-output як ім’я для привітання. Обов’язково очищай значення в інпуті по краях від пробілів . Якщо інпут порожній або містить лише пробіли, то замість імені у спан має підставлятися рядок "Anonymous".


const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

input.addEventListener("input", handleInput);

function handleInput() {
    span.textContent = input.value.trim();
    if (span.textContent === "") {
        span.textContent = "Anonymous"
    }
}


