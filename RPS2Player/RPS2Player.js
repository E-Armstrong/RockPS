
let possibleOutcomes = ['Rock', 'Paper', 'Scissors']

var compsHand

var roundNumber = 1;

var winNumber = 0;

var loseNumber = 0;

var tieNumber = 0;

let compRandomHands = () => {
    compsHand = possibleOutcomes[Math.floor(Math.random() * possibleOutcomes.length)];
}

compRandomHands();

var userHand

var createUserHand = (buttonInput) => {
    userHand = buttonInput;
    console.log(userHand);
    gameResult(compsHand, userHand);
}

let gameResult = (compsHand, userHand) => {
    if (compsHand === 'Rock' && userHand === 'Scissors') {
        document.getElementById("Who Won Text").innerHTML = ('The website picked Rock. Rock beats Scissors! The website wins this round!');
        loseNumber++;
        document.getElementById("Loses").innerText = loseNumber;
    } else if (compsHand === 'Paper' && userHand === 'Rock') {
        document.getElementById("Who Won Text").innerHTML = ('The website picked Paper. Paper beats Rock! The website wins this round!');
        loseNumber++;
        document.getElementById("Loses").innerText = loseNumber;
    } else if (compsHand === 'Scissors' && userHand === 'Paper') {
        document.getElementById("Who Won Text").innerHTML = ('The website picked Scissors. Scissors beats Paper! The website wins this round!');
        loseNumber++;
        document.getElementById("Loses").innerText = loseNumber;
    } else if (userHand === 'Rock' && compsHand === 'Scissors') {
        document.getElementById("Who Won Text").innerHTML = ('The website picked Scissors. Rock beats Scissors! You win this round!');
        winNumber++;
        document.getElementById("Wins").innerText = winNumber;
    } else if (userHand === 'Paper' && compsHand === 'Rock') {
        document.getElementById("Who Won Text").innerHTML = ('The website picked Rock. Paper beats Rock! You win this round!');
        winNumber++;
        document.getElementById("Wins").innerText = winNumber;
    } else if (userHand === 'Scissors' && compsHand === 'Paper') {
        document.getElementById("Who Won Text").innerHTML = ('The website picked Paper. Scissors beats Paper! You win this round!');
        winNumber++;
        document.getElementById("Wins").innerText = winNumber;
    } else {
        document.getElementById("Who Won Text").innerHTML = ('You and the website picked the same thing. Its a tie!');
        tieNumber++;
        document.getElementById("Ties").innerText = tieNumber;
    }
    compRandomHands();
    roundNumber++;
    document.getElementById("Round Number").innerText = roundNumber;
}





//  document.getElementById("Who Won Text").innerHTML = "The computer chooses " + computerChoice + ", rock wins, you win.";

// let getdocument.getElementById("Who Won Text").innerHTMLation =() => {
//     document.getElementById("Who Won Text").innerHTML("Do you want to continue ?");
//     if( retVal == true ){
//        document.write ("User wants to continue!");
//        return true;
//     }
//     else{
//        document.write ("User does not want to continue!");
//        return false;

//  }}