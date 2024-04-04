/**************************************************************/
/*                          Consigne                          */
/**************************************************************/
/*

Jeu : devine le nombre (entre 10 et 110)

- Un nombre entre 10 et 110 est choisi aléatoirement

- Tant que le joueur n'a pas trouvé le nombre
  - Demander au joueur de saisir un nombre :
    - S'il est plus petit que le nbre à trouver
    afficher "Plus grand"
    - S'il est plus grand que le nbre à trouver
    afficher "Plus petit"
    - S'il a trouvé, afficher "Gagné" et arrêter le jeu

IMPORTANT : Gérer le cas où l'utilisateur saisi autre chose qu'un nombre

*/

/**************************************************************/
/*                        Main Program                        */
/**************************************************************/

// Génération d'un nombre aléatoire entre 10 et 110
let nbreATrouver = Math.ceil(Math.random() * 100) + 9;

// Le code sera implémenté ici...
