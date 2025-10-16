"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Adresse = void 0;
// Représente une adresse postale avec rue, ville et code postal
class Adresse {
    // Initialise une nouvelle adresse
    constructor(rue, ville, codePostal) {
        this.rue = rue;
        this.ville = ville;
        this.codePostal = codePostal;
    }
    // Accesseurs/mutateurs pour chacun des attributs privés
    getRue() {
        return this.rue;
    }
    setRue(rue) {
        this.rue = rue;
    }
    getVille() {
        return this.ville;
    }
    setVille(ville) {
        this.ville = ville;
    }
    getCodePostal() {
        return this.codePostal;
    }
    setCodePostal(codePostal) {
        this.codePostal = codePostal;
    }
}
exports.Adresse = Adresse;
