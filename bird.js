const links = document.querySelectorAll(".navbar-link");

links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((link) => {
      link.className = "navbar-link";
    });
    link.classList.add("change");

    link.previousElementSibling.classList.add("prevElChange");
    link.nextElementSibling.classList.add("nextElChange");
  });
});

function playSound1(){
    const music= new Audio ("cat.mp3");
	music.play();
}
function playSound2(){
    const music= new Audio ("crow.mp3");
	music.play();
}
function playSound3(){
    const music= new Audio ("dove.mp3");
	music.play();
}
function playSound4(){
    const music= new Audio ("birds.mp3");
	music.play();
}
function playSound5(){
    const music= new Audio ("eagle.mp3");
	music.play();
}
function playSound6(){
    const music= new Audio ("chicken.mp3");
	music.play();
}
function playSound7(){
    const music= new Audio ("voice.mp3");
	music.play();
}