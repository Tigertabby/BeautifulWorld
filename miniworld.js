const boxesContainer = document.getElementById('boxes')
const btn = document.getElementById('btn')
btn.addEventListener('click', () => boxesContainer.classList.toggle('big'))


function createBoxes() {
var count = 0;
for (let i = 0; i < 4; i++) {
for (let j = 0; j < 4; j++) {
count++;
const box = document.createElement('div')
box.setAttribute("id", count);
box.classList.add('box')
box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`
boxesContainer.appendChild(box)
}
}
}

createBoxes()

function myFunction() {
  const how  = document.querySelector(".how");
  how.style.opacity = 1;
}

