


const result = document.querySelector(".result")
const humanScore = document.querySelector("#human-score")
const machineScore = document.querySelector("#machine-score")
const draws = document.querySelector("#number-draws")

let humanScoreNumber = 0
let machineScoreNumber = 0
let numberDraws = 0
const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())
    // console.log(humanChoice)

    //console.log('retorno ' +playMachine())
}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

const playTheGame = (human, machine) => {

    console.log('Humano: ' + human + "Maquina: " + machine)

    if (human === machine) {
        result.innerHTML = "Deu empate"
        numberDraws++
        draws.innerHTML = numberDraws
        document.getElementById("cor").style.color = "#a200ff"
    } else if (
        (human === "paper" && machine === "rock") ||
        (human === 'rock' && machine === 'scissors') ||
        (human === 'scissors' && machine === 'paper')
    ) {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = "Você ganhou!"
        document.getElementById("cor").style.color = "rgb(254, 144, 0)"
    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "Você perdeu para a Alexa!"
        document.getElementById("cor").style.color = "rgb(134, 40, 6)"
    }


}