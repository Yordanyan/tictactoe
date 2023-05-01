const first_page = document.querySelector(".starting");
const wrapper = document.querySelector(".wrapper");
const main = document.querySelector(".main_container");
const gameend = document.querySelector(".end");
const timeValue = document.getElementById("times");

let cards;
let player1 = 0
let player2 = 1;
let moves = 0;
let step;
let seconds = 11;
let interval;

let array = [
    [undefined,undefined,undefined],
    [undefined,undefined,undefined],
    [undefined,undefined,undefined]
]
wrapper.classList.add("hide");
gameend.classList.add("hide")

function time(){
    seconds -=1;
    if(seconds <= 0){
        alert("play!");
        seconds = 11;
    }
    timeValue.innerHTML = `<span>Time Left: </span>${seconds}`;
}
function generator() {
    main.innerHTML = "";
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            main.innerHTML += `
                <div class="card-container">
                    <img src="images/white.png" class="image" row="${i}" column="${j}"/>
                </div>
            `;
        }
    }
}

function flip(){
    seconds = 11;
    let playerImage;
    const image = this.querySelector(".image");
    let i = image.getAttribute("row");
    let j = image.getAttribute("column");
    if(image.getAttribute('src') !== "images/white.png"){
        
    }else{
        if(player1 === 0){
            playerImage = "images/x.png";
            array[i][j] = 0;
            moves++;
            player1 = 1;
            player2 = 0;
        }else{
            playerImage = "images/o.png";
            array[i][j] = 1;
            moves++;
            player2 = 1;
            player1 = 0;
        }
        if(image.getAttribute('src') == "images/white.png"){
            image.src = playerImage;
        }
    }
    if(moves >= 5){
        if(array[0][0] === array[0][1] && array[0][1] === array[0][2]){
            step = array[0][0];
        }else if(array[1][0] === array[1][1] && array[1][1] === array[1][2]){
            step = array[1][0];
        }
        else if(array[2][0] === array[2][1] && array[2][1] === array[2][2]){
            step = array[2][0];
        }
        else if(array[0][0] === array[1][0] && array[1][0] === array[2][0]){
            step = array[0][0];
        }
        else if(array[0][1] === array[1][1] && array[1][1] === array[2][1]){
            step = array[0][1];
        }
        else if(array[0][2] === array[1][2] && array[1][2] === array[2][2]){
            step = array[0][2];
        }
        else if(array[0][0] === array[1][1] && array[1][1]=== array[2][2]){
            step = array[0][0];
        }
        else if(array[0][2] === array[1][1] && array[1][1] === array[2][0]){
            step = array[0][2];
        }else if(moves == 9){
            step = 'nichya';
        }
    }
    if(step !== undefined){
       end();
    }
}

function restart(){
    location.reload();
}

function end(){
    if(step === 0){
        gameend.innerHTML = "<h1>The Winner is X</h1>";
    }else if(step === 1){
        gameend.innerHTML = "<h1>The Winner is O</h1>";
    }else{
        gameend.innerHTML = "<h1>Draw</h1>";
    }
    wrapper.classList.add('hide');
    gameend.classList.remove('hide');
    first_page.classList.add('hide');

}

function computer(){
    alert("Sorry This isn't Working Now")
}


function start(){
    first_page.classList.add('hide');
    wrapper.classList.remove("hide");
    generator();
    cards = document.querySelectorAll('.card-container');
    cards.forEach((card) => {
        card.addEventListener("click", flip);
    });
    time();
    interval = setInterval(time,1000);
}

