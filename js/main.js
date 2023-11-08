let grid = document.getElementById("grid");
let numCel = 100;
const btn = document.getElementById("playbtn");
let levels = document.getElementById("levels");
let numBombs = [];
let score = 0;
let scoreText = document.getElementById("score");
let lose = false;
let clickedCell= 0;


//Cambio livello
levels.addEventListener("change", function () {

    numCel = levels.value;
    console.log(levels.value);
})

btn.addEventListener("click", function () {


    grid.innerHTML = "";


    for (let i = 1; i <= numCel; i++) {

        let cell = createCell(i);
        grid.appendChild(cell);

    }

    createBomb();



})

// Creazione celle
function createCell(i) {

    const cell = document.createElement("div");
    cell.innerHTML = i;


    if (levels.value == 100) {
        cell.classList.add("easy");
    } else if (levels.value == 81) {
        cell.classList.add("medium")
    } else if (levels.value == 49) {
        cell.classList.add("hard")
    }


    // Cambio colore background cella al click
    cell.addEventListener("click", function () {

        if (!lose) {



            cell.classList.toggle("cellbg");
            console.log(i);

            if (numBombs.includes(i)) {
                console.log("Hai perso");
                scoreText.innerHTML=("Hai perso!")
                cell.style.background = "red";
                lose = true;
            } else {
                console.log("Non c'è la bomba")
                cell.style.background = "blue";
                score += 1;
                scoreText.innerHTML = ("Punteggio:" + score);
                clickedCell+=1;
            }
        }

    })

    return cell;
}

// Genera numero random in base ai livelli
function randomNum() {

    if (levels.value == 100) {
        return getRndInteger(1, 100)

    } else if (levels.value == 81) {
        return getRndInteger(1, 81)

    } else {
        return getRndInteger(1, 49)

    }

}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function createBomb() {

    numBombs = [];

    for (i = 0; i < 16; i++) {
        let num = randomNum()

        if(!numBombs.includes(num)){
            numBombs.push(num);

        }

    }
    console.log(numBombs)
}