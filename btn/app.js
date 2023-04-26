const btn = document.querySelector(".btn").children;
const btnblu = document.querySelector(".btnblu");

btn[0].addEventListener("click", function () {
  btnblu.innerHTML = "0.00";
});

btn[1].addEventListener("click", function () {
  btnblu.innerHTML = "30.00";
});
btn[2].addEventListener("click", function () {
  btnblu.innerHTML = "60.00";
});
btn[3].addEventListener("click", function () {
  btnblu.innerHTML = "90.00";
});
btn[4].addEventListener("click", function () {
  btnblu.innerHTML = "120.0";
});
let x = 0;
btn[6].addEventListener("click", function () {
  if (btnblu.innerHTML !== "-") {
    btnblu.innerHTML = (+btnblu.innerHTML - 10.05).toFixed(2);
  }
  btnblu.innerHTML = "0.00";
});
btn[7].addEventListener("click", function () {
  btnblu.innerHTML = (+btnblu.innerHTML + 10.05).toFixed(2);
});

document.addEventListener(`keydown`, function (e) {
  switch (e.key) {
    case "m":
      btnblu.innerHTML = "0.00";
      break;
    case "1":
      btnblu.innerHTML = "30.00";
      break;
    case "2":
      btnblu.innerHTML = "60.00";
      break;
    case "3":
      btnblu.innerHTML = "90.00";
      break;
    case "4":
      btnblu.innerHTML = "120.0";
      break;
    case ",":
      if (btnblu.innerHTML !== "-") {
        btnblu.innerHTML = (+btnblu.innerHTML - 10.05).toFixed(2);
      }
      btnblu.innerHTML = "0.00";
      break;
    case ".":
      btnblu.innerHTML = (+btnblu.innerHTML + 10.05).toFixed(2);
      break;

    default:
      break;
  }
});
