import Library from './Library.js'

const myLibrary = new Library()
const myLibrary2 = new Library()

myLibrary.ajouterLivre('Le petit prince')
myLibrary.ajouterLivre('1984')
myLibrary.ajouterLivre('Le temps des tempêtes')

myLibrary2.ajouterLivre('Test', '3')

console.log(myLibrary.getLivres())
console.log(myLibrary2.getLivres())
