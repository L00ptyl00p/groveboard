alert("Congratulations Erin !!!");

function change() {
  let currentWeek = document.querySelector("#current-week");
  let h2innerHTML = currentWeek.h2innerHTML;
  let h2 = currentWeek.querySelector("h2");
  h2.innerHTML = "Congratulations Erin !!!";

  h2.innerHTML = h2innerHTML;
}
