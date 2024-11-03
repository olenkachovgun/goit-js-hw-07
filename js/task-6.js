// Є input, у який користувач вводить бажану кількість елементів. Після натискання на кнопку Create має рендеритися (додаватися в DOM) колекція з відповідною кількістю елементів і очищатися значення в інпуті. При повторному натисканні на кнопку Create поверх старої колекції має рендеритись нова. Після натискання на кнопку Destroy колекція елементів має очищатися.



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const create = document.querySelector("button[data-create]");
const destroy = document.querySelector("button[data-destroy]");
const input = document.querySelector("#controls input");
const box = document.querySelector("#boxes");

create.addEventListener("click", createList);
destroy.addEventListener("click", handleDestroy);
let sizes = 30;

function createList() {
  if (Number(input.value)<=0 || Number(input.value)>100) {
    alert("Кількість введених елементів має число від 1 до 100 !");
    handleDestroy()
    return;
  }
  createBoxes(Number(input.value));
}
function createBoxes(count) {
  const arrBoxes = [];
  for (let i = 0; i < count; i++){
    const newBox = document.createElement("div");
    newBox.style.width = `${sizes}px`;
    newBox.style.height = `${sizes}px`;
    newBox.style.backgroundColor = getRandomHexColor();
    arrBoxes.push(newBox);
    sizes += 10;
  }
  box.append(...arrBoxes);
}
function handleDestroy() {
  sizes = 30;
  box.innerHTML = "";
  input.value="";
}

