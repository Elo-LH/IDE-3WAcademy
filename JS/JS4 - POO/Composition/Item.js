class Item {
    constructor(title, date) {
        this.name = title;
        this.date = date;
        this.nbPages = 1; 
    }
    
    displayItem() {
        console.log(`${this.name} contient ${this.nbPages} et est sorti le ${this.date}`);
    }
}

export default Item;
