const menuIcon = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar");
const showpic = document.querySelector(".nav-link");
const cont = document.querySelector(".container");



menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("change");
});

function changeBackground1() {
    cont.style.backgroundImage="url(funny1.jpg)";
}
function changeBackground2() {
    cont.style.backgroundImage="url(funny2.jpg)";
}
function changeBackground3() {
    cont.style.backgroundImage="url(funny3.jpg)";
 }
function changeBackground4() {
    cont.style.backgroundImage="url(funny4.jpg)";
}
function changeBackground5() {
    cont.style.backgroundImage="url(funny5.jpg)";
}