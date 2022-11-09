{  
    const getMoveName = function (argMoveId) {
        if(argMoveId == 1) {
        return 'kamień';
        } else if(argMoveId == 2) {
            return 'papier';
        } else if(argMoveId == 3) {
            return 'nożyce';
        } else { 
            printMessage('Nie znam ruchu o id ' + argMoveId + '.');
            return 'nieznany ruch';
        }
    };  

    const displayResult = function (argComputerMove, argPlayerMove) {
        console.log('Ruchy:', argComputerMove, argPlayerMove);
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
    };
    
    const playGame = function (playerInput) {
        clearMessages(); 

        console.log('Gracz ' + playerInput);
        const playerMove = getMoveName(playerInput)
        printMessage ('Twój ruch to:' + playerMove)

        const randomNumber = Math.floor(Math.random() * 3 + 1);
        console.log("Wylosowany numer:" + randomNumber);
        const ComputerMove = getMoveName(randomNumber);
        printMessage ('Komputera ruch to:' + ComputerMove)
 
        displayResult (ComputerMove, playerMove)
    };

    document.getElementById('play-rock').addEventListener('click', function(){
    playGame (1);
    });
    document.getElementById('play-paper').addEventListener('click', function(){
    playGame (2);
    });
    document.getElementById('play-scissors').addEventListener('click', function(){
    playGame (3);
    });
}