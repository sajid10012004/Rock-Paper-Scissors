let userScore = 0;
const userScorePara = document.querySelector("#user-score");
let compScore = 0;
const compScorePara = document.querySelector("#comp-score");


const choices = document.querySelectorAll('.choice'); 
const msg = document.querySelector("#msg");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}
const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        console.log("user won !!");
        userScore++;
        msg.style.backgroundColor = "green";
        userScorePara.innerText = userScore
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    }
    else{
        console.log("computer won!!");
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText =  `You lose!. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userChoice) => {
    console.log("user choice =", userChoice);
    const compChoice = genCompChoice();
    console.log("computer choice =", compChoice);

    if(userChoice === compChoice){
        console.log("it's a tie");
        msg.innerText = "Game was Draw. Play again";
        msg.style.backgroundColor = "black";
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});