/**************************************************************/
/*                            Data                            */
/**************************************************************/

let liste_mots = ['sapin', 'bougie', 'sucre', 'soleil', 'alphabet', 'trousse'];

/**************************************************************/
/*                        Main Program                        */
/**************************************************************/

// Parcourir la liste de mots
let compteur = 0;
for(let i = 0; i < liste_mots.length; i++) {
  let mot = liste_mots[i];

  // Vérifie si la première lettre est égale à s
  if(mot[0] === 's') {
    // Si oui, incrémente le compteur
    compteur++;
    // et affiche le mot
    console.log(mot);
  }
}

// Affiche le nombre de mots commençant par s
console.log(`${compteur} lettres commençant par s`);
// console.log(compteur + ' lettres commençant par s');

/**************************************************************/
/*                      (Seconde méthode)                     */
/**************************************************************/

/*
let liste_mots = ['sapin', 'bougie', 'sucre', 'soleil', 'alphabet', 'trousse'];
let compteur = 0;

liste_mots.forEach((mot) => {
  if(mot[0] === 's') {
    compteur++;
  }
});

console.log(`${compteur} lettres commençant par s`);
*/
