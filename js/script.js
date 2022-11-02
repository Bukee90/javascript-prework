//Player
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wybrał: ' + playerInput);


if(playerInput == '1'){
    playerMove = 'kamień';
} else if (playerInput == '2') {
    playerMove = 'papier'
} else {
    playerMove = 'nożyce'
}

printMessage('Twój ruch to: ' + playerMove);


//PC
let randomNumber = Math.floor(Math.random() * 3 + 1);

if(randomNumber == 1){
    pcMove = 'kamień';
} else if (randomNumber == 2) {
    pcMove = 'papier'
} else {
    pcMove = 'nożyce'
}

console.log('Computer wybrał ' + randomNumber);
printMessage('Pc ruch to: ' + pcMove);

//Result
if (playerInput == randomNumber) {
    printMessage ('Remis')
} else if (playerInput == '1' && randomNumber == '2') {
    printMessage ('Przegrałeś')
} else if (playerInput == '1' && randomNumber == '3') {
    printMessage ('Wygrałeś')
} else if (playerInput == '2' && randomNumber == '1') {
    printMessage ('Wygrałeś')
} else if (playerInput == '2' && randomNumber == '3') {
    printMessage ('Przegrałeś')
} else if (playerInput == '3' && randomNumber == '1') {
    printMessage ('Przegrałeś')
} else if (playerInput == '3' && randomNumber == '2') {
    printMessage ('Wygrałeś')
}
