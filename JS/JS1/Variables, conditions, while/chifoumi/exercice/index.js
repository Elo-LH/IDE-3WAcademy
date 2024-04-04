/**************************************************************/
/*                          Consigne                          */
/**************************************************************/
/*

Implémenter le code du célèbre jeu de chifoumi.

Règles :
- Feuille gagne contre Pierre : La feuille enveloppe la pierre
- Pierre gagne contre Ciseaux : La pierre détruit les ciseaux
- Ciseaux gagne contre Feuille : Les ciseaux coupent la feuille

Algorithme à implémenter :
- Choix aléatoire de l'ordinateur entre : feuille / pierre / ciseaux
- Demander à l'utilisateur son choix entre : feuille / pierre / ciseaux
- Déterminer le vainqueur (égalité si l'ordinateur et le joueur ont choisi la même chose)
- Afficher le vainqueur

NOTE pour afficher, utiliser document.body.innerText = ''

*/
/**************************************************************/
/*                         Variables                          */
/**************************************************************/

let randomChoice = Math.ceil(Math.random() * 3); // Retourne un nombre aléatoire entre 1 et 3

// Les variables à mettre ici...

/**************************************************************/
/*                        Main Program                        */
/**************************************************************/

// Le code du programme à écrire ici...
