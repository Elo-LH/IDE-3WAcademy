class Library {
    constructor() {
        this.livres = [];
    }
    ajouterLivre(livre) {
        // la fonction ajouterLivre() est une méthode car elle est dans une classe.
        this.livres.push(livre);
    }
    getLivres() {
        return this.livres;
    }
}

export default Library;
