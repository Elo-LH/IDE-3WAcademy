class Library {
    constructor() {
        this._livres = [];
        this._genre = '';
    }
    set livres(data) {
        this._livres = data;
    }
    set genre(g) {
        this._genre = g;
    }
    ajouterLivre(livre) {
        // la fonction ajouterLivre() est une méthode car elle est dans une classe.
        this._livres.push(livre);
    }
    get livres() {
        return this._livres;
    }
    get genre() {
        return this._genre;
    }
}

export default Library;
