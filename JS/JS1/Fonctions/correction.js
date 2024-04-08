/* Exercice 1
    - Ecrire la fonction maxValeur qui prend trois paramètres x, y et z
    - Et retourne la plus grande valeur entre les 3.
*/
function maxValeur(x, y, z) {
   return Math.max(x, y, z);
}
const max = maxValeur(5, 8, 9);
console.log(max);// Doit afficher 9

/* Exercice 2
    - Ecrire la fonction avgValeur qui prend trois paramètres x, y et z
    - Et retourne la valeur moyenne des 3
*/
function avgValeur(x, y, z) {
   return x + y + z / 3;
}
const avg = avgValeur(2, 4, 6);
console.log(avg);// Doit afficher 4

/* Exercice 3
    - Ecrire la fonction sayHello qui prend deux paramètres prenom et nom
    - Et retourne la concaténation de la chaine 'Hello ' suivie du prenom, un espace et enfin le nom
*/
function sayHello(prenom, nom) {
   return 'Hello ' + prenom + ' ' + nom;
   // Methode 2
   // return `Hello ${prenom} ${nom}`;
}
const message = sayHello('Fabrice', 'Montagne');
console.log(message);// Doit afficher 'Hello Fabrice Montagne'

/*
  Exercice 4
   - Ecrire la fonction division qui prend deux paramètres : denominateur et numerateur
   - Et retourne le resultat de la division
*/
function division(denominateur, numerateur) {
   return numerateur / denominateur;
}

console.log(division(12, 5));

/* Exercice 5
   - Ecrire la fonction divisionEucledienne qui prend deux paramètres : denominateur et numerateur
   - Et retourne un tableau avec deux valeurs : [resultat, reste]
   ASTUCE : reste = numerateur % denominateur
*/
function divisionEucledienne(denominateur, numerateur) {
   let resultat = numerateur / denominateur;
   let reste = numerateur % denominateur;

   return [resultat, reste];
}

console.log(divisionEucledienne(12, 5));

/* Exercice 6
   Partie 1
   - Ecrire la function miaou qui prend un paramètre nombreMiaou
   - Et retourne une chaine contenant autant de miaou que demandé par le param nombreMiaou

   Partie 2
   - Utiliser la fonction précédente pour afficher des miaous comme suit
      miaou
      miaou miaou
      miaou miaou miaou
      miaou miaou miaou miaou
      ...
      miaou ... x 50
   - Et ce jusqu'à 50 miaou
*/
function miaou(nombreMiaou) {
   let miaous = '';
   for (let i = 0; i < nombreMiaou; i++) {
      miaous += 'miaou ';
   }
   return miaous;
}

for (let i = 1; i <= 50; i++) {
   console.log(miaou(i));
}

/* Exercice 7
   Partie 1
   - Ecrire une fonction de conversion eurToNeveflouz qui prend en paramètre euros
   - Et retourne sa valeur en neveflouz, calculé comme suit : 1 NEZ = 150 EUR

   Partie 2
   - Convertir le tableau suivant (contenant des montants en euros) en neveflouz
   en utilisant la fonction précédente
   - Afficher le résultat dans la console
*/
let montantsEuros = [150, 45.23, 890.45, 12000000, 45, 1, 1.5, 5, 10, 20, 50, 100, 500, 5000, 999, 1000];
let montantsNez = [];

function eurToNeveflouz(euros) {
   return euros / 150;
}

for (let i = 0; i < montantsEuros.length; i++) {
   const montantEur = montantsEuros[i];
   const montantNez = eurToNeveflouz(montantEur);
   montantsNez.push(montantNez);
}

console.log(montantsNez);

/* Exercice 8
   - Ecrire une fonction zip qui prend deux paramètres : tableau1 et tableau2
   - Et retourne la concaténation des deux tableaux

   Résultat attendu :
   si tableau1 = ['toto', 'titi', 'tata', 'tutu']
   et tableau2 = ['bobo', 'bibi', 'baba', 'bubu']
   alors résultat = [['toto', 'bobo'], ['titi', 'bibi'], ...]
*/

function zip(tableau1, tableau2) {
   let resultat = [];

   for (let i = 0; i < tableau1.length; i++) {
      const element1 = tableau1[i];
      const element2 = tableau2[i];
      resultat.push([element1, element2]);
   }

   return resultat;
}

let tableau1 = ['toto', 'titi', 'tata', 'tutu'];
let tableau2 = ['bobo', 'bibi', 'baba', 'bubu'];

console.log(zip(tableau1, tableau2));

/* Exercice 9
   - Ecrire une fonction add qui prend deux paramètres : tableau et offset
   - Et retourne un tableau où chaque valeur est ajouté de offset

   Résultat attendu :
   si tableau = [1, 10, 23, 56, 89]
   et offset = 15
   alors résultat = [16, 25, 38, 71, 104]
*/
function add(tableau, offset) {
   let resultat = [];

   for (let i = 0; i < tableau.length; i++) {
      const element = tableau[i];
      resultat.push(element + offset);
   }

   return resultat;
   
   // Méthode 2
   /*
   let resultat2 = tableau.map(function (element) {
      return element + offset;
   });
   */
}


console.log(add(
   [1, 10, 23, 56, 89],
   15
));

/* Exercice 10
   - Ecrire une fonction extract qui prend deux paramètres : collection et key
   - Et retourne un tableau contenant la valeur correspondant à la propriété de chaque objet de la collection

   Résultat attendu :
   si collection = [{
      productName: "Papier", stock: 10, prix: 8
   }, {
      productName: "Stylo", stock: 10, prix: 6
   }, {
      productName: "Agrafeuse", stock: 10, prix: 12
   }]
   et key = "productName"
   alors résultat = ["Papier", "Stylo", "Agrafeuse" ...]
*/
function extract(collection, key) {
   let resultat = [];

   for (let i = 0; i < collection.length; i++) {
      const element = collection[i];
      resultat.push(element[key]);
   }

   return resultat;
}

let products = [{
   productName: "Papier", stock: 10, prix: 8
}, {
   productName: "Stylo", stock: 10, prix: 6
}, {
   productName: "Agrafeuse", stock: 10, prix: 12
}]

console.log(extract(
   products,
   'productName'
));

/* Exercice 11
   - Ecrire une fonction clean qui prend deux paramètres : collection et keysList
   - Et retourne la collection avec seulement les propriétés demandés par keysList

   Résultat attendu :
   si collection = [{
      productName: "Papier", stock: 10, prix: 8, toto: "fdmlgjdfg"
   }, {
      productName: "Stylo", stock: 10, prix: 6, titi: "sdofgj", cheval: "blanc"
   }, {
      productName: "Agrafeuse", stock: 10, prix: 12
   }]
   et keysList = ["productName", "prix", "stock"]
   alors résultat = [{
      productName: "Papier", stock: 10, prix: 8
   }, {
      productName: "Stylo", stock: 10, prix: 6
   }, {
      productName: "Agrafeuse", stock: 10, prix: 12
   }]
*/
function clean(collection, keysList) {
   let resultat = [];

   for (let i = 0; i < collection.length; i++) {
      const element = collection[i];
      const newElement = {};
      
      for (let j = 0; j < keysList.length; j++) {
         const keyToKeep = keysList[j];
         newElement[keyToKeep] = element[keyToKeep];
      }
      
      resultat.push(newElement);
   }

   return resultat;
}

// Méthode 2
function clean2(collection, keysList) {
   let resultat = collection.map(function (element) {
      let newElement = {};

      keysList.forEach(function(key) {
         newElement[key] = element[key];
      });

      return newElement;
   });

   return resultat;
}

let rawProducts = [{
   productName: "Papier", stock: 10, prix: 8, toto: "fdmlgjdfg"
}, {
   productName: "Stylo", stock: 10, prix: 6, titi: "sdofgj", cheval: "blanc"
}, {
   productName: "Agrafeuse", stock: 10, prix: 12
}];

console.log(clean2(
   rawProducts,
   ['productName', 'stock', 'prix']
));
