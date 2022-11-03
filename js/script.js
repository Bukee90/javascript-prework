function playGame(playerInput){ 
  clearMessages(); 
  function getMoveName(argMoveId){
      if(argMoveId == 1){
      return 'kamień';
      } else if(argMoveId == 2){
          return 'papier';
      } else if(argMoveId == 3){
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

  printMessage('Ruch komputera to: ' + argComputerMove);
  
  //Player
  // let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
  let argPlayerMove = getMoveName(playerInput);
  
  console.log('Gracz wybrał: ' + playerInput);

  printMessage('Twój ruch to: ' + argPlayerMove);
  
  //Result

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
}


document.getElementById('play-rock').addEventListener('click', function(){
  playGame (1);
});
document.getElementById('play-paper').addEventListener('click', function(){
  playGame (2);
});
document.getElementById('play-scissors').addEventListener('click', function(){
  playGame (3);
});