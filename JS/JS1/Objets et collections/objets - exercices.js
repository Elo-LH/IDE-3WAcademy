/* Exercice 1
   - Soit l'adresse suivante : 12 rue des lilas 44100 Nantes
   - Ecrire l'adresse dans un objet en la découpant dans les propriétés suivantes :
   numero, rue, codePostal, ville
*/
let adresse = {
  // Ton code ici
};

/* Exercice 2
   - Parcourir l'objet précédent et afficher chaque propriété et sa valeur, sous la forme suivante
   Résultat attendu dans la console :
   "numero : 12"
   "rue: rue des lilas"
   ...
*/

/* Exercice 3
   - Soit la personne suivante : Marcel Dupont, né le 23/05/2001, célibataire, 2 enfants
   - Ecrire la personne dans un objet avec les propriétés suivantes :
   nom, prenom, dateNaissance, situation, nbreEnfants
*/
let personne = {
  // Ton code ici
};

/* Exercice 4
   - Afficher l'objet précédent dans la console, de la forme suivante :
   "Marcel Dupont, né le 23/05/2001, célibataire, 2 enfants"
*/

/* Exercice 5
   - Calculer le prix total = prix * quantite
   - Afficher le résultat dans la console
*/
let produitCommande = {
  prix: 12,
  quantite: 52
};

/* Exercice 6
   - Sans réécrire le code, modifier l'objet produitCommande comme demandé ci-dessous :
   le prix est 56 et la quantite 89
   - Afficher le résultat dans la console
*/

/* Exercice 7
   - Effectuer la somme des prix des 2 produitCommande ci-dessus
   - Afficher le résultat dans la console
*/
let produitCommande1 = {
  prix: 45,
  quantite: 102
};
let produitCommande2 = {
  prix: 78,
  quantite: 123
};

/* Exercice 8
   - Appliquer la remise sur la commande : Soustraire la remise au prix dans la commande suivante
   - Afficher le résultat dans la console
*/
let remise = 10;
let commande = {
  prix: 120
};

/* Exercice 9
   - Réorganiser le code suivant en mettant les variables dans des objets
   - Bien choisir le nom des objets pour rendre le code compréhensible
*/
let nbRoues = 4;
let typeVehicule = '';
let couleur = 'rouge';
let nom = 'Roger';
let age = 25;
let modele = 'Jaguar';
let prenom = 'Georges';

if (nbRoues === 4) {
  typeVehicule = 'voiture';
} else if (nbRoues === 2) {
  typeVehicule = 'cycle';
} else if (nbRoues % 2 === 0) {
  typeVehicule = 'camion';
} else if (nbRoues === 1) {
  typeVehicule = 'monocycle';
} else if (nbRoues === 3) {
  typeVehicule = 'tricycle';
} else {
  typeVehicule = 'inconnu';
}

let hobbies = ['football', 'amis', 'boite de nuit'];
let profession = 'menuisier';

console.log(`Je m'appelle ${prenom} ${nom}, ${profession}, j'ai ${age} ans.`);
console.log(`J'ai un véhicule de type ${typeVehicule}, modèle ${modele} de couleur ${couleur}`);
console.log(`Mes hobbies sont ${hobbies.join(',')}`);

/* Exercice 10
   - Pour chaque élément de la collection, afficher dans la console le modele et le stock.
   INFO : Une collection est un tableau d'objets
*/

let stockVoitures = [{
    modele: 'Opel Astra',
    couleur: 'noir',
    stock: 2
  }, {
    modele: 'Jaguar',
    couleur: 'noir',
    stock: 120
  }, {
    modele: 'Peugeot 205',
    couleur: 'bleu',
    stock: 4500
  }, {
    modele: 'Ferrari',
    couleur: 'rouge',
    stock: 56
}];

