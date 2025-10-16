"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personne = void 0;
// Représente une personne avec un nom, un sexe et une liste d'adresses
class Personne {
    // Crée une personne ; les adresses sont optionnelles (par défaut vide)
    constructor(nom, sexe, adresses = []) {
        this.nom = nom;
        this.sexe = sexe;
        this.adresses = adresses;
    }
    // Getters/Setters pour exposer les attributs privés en respectant l'encapsulation
    getNom() {
        return this.nom;
    }
    setNom(nom) {
        this.nom = nom;
    }
    getSexe() {
        return this.sexe;
    }
    setSexe(sexe) {
        this.sexe = sexe;
    }
    getAdresses() {
        return this.adresses;
    }
    setAdresses(adresses) {
        this.adresses = adresses;
    }
    // Ajoute une adresse supplémentaire à la personne
    addAdresse(adresse) {
        this.adresses.push(adresse);
    }
}
exports.Personne = Personne;
