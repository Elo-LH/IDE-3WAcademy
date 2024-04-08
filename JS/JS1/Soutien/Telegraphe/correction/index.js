/**************************************************************/
/*                            Data                            */
/**************************************************************/

let alphabet = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
];
let codeMorse = [
  ".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..",
  ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.",
  "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--..", ".----",
  "..---", "...--", "....-", ".....", "-....", "--...", "---..", "----.",
  "-----"
];

/**************************************************************/
/*                        Main Program                        */
/**************************************************************/

// Demander à l'utilisateur de saisir un texte à télégraphier
let userInput = prompt("Saisir le texte à télégraphier");

// Convertir le texte en code morse
let userInputLength = userInput.length;
let outputCodeMorse = [];

for (let i = 0; i < userInputLength; i++) {
  let userInputLettre = userInput[i];
  
  let j;

  for (j = 0; j < alphabet.length; j++) {
    let lettre = alphabet[j];

    if (lettre === userInputLettre) {
      outputCodeMorse.push(
        codeMorse[j]
      );
    }
  }
  
  // Si le caractère saisi n'est pas dans le code morse
  if (j === alphabet.length) {
    outputCodeMorse.push(userInputLettre)
  }
}

// Afficher le code morse dans la console
console.log(outputCodeMorse.join(''));
