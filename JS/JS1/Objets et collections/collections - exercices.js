// Données utilisées par les exercices
let stockVoitures = [{
  modele: 'Opel Astra',
  couleur: 'noir',
  stock: 2,
  prixUnitaire: 26000
}, {
  modele: 'Jaguar',
  couleur: 'noir',
  stock: 120,
  prixUnitaire: 1200000
}, {
  modele: 'Peugeot 205',
  couleur: 'bleu',
  stock: 4500,
  prixUnitaire: 2500
}, {
  modele: 'Ferrari',
  couleur: 'rouge',
  stock: 56,
  prixUnitaire: 250000
}];
console.log(stockVoitures);

/*
  Exercice 1 : Afficher les couleurs des voitures
    noir
    noir
    bleu
    rouge
*/

stockVoitures.forEach(voiture => {
  console.log(voiture.couleur)
});

/*
  Exercice 2 : Afficher les modèles de voitures
    Opel Astra
    Jaguar
    Peugeot 205
    Ferrari
*/
stockVoitures.forEach(voiture => {
  console.log(voiture.modele)
});


/*
  Exercice 3 : Afficher modèle, couleur et prix de chaque voiture
    Opel Astra, noir, 26000
    Jaguar, noir, 1200000
    Peugeot 205, bleu, 2500
    Ferrari, rouge, 250000
*/

stockVoitures.forEach(voiture => {
  console.log(`${voiture.modele}, ${voiture.couleur}, ${voiture.prixUnitaire}`)
});

/*
  Exercice 4 : Calculer et afficher la valeur du stock de chaque modèle
    Opel Astra, 52000
    Jaguar, 144000000
    Peugeot 205, 11250000
    Ferrari, 14000000
*/

stockVoitures.forEach(voiture => {
  console.log(`${voiture.modele}, ${voiture.stock * voiture.prixUnitaire}`)
});

/*
  Exercice 5 : Calculer et afficher la valeur totale du stock, tout modèle confondu
    Valeur stock : 169302000
*/

let totalStock = stockVoitures.reduce((acc, voiture) =>
acc + voiture.stock * voiture.prixUnitaire
, 0);
console.log(totalStock)

/*
  Exercice 6 : Ajouter la voiture suivante à la collection
*/
let nouvelleVoiture = {
  modele: 'Mercedes Benz',
  couleur: 'gris',
  stock: 42,
  prixUnitaire: 56230
};

stockVoitures.push(nouvelleVoiture)
console.log(stockVoitures)

/*
  Exercice 7 : Modifier la couleur de la Peugeot 205, mettre vert à la place de bleu
*/

let peugeot = stockVoitures.find((voiture) => voiture.modele == "Peugeot 205")
peugeot.couleur = 'vert'
console.log(stockVoitures)

/*
  Exercice 8 : Ajouter la propriété suivante à chaque voiture de la collection
  - estUneVoiture: true
*/

stockVoitures.forEach(voiture => {
  voiture.estUneVoiture = true
});
console.log(stockVoitures)

/*
  Exercice 9 : Modifier le stock de Peugeot 205 pour le mettre à 1500
*/
peugeot.stock = 1500


/*
  Exercice 10 : Rechercher les voitures de couleur noir
*/

let voituresNoires = stockVoitures.filter((voiture) =>
voiture.couleur === 'noir'
)
console.log(voituresNoires)

/*
  Exercice 11 : Supprimer la Peugeot 205 (sachant que sa position dans le tableau peut changer)
*/
let idPeugeot = stockVoitures.findIndex((voiture) => voiture.modele == 'Peugeot 205')
stockVoitures.splice(idPeugeot, 1)
console.log(stockVoitures)
