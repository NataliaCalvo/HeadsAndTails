const btnToss = document.getElementById("btn-toss");

const result = document.querySelector(".result");


btnToss.addEventListener("click", () => {
  const randomNum = Math.random();
    if (randomNum < 0.5) {
    result.textContent = "Heads!";
    result.style.color = "#FFFFFF";
  }
  else {
    result.textContent = "Tails!";
    result.style.color = "#FFFFFF";
  }
});