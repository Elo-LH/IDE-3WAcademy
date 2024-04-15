import Library from './Library.js';

const myLibrary = new Library();

myLibrary.ajouterLivre('Le petit prince');
myLibrary.ajouterLivre('1984');
myLibrary.ajouterLivre('Le temps des tempêtes');

// Appelle le getter get livres()
console.log(myLibrary.livres);

// Appelle le setter set livres(data)
myLibrary.livres = ['Harry Potter', 'Tintin'];

// Appelle le getter get livres()
console.log(myLibrary.livres);

// Crash car ne peut pas accéder à la propriété livres
myLibrary.livres.push('Toto')
