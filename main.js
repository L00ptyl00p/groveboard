function updateWeeks() {
  let weeks = document.querySelector("#weeks");
  let h2 = document.querySelector("h2");
  let img = document.querySelector("img");

  h2.innerHTML = "Week " + weeks.value;
  img.src = "images/week" + weeks.value + "1.jpg";
}

addEventListener.onclick = updateWeeks;
