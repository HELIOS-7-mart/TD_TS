// Import des classes pour créer des objets et tester les méthodes
import { Stagiaire } from "./Stagiaire";
import { Formation } from "./Formation";

// Création de trois stagiaires avec des notes d'exemple
const s1 = new Stagiaire("Alice", [12, 15.5, 9]);
const s2 = new Stagiaire("Bob", [10, 11, 13]);
const s3 = new Stagiaire("Charlie", [14, 16, 12]);

// Création d'une formation avec les trois stagiaires
const formation = new Formation("TS Avancé", 5, [s1, s2, s3]);

// Affichage de la moyenne de la formation (moyenne des moyennes)
console.log("Moyenne formation:", formation.calculerMoyenneFormation());

// Affichage de l'indice du stagiaire ayant la meilleure moyenne
console.log("Index max:", formation.getIndexMax());

// Affiche le nom et la meilleure moyenne
formation.afficherNomMax();

// Affiche la note minimale du meilleur stagiaire
formation.afficherMinMax();

// Affiche la moyenne pour un stagiaire recherché par son nom
formation.trouverMoyenneParNom("Charlie");


