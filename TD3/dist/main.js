"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Adresse_1 = require("./Adresse");
const Personne_1 = require("./Personne");
const ListePersonnes_1 = require("./ListePersonnes");
// Création d'adresses d'exemple
const adr1 = new Adresse_1.Adresse('1 rue des Lilas', 'Paris', '75001');
const adr2 = new Adresse_1.Adresse('2 avenue Victor Hugo', 'Lyon', '69000');
const adr3 = new Adresse_1.Adresse('3 boulevard de la République', 'Paris', '75011');
// Création de personnes avec leurs adresses
const p1 = new Personne_1.Personne('Alice', 'F', [adr1]);
const p2 = new Personne_1.Personne('Bob', 'M', [adr2, adr3]);
const p3 = new Personne_1.Personne('Alice', 'F', [adr2]);
// Instanciation de la liste qui regroupe nos personnes
const liste = new ListePersonnes_1.ListePersonnes([p1, p2, p3]);
// Démonstration des méthodes de recherche et de comptage
console.log('findByNom("Alice") =>', liste.findByNom('Alice'));
console.log('findByNom("Charlie") =>', liste.findByNom('Charlie'));
console.log('findByCodePostal("75001") =>', liste.findByCodePostal('75001'));
console.log('findByCodePostal("13001") =>', liste.findByCodePostal('13001'));
console.log('countPersonneVille("Paris") =>', liste.countPersonneVille('Paris'));
// Édition des noms puis vérification du résultat
liste.editPersonneNom('Alice', 'Alicia');
console.log('After editPersonneNom("Alice","Alicia"), findByNom("Alicia") =>', liste.findByNom('Alicia'));
// Édition des villes pour la personne nommée Bob puis comptage
liste.editPersonneVille('Bob', 'Marseille');
console.log('After editPersonneVille("Bob","Marseille"), countPersonneVille("Marseille") =>', liste.countPersonneVille('Marseille'));
