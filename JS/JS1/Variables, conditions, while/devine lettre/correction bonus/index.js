/**************************************************************/
/*                            Data                            */
/**************************************************************/

let alphabet = "abcdefghijklmnopqrstuvwxyz";
let utilisateur = "";

/**************************************************************/
/*                        Main Program                        */
/**************************************************************/

// Tant que l'utilisateur veut continuer de jouer
while(utilisateur !== "non") {

  // Sélectionne une lettre au hasard dans l'alphabet
  let lettreAtrouver = alphabet.charAt(
    Math.ceil(Math.random() * 26) - 1
  );

  // Tant que l'utilisateur n'a pas trouvé la lettre
  while (utilisateur !== lettreAtrouver) {
    // On demande à l'utilisateur de deviner la lettre
    utilisateur = prompt("Devine la lettre !");
  }

  // On affiche un message de bravo si l'utilisateur a trouvé la lettre
  alert("Bravo, tu as gagné !");

  // On demande à l'utilisateur si il veut continuer de jouer
  utilisateur = prompt("Voulez-vous continuer de jouer ? (oui/non)");
}
