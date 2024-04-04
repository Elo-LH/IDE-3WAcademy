/**************************************************************/
/*                         Variables                          */
/**************************************************************/

let randomChoice;
let computerChoice = '';
let userChoice = '';
let resultat = '';
let computerWins = 0;
let userWins = 0;
let i = 0;

/**************************************************************/
/*                        Main Program                        */
/**************************************************************/

while (computerWins < 3 && userWins < 3) {
  randomChoice = Math.ceil(Math.random() * 3);

  if (randomChoice === 1) {
    computerChoice = 'feuille';
  } else if (randomChoice === 2) {
    computerChoice = 'pierre';
  } else {
    computerChoice = 'ciseaux';
  }

  do {
    userChoice = prompt("Choisissez entre feuille, pierre et ciseaux");
  } while ((userChoice !== 'feuille') && (userChoice !== 'pierre') && (userChoice !== 'ciseaux'))

  if (computerChoice === userChoice) {
    resultat = 'égalité';
  } else if (computerChoice === 'feuille') {
    if (userChoice === 'pierre') {
      resultat = 'ordinateur gagne';
      computerWins++;
    } else {
      resultat = 'vous gagnez';
      userWins++;
    }
  } else if (computerChoice === 'pierre') {
    if (userChoice === 'ciseaux') {
      resultat = 'ordinateur gagne';
      computerWins++;
    } else {
      resultat = 'vous gagnez';
      userWins++;
    }
  } else {
    if (userChoice === 'feuille') {
      resultat = 'ordinateur gagne';
      computerWins++;
    } else {
      resultat = 'vous gagnez';
      userWins++;
    }
  }

  alert(
    "L'ordinateur a choisi " + 
    computerChoice +
    " et vous avez choisi " +
    userChoice +
    " donc " +
    resultat +
    ", score ordinateur - vous : " +
    computerWins +
    " - " +
    userWins
  );
}
