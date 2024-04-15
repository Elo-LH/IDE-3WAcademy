import Book from './Book.js';
import Roman from './Roman.js';

const seigneurDesAnneaux = new Book();

seigneurDesAnneaux.name = "Le seigneur des anneaux";
seigneurDesAnneaux.date = '2010-01-01';
seigneurDesAnneaux.nbPages = 700;

seigneurDesAnneaux.displayItem();

console.log(seigneurDesAnneaux);

console.log(new Roman());
