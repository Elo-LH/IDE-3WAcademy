// Un tableau de chaines de caractères représentant des fruits
const toto = ['banane', 'pomme', 'poire'];

// Accéder au premier élément du tableau : index 0

// toto[0] est égal à "banane"
// toto[1] est égal à "pomme"
// toto[2] est égal à "poire"

// Nombre d'élements du tableau
console.log(toto.length);

// Afficher la valeur d'une case du tableau
console.log(toto[1]);// Affiche pomme

// Modifier la valeur dune case du tableau
toto[1] = 'cerise';

console.log(toto[1]);// Affiche cerise

// Certaines fonctions sont communes entre les tableaux et les chaines de caractères
let chaine = 'toto';
console.log(chaine.length);// Affiche la longueur de la chaine
console.log(chaine[0]);// Affiche le premier caractère de la chaine

// Interpolation
console.log(`Resultat : ${chaine[0]}, ${chaine[1]}, ${chaine[2]}`);// Affiche t, o, t
