//variable
var array = new Array("rock", "paper", "scissor");

var playerChoice = "";
var iaChoice = "";

var iaPoint = 0;
var playerPoint = 0;

$("#scissor").click(e=>{
    playerChoice = e.target.id;
    IaChoice();
    regle();
    $("#playerChoice").html(playerChoice);
    $("#playerPoint").html(playerPoint);
    $("#iaPoint").html(iaPoint);
    console.log(iaChoice, playerChoice)
});

$("#paper").click(e=>{
    playerChoice = e.target.id;
    IaChoice();
    regle();
    $("#playerChoice").html(playerChoice);
    $("#playerPoint").html(playerPoint);
    $("#iaPoint").html(iaPoint);
    console.log(iaChoice, playerChoice)

});

$("#rock").click(e=>{
    playerChoice = e.target.id;
    IaChoice();
    regle();
    $("#playerChoice").html(playerChoice);
    $("#playerPoint").html(playerPoint);
    $("#iaPoint").html(iaPoint);
    console.log(iaChoice, playerChoice)

});
// IA
function IaChoice() {
    var randomValue = Math.floor(Math.random() * array.length);
    iaChoice = array[randomValue];
    $("#iaChoice").html(iaChoice);

}

// règle
function regle() {

    if(playerChoice=="scissor" && iaChoice == "paper") {
        playerPoint ++;
    }

    if(playerChoice=="scissor" && iaChoice == "rock") {
        iaPoint ++;
    }

    if(playerChoice=="paper" && iaChoice == "rock") {
        playerPoint++;
    }

    if(playerChoice=="paper" && iaChoice == "scissor") {
        iaPoint++;
    }

    if(playerChoice=="rock" && iaChoice == "paper") {
        iaPoint ++;
    }

    if(playerChoice=="rock" && iaChoice == "scissor") {
        playerPoint ++;
    }

    if(playerChoice ==  iaChoice) {
        alert('nul');
    }
}