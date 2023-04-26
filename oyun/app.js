const turtle = document.querySelector(".turtle");
let x = 0;
let y = 0;
document.addEventListener(`keydown`, function (e) {
  switch (e.key) {
    case "a":
      x -= 10;
      turtle.style.transform = `translate(${x}px,${y}px)`;
      
      break;
    case "w":
      y -= 10;
      turtle.style.transform = `translate(${x}px,${y}px)`;
      break;
    case "d":
      x += 10;
      turtle.style.transform = `translate(${x}px,${y}px)`;
      break;
    case "s":
      y += 10;
      turtle.style.transform = `translate(${x}px,${y}px)`;
      break;
    default:
        console.log("yanlis deyer");
      break;
  }
});
