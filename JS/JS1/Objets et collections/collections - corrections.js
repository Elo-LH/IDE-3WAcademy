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
for (let index = 0; index < stockVoitures.length; index++) {
  const voiture = stockVoitures[index];
  console.log(voiture.couleur);
}

// Méthode 2
for(const index in stockVoitures) {
  const voiture = stockVoitures[index];
  console.log(voiture.couleur);
}

/*
  Exercice 2 : Afficher les modèles de voitures
    Opel Astra
    Jaguar
    Peugeot 205
    Ferrari
*/
for (let index = 0; index < stockVoitures.length; index++) {
  const voiture = stockVoitures[index];
  console.log(voiture.modele);
}

/*
  Exercice 3 : Afficher modèle, couleur et prix de chaque voiture
    Opel Astra, noir, 26000
    Jaguar, noir, 1200000
    Peugeot 205, bleu, 2500
    Ferrari, rouge, 250000
*/
for (let index = 0; index < stockVoitures.length; index++) {
  const voiture = stockVoitures[index];
  console.log(`${voiture.modele}, ${voiture.couleur}, ${voiture.prixUnitaire}`);
}

/*
  Exercice 4 : Calculer et afficher la valeur du stock de chaque modèle
    Opel Astra, 52000
    Jaguar, 144000000
    Peugeot 205, 11250000
    Ferrari, 14000000
*/
for (let index = 0; index < stockVoitures.length; index++) {
  const voiture = stockVoitures[index];
  const valeurStock = voiture.prixUnitaire * voiture.stock;
  console.log(`${voiture.modele}, ${valeurStock}`);
}
