window.addEventListener("load", () => {
  const canvas = document.querySelector("#canvas");
  const ctx = canvas.getContext("2d");
  // canvas.height = document.getElementById("canvas-contain").innerHeight;
  // canvas.width = document.getElementById("canvas-contain").innerWidth;
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
  //variables
  let painting = false;
  function startPosition(e) {
    painting = true;
    draw(e);
  }
  function finishedPosition() {
    painting = false;
    ctx.beginPath();
  }
  function draw(e) {
    if (!painting) return;
    ctx.lineWidth = 10;
    ctx.lineCap = "round";
    ctx.lineTo(e.clientX - 64, e.clientY - 57);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX - 64, e.clientY - 57);
  }
  function touchstart(event) {
    startPosition(event.touches[0]);
  }
  function touchmove(event) {
    draw(event.touches[0]);
    event.preventDefault();
  }
  function touchend(event) {
    finishedPosition(event.changedTouches[0]);
  }
  //Event Listeners
  canvas.addEventListener("mousedown", startPosition);
  canvas.addEventListener("mouseup", finishedPosition);
  canvas.addEventListener("mousemove", draw);
  canvas.addEventListener("touchstart", touchstart);
  canvas.addEventListener("touchend", touchend);
  canvas.addEventListener("touchmove", touchmove);
});

//For resizing the canvas panel
window.addEventListener("resize", () => {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
  // canvas.height = document.getElementById("canvas-contain").innerHeight;
  // canvas.width = document.getElementById("canvas-contain").innerWidth;
});
