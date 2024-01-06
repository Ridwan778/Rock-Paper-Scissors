var computerSelection = document.getElementById("Computer Selection");
var userSelection = document.getElementById("User Selection");
var winner = document.getElementById("Winner");

var choices = document.querySelectorAll(".buttons");

let userChoice = '';
let computerChoice = '';

choices.forEach( button => button.addEventListener('click', (e) => {
    //user selection
    userChoice = e.target.id;
    userImg = selectImage(userChoice);
    userSelection.innerHTML = userChoice + "  " + `<img src = "${userImg}" width = "20" height = "20">`;

    //computer selection
    let rand = Math.floor(Math.random() * 3);
    //let ComputerSelection =  choices[rand].id
    computerImg = selectImage(choices[rand].id);
    if(rand == 0){
        computerChoice = 'rock';
    }
    if(rand == 1){
        computerChoice = 'paper';
    }
    if(rand == 2){
        computerChoice = 'scissors';
    }
    computerSelection.innerHTML = choices[rand].id + "  " + `<img src = "${computerImg}" width = "20" height = "20">`;

    selectWinner();
}));

function selectImage(label){
    if(label == 'rock'){
        return 'rock.jpg';
    }
    if(label == 'paper'){
        return 'paper.jpg';
    }
    if(label == 'scissors'){
        return 'scissors.jpg';
    }
}

function selectWinner(){
    if(userChoice == computerChoice){
        winner.innerHTML = "NONE. IT'S A DRAW";
        return;
    }
    if(userChoice == 'rock'){
        if(computerChoice == "paper"){
            winner.innerHTML = "COMPUTER WINS!";
            return;
        }
        winner.innerHTML = "USER WINS!";
        return;
    }
    if(userChoice == 'paper'){
        if(computerChoice == "scissors"){
            winner.innerHTML = "COMPUTER WINS!";
            return;
        }
        winner.innerHTML = "USER WINS!";
        return;
    }
    if(userChoice == 'scissors'){
        if(computerChoice == "rock"){
            winner.innerHTML = "COMPUTER WINS!";
            return;
        }
        winner.innerHTML = "USER WINS!";
        return;
    }
}