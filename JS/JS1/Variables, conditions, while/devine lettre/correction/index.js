/**************************************************************/
/*                            Data                            */
/**************************************************************/

// Sélectionne une lettre au hasard dans l'alphabet
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let lettreAtrouver = alphabet.charAt(
  Math.ceil(Math.random() * 26) - 1
);

let utilisateur = "";

/**************************************************************/
/*                        Main Program                        */
/**************************************************************/

// Tant que l'utilisateur n'a pas trouvé la lettre
while (utilisateur !== lettreAtrouver) {
  // On demande à l'utilisateur de deviner la lettre
  utilisateur = prompt("Devine la lettre !");
}

// On affiche un message de bravo si l'utilisateur a trouvé la lettre
alert("Bravo, tu as gagné !");
