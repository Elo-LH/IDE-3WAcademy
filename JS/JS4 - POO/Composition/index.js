import Book from './Book.js';
import Author from './Author.js';

const author = new Author('Maxou', 'Thebest', 'Française');

const myBook = new Book(
  'Seigneur des anneaux',
  '2010-01-01',
  'Fantasy',
  author
);

console.log(myBook);

console.log(myBook.author.firstName);
