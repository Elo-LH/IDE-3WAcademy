/* Exercice 1
   - Soit l'adresse suivante : 12 rue des lilas 44100 Nantes
   - Ecrire l'adresse dans un objet en la découpant dans les propriétés suivantes :
   numero, rue, codePostal, ville
*/
const adresse = {
  numero: 12,
  rue: 'rue des lilas',
  codePostal: 44100,
  ville: 'Nantes'
};

/* Exercice 2
   - Parcourir l'objet précédent et afficher chaque propriété et sa valeur, sous la forme suivante
   Résultat attendu dans la console :
   "numero: 12"
   "rue: rue des lilas"
   ...
*/
for (const key in adresse) {
  console.log(`${key}: ${adresse[key]}`);
}

/* Exercice 3
   - Soit la personne suivante : Marcel Dupont, né le 23/05/2001, célibataire, 2 enfants
   - Ecrire la personne dans un objet avec les propriétés suivantes :
   nom, prenom, dateNaissance, situation, nbreEnfants
*/
const personne = {
  nom: 'Dupont',
  prenom: 'Marcel',
  dateNaissance: '23/05/2001',
  situation: 'célibataire',
  nbreEnfants: 2
};

/* Exercice 4
   - Afficher l'objet précédent dans la console, de la forme suivante :
   "Marcel Dupont, né le 23/05/2001, célibataire, 2 enfants"
*/
console.log(`${personne.prenom} ${personne.nom}, né le ${personne.dateNaissance}, ${personne.situation}, ${personne.nbreEnfants} enfants`);

/* Exercice 5
   - Calculer le prix total = prix * quantite
   - Afficher le résultat dans la console
*/
const produitCommande = {
  prix: 12,
  quantite: 52
};

const total = produitCommande.prix * produitCommande.quantite;

console.log(total);

/* Exercice 6
   - Sans réécrire le code, modifier l'objet produitCommande comme demandé ci-dessous :
   le prix est 56 et la quantite 89
   - Afficher les nouvelles valeurs du prix et de la quantité dans la console
*/

produitCommande.prix = 56;
produitCommande.quantite = 89;

console.log(`prix: ${produitCommande.prix}, quantité: ${produitCommande.quantite}`);

/* Exercice 7
   - Effectuer la somme des prix des 2 produitCommande ci-dessus
   - Afficher le résultat dans la console
*/
const produitCommande1 = {
  prix: 45,
  quantite: 102
};
const produitCommande2 = {
  prix: 78,
  quantite: 123
};

const sommePrix = produitCommande1.prix + produitCommande2.prix;

console.log(sommePrix);

/* Exercice 8
   - Appliquer la remise sur la commande : Soustraire la remise au prix dans la commande suivante
   - Afficher le résultat dans la console
*/
const remise = 10;
const commande = {
  prix: 120
};

commande.prix = commande.prix - remise;

console.log(commande.prix)

/* Exercice 9
   - Réorganiser le code suivant en mettant les variables dans des objets
   - Bien choisir le nom des objets pour rendre le code compréhensible
*/
const voiture = {
  nbRoues: 4,
  typeVehicule: '',
  modele: 'Jaguar',
  couleur: 'rouge'
};
const personne2 = {
  nom: 'Roger',
  prenom: 'Georges',
  age: 25,
  hobbies: ['football', 'amis', 'boite de nuit'],
  profession: 'menuisier'
};

if (voiture.nbRoues === 4) {
  voiture.typeVehicule = 'voiture';
} else if (voiture.nbRoues === 2) {
  voiture.typeVehicule = 'cycle';
} else if (voiture.nbRoues % 2 === 0) {
  voiture.typeVehicule = 'camion';
} else if (voiture.nbRoues === 1) {
  voiture.typeVehicule = 'monocycle';
} else if (voiture.nbRoues === 3) {
  voiture.typeVehicule = 'tricycle';
} else {
  voiture.typeVehicule = 'inconnu';
}

console.log(`Je m'appelle ${personne2.prenom} ${personne2.nom}, ${personne2.profession}, j'ai ${personne2.age} ans.`);
console.log(`J'ai un véhicule de type ${voiture.typeVehicule}, modèle ${voiture.modele} de couleur ${voiture.couleur}`);
console.log(`Mes hobbies sont ${personne2.hobbies.join(', ')}`);

/* Exercice 10
   - Pour chaque élément de la collection, afficher dans la console le modele et le stock.
   INFO : Une collection est un tableau d'objets
*/

const stockVoitures = [{
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

for (let i = 0; i < stockVoitures.length; i++) {
  const voiture = stockVoitures[i];
  console.log(`modele: ${voiture.modele}, stock: ${voiture.stock}`)
}
