const gameBoard = (function (){
 const gameBoardArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
 return {gameBoardArr};
})();

const winningCombinations = 
[[1, 2, 3],
 [4, 5, 6],
 [7, 8, 9],
 [1, 4, 7],
 [2, 5, 8],
 [3, 6, 9],
 [1, 5, 9],
 [3, 5, 7]];

 const playerOne = (function (){
  const playerOneArray = [];
  return {playerOneArray};
 })();

 const playerTwo = (function (){
  const playerTwoArray = [];
  return {playerTwoArray};
 })();

 

 const playerMark = function(playerChoice){
    const index = gameBoard.gameBoardArr.indexOf(playerChoice);
    let splicedNum = gameBoard.gameBoardArr.splice(index, 1);
    playerOne.playerOneArray.push(...splicedNum);
    playerOne.playerOneArray.sort();
 };

playerMark(3);
playerMark(2);
playerMark(1);
console.log(gameBoard);
console.log(playerOne.playerOneArray);

/*const checkForCombinations = function(){
 winningCombinations.forEach(myFunction);
 function myFunction(arr){
//console.log(arr);
 };
};
checkForCombinations();*/