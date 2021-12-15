document.querySelector(".dots-btn").addEventListener("click", () => {
  document.querySelector(".container").classList.toggle("change");
  document.getElementById("text").innerHTML = "Move your mouse over a pic and it will grow.";
});
