"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListePersonnes = void 0;
// Gère une collection de personnes et fournit des méthodes de recherche/édition
class ListePersonnes {
    // Initialise la liste avec un tableau optionnel de personnes
    constructor(personnes = []) {
        this.personnes = personnes;
    }
    // Getters/Setters pour lire/modifier le tableau entier
    getPersonnes() {
        return this.personnes;
    }
    setPersonnes(personnes) {
        this.personnes = personnes;
    }
    // QUESTION 3: retourne la première personne dont le nom correspond, sinon null
    findByNom(s) {
        for (const personne of this.personnes) {
            if (personne.getNom() === s) {
                return personne;
            }
        }
        return null;
    }
    // QUESTION 4: indique si au moins une personne possède une adresse avec le code postal donné
    findByCodePostal(cp) {
        for (const personne of this.personnes) {
            const hasCp = personne
                .getAdresses()
                .some((adresse) => adresse.getCodePostal() === cp);
            if (hasCp) {
                return true;
            }
        }
        return false;
    }
    // QUESTION 5: compte les personnes ayant au moins une adresse dans la ville fournie
    countPersonneVille(ville) {
        let count = 0;
        for (const personne of this.personnes) {
            const hasVille = personne
                .getAdresses()
                .some((adresse) => adresse.getVille() === ville);
            if (hasVille) {
                count += 1;
            }
        }
        return count;
    }
    // QUESTION 6: remplace le nom oldNom par newNom pour toutes les personnes correspondantes
    editPersonneNom(oldNom, newNom) {
        for (const personne of this.personnes) {
            if (personne.getNom() === oldNom) {
                personne.setNom(newNom);
            }
        }
    }
    // QUESTION 7: remplace la ville de toutes les adresses des personnes portant le nom fourni
    editPersonneVille(nom, newVille) {
        for (const personne of this.personnes) {
            if (personne.getNom() === nom) {
                const adresses = personne.getAdresses();
                for (const adresse of adresses) {
                    adresse.setVille(newVille);
                }
            }
        }
    }
}
exports.ListePersonnes = ListePersonnes;
