import Item from './Item.js';

class Book extends Item {
    constructor(title, date, genre, author) {
        super(title, date);
        this._genre = genre;
        this.author = author;
    }
    set genre(genre) {
        this._genre = genre;
    }
    
    get genre() {
        return this._genre;
    }
}

export default Book;
