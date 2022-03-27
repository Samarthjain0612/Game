alert("Welcome to the Game")
var name = prompt("Enter your name");
var bubbles = document.querySelector("#bubbles");
var time = 60;
var scr = 0;
var hits = 0;

function show() {
  var clutter = "";
  for (var i = 0; i < 40; i++) {
    var random = Math.floor(Math.random() * 10);
    clutter += `<div id="bubble">${random}</div>`;
  }
  bubbles.innerHTML = clutter;
}
function timer() {
  setInterval(function () {
    if (time >= 0) {
      document.querySelector("#timer .box").textContent = time;
      --time;
    } else{
      clearInterval();
      bubbles.innerHTML = `<div id="scoreCard"><h1>Game Over!!</h1><div></div><p>Hello ${name}</p><p>Your Score : ${scr}<br>Total Hits : ${hits}</p></div>`;
    }
  }, 1000);
}
function hit(){
    hits++;
    document.querySelector("#hit .box").textContent = Math.floor(Math.random()*10);
}
function score(myScore){
    document.querySelector("#score .box").textContent = myScore;
}
show();
timer();
hit();
score(scr);
bubbles.addEventListener("click", function(dets){
    if(dets.target.textContent === document.querySelector("#hit .box").textContent){
        score(scr += 10);
    }
    hit();
    show();
})
document.querySelector("#retry").addEventListener("click", function(){
  time = 60;
  score(0);
  show();
})