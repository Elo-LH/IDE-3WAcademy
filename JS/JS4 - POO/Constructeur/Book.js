import Item from './Item.js';

class Book extends Item {
    constructor() {
        super();
    }
    set genre(genre) {
        this._genre = genre;
    }
    
    get genre() {
        return this._genre;
    }
}

export default Book;
