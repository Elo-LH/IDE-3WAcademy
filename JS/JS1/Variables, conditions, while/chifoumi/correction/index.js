/**************************************************************/
/*                         Variables                          */
/**************************************************************/

let randomChoice = Math.ceil(Math.random() * 3);
let computerChoice = '';
let userChoice = '';
let resultat = '';

/**************************************************************/
/*                        Main Program                        */
/**************************************************************/

if (randomChoice === 1) {
  computerChoice = 'feuille';
} else if (randomChoice === 2) {
  computerChoice = 'pierre';
} else {
  computerChoice = 'ciseaux';
}

userChoice = prompt("Choisissez entre feuille, pierre et ciseaux");

if (computerChoice === userChoice) {
  resultat = 'égalité';
} else if (computerChoice === 'feuille') {
  if (userChoice === 'pierre') {
    resultat = 'ordinateur gagne';
  } else {
    resultat = 'vous gagnez';
  }
} else if (computerChoice === 'pierre') {
  if (userChoice === 'ciseaux') {
    resultat = 'ordinateur gagne';
  } else {
    resultat = 'vous gagnez';
  }
} else {
  if (userChoice === 'feuille') {
    resultat = 'ordinateur gagne';
  } else {
    resultat = 'vous gagnez';
  }
}

alert(
  "L'ordinateur a choisi " + 
  computerChoice +
  " et vous avez choisi " +
  userChoice +
  " donc " +
  resultat
);
