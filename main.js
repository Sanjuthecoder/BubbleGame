'use strict'


var hit = 0;
var scoreval = 0;
var timer = 60;


function bubblemaker() {
    var bubble = "";
    for (var i = 0; i < 162; i++) {

        var num = Math.floor(Math.random() * 10)


        bubble += `<div class="bubble">${num}</div>`;
    }

    document.querySelector(".panelbtm").innerHTML = bubble;

}
function setTimer() {
    setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timeval").textContent = timer;
        }
        else {
            document.querySelector(".panelbtm").innerHTML = `<h1>Game Over ... Your Score :- ${scoreval} </h1>
                            <button id="button">Play Again</button>
 `;


            clearInterval(timer);
            // its not showing the -ve no. but they exists hence, will contribute to the memory.. memory space na bhare uske liye we didi this
        }
        // console.log(timer);
    }, 1000
    );
    // console.log(timer);
}


function hitVal() {
    hit = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hit;
    // console.log(hit);
}
// 
// console.log(hit);

function score() {

    scoreval += 10;
    // console.log(scoreval);
    document.querySelector("#scoreval").textContent = scoreval;
}


// var clickedValue;

document.querySelector(".panelbtm").addEventListener("click", function (det) {
    var clickedValue = Number(det.target.textContent);
    // console.log(clickedValue, hit);
    if (clickedValue === hit) {
        hitVal();
        score();
        bubblemaker();
    }
});

console.log(timer);




bubblemaker();
setTimer();
hitVal();
// score();
