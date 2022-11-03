// Main function

function getMoveName(argMoveId){
  if(argMoveId == '1'){
    return 'kamień';
  } else if(argMoveId == '2'){
      return 'papier';
  } else if(argMoveId == '3'){
      return 'nożyce';
  } else { 
      printMessage('Nie znam ruchu o id ' + argMoveId + '.');
      return 'nieznany ruch';
  }
}

//PC
let randomNumber = Math.floor(Math.random() * 3 + 1);
let argComputerMove = getMoveName(randomNumber);

console.log('Komputer wybrał ' + randomNumber);

// if(randomNumber == 1){
//     pcMove = 'kamień';
// } else if (randomNumber == 2) {
//     pcMove = 'papier'
// } else {
//     pcMove = 'nożyce'
// }

printMessage('Ruch komputera to: ' + argComputerMove);

//Player
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
let argPlayerMove = getMoveName(playerInput);

console.log('Gracz wybrał: ' + playerInput);

// if(playerInput == '1'){
//   argPlayerMove = 'kamień';
// } else if (playerInput == '2') {
//   argPlayerMove = 'papier'
// } else if (playerInput == '3') {
//     playerMove = 'nożyce'
// } else {
//   argPlayerMove = 'Zła liczba'
// }

printMessage('Twój ruch to: ' + argPlayerMove);

//Result
// if (playerInput == randomNumber) {
//     printMessage ('Remis')
// } else if (playerInput == '1' && randomNumber == '2') {
//     printMessage ('Przegrałeś')
// } else if (playerInput == '1' && randomNumber == '3') {
//     printMessage ('Wygrałeś')
// } else if (playerInput == '2' && randomNumber == '1') {
//     printMessage ('Wygrałeś')
// } else if (playerInput == '2' && randomNumber == '3') {
//     printMessage ('Przegrałeś')
// } else if (playerInput == '3' && randomNumber == '1') {
//     printMessage ('Przegrałeś')
// } else if (playerInput == '3' && randomNumber == '2') {
//     printMessage ('Wygrałeś')
// } else if (playerInput > '3') {
//     printMessage ('Liczba poza zakresem wyboru')
// }

// console.log('moves:', argComputerMove, argPlayerMove);

function displayResult(argComputerMove, argPlayerMove){
  if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
      printMessage('Wygrywasz!');
  } else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
      printMessage('Wygrywasz!');  
  } else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
      printMessage('Wygrywasz!');  
  } else if(argComputerMove == 'papier' && argPlayerMove == 'kamień'){
      printMessage('Przegrywasz');  
  } else if(argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
      printMessage('Przegrywasz');  
  } else if(argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
      printMessage('Przegrywasz');  
  } else if(argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
      printMessage('Remis');  
  } else if(argComputerMove == 'papier' && argPlayerMove == 'papier'){
      printMessage('Remis');  
  } else if(argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
      printMessage('Remis');  
  } else {
      printMessage('Licza poza zakresem');
  }
}

console.log('moves:', argComputerMove, argPlayerMove);

displayResult(argComputerMove, argPlayerMove)