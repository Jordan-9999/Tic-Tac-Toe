const gameBoard = (function (){
 const gameBoardArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
 return {gameBoardArr};
})();



 const playerOne = (function (){
  const playerOneArray = [];
  return {playerOneArray};
 })();

 const playerTwo = (function (){
  const playerTwoArray = [];
  return {playerTwoArray};
 })();



const gameTurnsObj = (function (){
const gameTurns = {
 start : "game start",
 playerOneTurn : "player one's turn",
 playerTwoTurn : "player two's turn"
};
return gameTurns;
})();

 const turn = function(){
if(gameTurnsObj.start == "game start"){
    const option1 = gameTurnsObj.playerOneTurn;
    const option2 = gameTurnsObj.playerTwoTurn;
    const chosenOption = Math.random() < 0.5 ? option1 : option2;
    result = chosenOption;
    gameTurnsObj.start = result;
  }
 
else{
  if(result == gameTurnsObj.playerOneTurn){
    result = gameTurnsObj.playerTwoTurn;
  }
  else{result = gameTurnsObj.playerOneTurn};};
  return result;
 };



 const checkForCombinations = function(){
  const winningCombinations = 
  [[1, 2, 3],
   [4, 5, 6],
   [7, 8, 9],
   [1, 4, 7],
   [2, 5, 8],
   [3, 6, 9],
   [1, 5, 9],
   [3, 5, 7]];

  let result = "no match";

  for(let i=0; i< winningCombinations.length; i++){
    //console.log(playerOne.playerOneArray, playerTwo.playerTwoArray, winningCombinations[i]);
    if (winningCombinations[i].every(item => playerOne.playerOneArray.includes(item)) === true){
      result = "player one wins";
      console.log("player one match");
    }
    else if(winningCombinations[i].every(item => playerTwo.playerTwoArray.includes(item)) === true){
      result = "player two wins";
      console.log("player two match");
    }
  };
  return result;
};

const gameOver = function(){
  let gameOverResult = false;
  if (checkForCombinations() == "player one wins"){
    gameOverResult = true;
    turn();
    //alert("player one wins!")
  }
  else if(checkForCombinations() == "player two wins"){
    gameOverResult = true;
    turn();
    //alert("player two wins")
  }

  else if(gameBoard.gameBoardArr.length === 0){
    gameOverResult = false;
    //alert("it's a tie!")
  }
  return gameOverResult;
};

 

 const playerMark = function(playerChoice){
    const index = gameBoard.gameBoardArr.indexOf(playerChoice);
    let splicedNum = gameBoard.gameBoardArr.splice(index, 1);
    
     let turnResult = turn();
   if(turnResult == "player one's turn"){
    playerOne.playerOneArray.push(...splicedNum);
    playerOne.playerOneArray.sort();
    
   }
   else{
    playerTwo.playerTwoArray.push(...splicedNum);
    playerTwo.playerTwoArray.sort();
   // console.log(playerTwo.playerTwoArray, "player two");
   }

    
checkForCombinations();
//gameOver();
return turnResult;
 };

const display = {
  
 gameBoardDisplay : function(){
  let gameTitle = document.getElementById("game-title");
  const newGameButton = document.getElementById("new-game");
  const newGameDialog = document.getElementById("new-game-dialog");
  const playerOneName = document.getElementById("player-one-name");
  const playerTwoName = document.getElementById("player-two-name");
  const confirmBtn = document.getElementById("confirm-btn");
  const gameOverDialog = document.getElementById("game-over-dialog");
  const winnerAnnouncement = document.getElementById("winner-announcement");
  const gameOverClose = document.getElementById("game-over-close");
  const gameOverNewGame = document.getElementById("game-over-new-game");

  
  newGameButton.addEventListener("click", function(){
    newGameDialog.showModal();
  });
  newGameDialog.addEventListener("close", function(){
  });
  confirmBtn.addEventListener("click", function(){
    event.preventDefault();
    while(gameContainer.firstChild){
      gameContainer.removeChild(gameContainer.firstChild);
    };
    gameBoard.gameBoardArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    playerOne.playerOneArray = [];
    playerTwo.playerTwoArray = [];
    
    createDisplayBoard();
    
    let turnDisplay = turn();

    if (playerOneName.value == ""){
      playerOneName.value = "player one"
    };
    if(playerTwoName.value == ""){
      playerTwoName.value = "player two"
    };

    if(turnDisplay === "player one's turn"){
      turnDisplay = playerTwoName.value;
    } else{turnDisplay = playerOneName.value};
    turnCard.textContent = turnDisplay + "'s turn";
    gameTitle.appendChild(turnCard);
    newGameDialog.close();
  });

  gameOverClose.addEventListener("click", function(){
    console.log("it closed")
    gameOverDialog.close();
  });
  gameOverNewGame.addEventListener("click", function(){
    event.preventDefault();
    while(gameContainer.firstChild){
      gameContainer.removeChild(gameContainer.firstChild);
    };
    gameBoard.gameBoardArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    playerOne.playerOneArray = [];
    playerTwo.playerTwoArray = [];
    
    createDisplayBoard();
    
    let turnDisplay = turn();

    if (playerOneName.value == ""){
      playerOneName.value = "player one"
    };
    if(playerTwoName.value == ""){
      playerTwoName.value = "player two"
    };

    if(turnDisplay === "player one's turn"){
      turnDisplay = playerTwoName.value;
    } else{turnDisplay = playerOneName.value};
    turnCard.textContent = turnDisplay + "'s turn";
    gameTitle.appendChild(turnCard);
    gameOverDialog.close();
  })

  let turnCard = document.createElement("div");
  
 
  let gameContainer = document.getElementById("game-container");

  const buttonDisable = function(){
    const gameButton = document.querySelectorAll('.game-button');
    gameButton.forEach(button => button.disabled = true);
    gameContainer.style.backgroundColor = "lightgray";
   
  };
  const buttonEnable = function(){
    const gameButton = document.querySelectorAll('.game-button');
    gameButton.forEach(button => button.disabled = false);
    gameContainer.style.backgroundColor = "black";
   
  };

  const createDisplayBoard = function(){
  for(let i=0; i < gameBoard.gameBoardArr.length; i++){
    let gameBoardButton = document.createElement("button");
    gameBoardButton.classList.add("game-button");
    let gameBoardButtonValue = gameBoard.gameBoardArr[i];
    gameContainer.appendChild(gameBoardButton);

    
  


    gameBoardButton.addEventListener('click', function(){

      turnDisplay = playerMark(gameBoardButtonValue);
      let currentTurn = turnDisplay;
      if(turnDisplay === "player one's turn"){gameBoardButton.textContent = "X"}
      else{gameBoardButton.textContent = "O"}
      
      if(turnDisplay === "player one's turn"){
        turnDisplay = playerTwoName.value + "'s turn";
        currentTurn = playerOneName.value;
      } else{turnDisplay = playerOneName.value + "'s turn";
        currentTurn = playerTwoName.value;
      };
      turnCard.textContent = turnDisplay;
      gameBoardButton.disabled = true;
      console.log(playerOne.playerOneArray, playerTwo.playerTwoArray);
      if(gameOver() == true){
        turnCard.textContent = "";
        console.log("the game ended");
        buttonDisable();
        winnerAnnouncement.textContent = currentTurn + " wins";
        gameOverDialog.showModal();
      }
     else if(gameOver() == false && gameBoard.gameBoardArr.length === 0){
      turnCard.textContent = "";
      winnerAnnouncement.textContent = "It's a tie!"
      gameOverDialog.showModal();
      turn();
     }
    });
    buttonEnable();
  }};
  createDisplayBoard();
  buttonDisable();
}

};
display.gameBoardDisplay();






console.log(gameBoard.gameBoardArr);










