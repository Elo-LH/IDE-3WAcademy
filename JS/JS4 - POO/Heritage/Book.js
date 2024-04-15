import Item from './Item.js';

class Book extends Item {
    constructor() {
        super();
        this.genre = 'Fantasy';
    }
}

export default Book;
