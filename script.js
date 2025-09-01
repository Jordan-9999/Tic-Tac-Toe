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



const gameTurnsFunction = (function (){
const gameTurns = {
 start : "game start",
 playerOneTurn : "player one's turn",
 playerTwoTurn : "player two's turn"
};
return gameTurns;
})();

 const turn = function(){
if(gameTurnsFunction.start == "game start"){
    const option1 = gameTurnsFunction.playerOneTurn;
    const option2 = gameTurnsFunction.playerTwoTurn;
    const chosenOption = Math.random() < 0.5 ? option1 : option2;
    result = chosenOption;
    gameTurnsFunction.start = result;
    //console.log("random initial choice was made");
  }
 
else{
  if(result == gameTurnsFunction.playerOneTurn){
    result = gameTurnsFunction.playerTwoTurn;
  }
  else{result = gameTurnsFunction.playerOneTurn};};

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
    console.log(playerOne.playerOneArray, playerTwo.playerTwoArray, winningCombinations[i]);
    if (winningCombinations[i].every(item => playerOne.playerOneArray.includes(item)) === true){
      result = "player one wins";
    }
    else if(winningCombinations[i].every(item => playerTwo.playerTwoArray.includes(item)) === true){
      result = "player two wins";
    }
  };
  return result;
};

const gameOver = function(){
  
  if (checkForCombinations() == "player one wins"){
    alert("player one wins!")
  }
  else if(checkForCombinations() == "player two wins"){
    alert("player two wins")
  }
};

 

 const playerMark = function(playerChoice){
    const index = gameBoard.gameBoardArr.indexOf(playerChoice);
    let splicedNum = gameBoard.gameBoardArr.splice(index, 1);

     let turnResult = turn();
   if(turnResult == "player one's turn"){
    playerOne.playerOneArray.push(...splicedNum);
    playerOne.playerOneArray.sort();
    console.log(playerOne.playerOneArray, "player one");
   }
   else{
    playerTwo.playerTwoArray.push(...splicedNum);
    playerTwo.playerTwoArray.sort();
    console.log(playerTwo.playerTwoArray, "player two");
   }

    
checkForCombinations();
gameOver();

 };







playerMark(3);
playerMark(6);
playerMark(1);
playerMark(4);
playerMark(2);
console.log(gameBoard);










