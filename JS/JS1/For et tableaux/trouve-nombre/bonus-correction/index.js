
/**************************************************************/
/*                        Main Program                        */
/**************************************************************/
/**************************************************************/
/*                        Main Program                        */
/**************************************************************/
const nbreATrouver = Math.ceil(Math.random() * 100) + 9;
let tryingnbr = 10;
let i = 0;

// Boucle pour les 10 essais
for (let i = 0; i < tryingnbr; i++) {
  let userChoice = Number(
    prompt(`Essai ${i} :Devine un nombre entre 10 et 100`)
  );
  if (isNaN(userChoice)) {
    continue;
  } // Si c'est un nombre et ce nombre est égale à nbreAtrouver 
  else if (Number(userChoice) === nbreATrouver) {
    alert(`Bravo ! Vous avez trouvé en ${i} essai(s).`);
    // Sortir de la boucle
    break;
  }
  else {
    let essaisRestants = tryingnbr - i;
    alert(`Perdu ! Il vous reste ${essaisRestants} essai(s).`);
    // Indiquer si le nombre à trouver est plus grand ou plus petit
    if (Number(userChoice) < nbreATrouver) {
      alert("Plus grand");
    }
    else {
      alert("Plus petit");
    }
  }
}
// Si l'utilisateur n'a pas trouvé après 10 essais
if (i > tryingnbr) {
  console.log(`Dommage ! vous avez perdu ! Le nombre à trouver était ${nbreATrouver}.`);
}
