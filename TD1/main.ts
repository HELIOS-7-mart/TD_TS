import { Point } from "./point";
import { TroisPoints } from "./TroisPoints";

/**
 * EXERCICE 1 - QUESTION 9: Classe de test pour toutes les méthodes implémentées
 * Cette classe contient des méthodes de test pour valider le bon fonctionnement
 * des classes Point et TroisPoints
 */
export class TestExo {
    
    /**
     * Méthode d'initialisation des tests
     */
    static numtest(): void {
        console.log("=== DÉBUT DES TESTS - EXERCICE 1 ===");
    }

    /**
     * Teste toutes les méthodes de la classe Point
     * - Constructeur
     * - Getters et setters
     * - calculerDistance
     * - distance (statique)
     * - calculerMilieu
     */
    static testerClassPoint(): void {
        console.log("\n--- TEST DE LA CLASSE POINT ---");
        
        // Test du constructeur et des getters
        const pointA = new Point(1, 2);
        const pointB = new Point(4, 6);
        console.log("Point A:", pointA.afficher());
        console.log("Point B:", pointB.afficher());
        
        // Test des setters
        pointA.abs = 3;
        pointA.ord = 5;
        console.log("Point A après modification:", pointA.afficher());
        
        // Test de la méthode calculerDistance
        const distanceAB = pointA.calculerDistance(pointB);
        console.log("Distance entre A et B:", distanceAB.toFixed(2));
        
        // Test de la méthode statique distance
        const distanceStatique = Point.distance(1, 2, 4, 6);
        console.log("Distance statique entre (1,2) et (4,6):", distanceStatique.toFixed(2));
        
        // Test de la méthode calculerMilieu
        const milieu = pointA.calculerMilieu(pointB);
        console.log("Milieu du segment A-B:", milieu.afficher());
    }

    /**
     * Teste la méthode testerAlignement de la classe TroisPoints
     * - Points alignés horizontalement
     * - Points alignés verticalement
     * - Points non alignés
     */
    static testAlignement(): void {
        console.log("\n--- TEST D'ALIGNEMENT ---");
        
        // Test avec des points alignés horizontalement
        const pointsAlignesHoriz = new TroisPoints(
            new Point(0, 0),
            new Point(3, 0),
            new Point(6, 0)
        );
        console.log("Points alignés horizontalement:", pointsAlignesHoriz.afficher());
        console.log("Alignés (horizontal):", pointsAlignesHoriz.testerAlignement());
        
        // Test avec des points alignés verticalement
        const pointsAlignesVert = new TroisPoints(
            new Point(0, 0),
            new Point(0, 3),
            new Point(0, 6)
        );
        console.log("Points alignés verticalement:", pointsAlignesVert.afficher());
        console.log("Alignés (vertical):", pointsAlignesVert.testerAlignement());
        
        // Test avec des points non alignés
        const pointsNonAlignes = new TroisPoints(
            new Point(0, 0),
            new Point(3, 0),
            new Point(2, 2)
        );
        console.log("Points non alignés:", pointsNonAlignes.afficher());
        console.log("Alignés (triangle):", pointsNonAlignes.testerAlignement());
    }

    /**
     * Teste la méthode estIsocele de la classe TroisPoints
     * - Triangle isocèle
     * - Triangle équilatéral
     * - Triangle quelconque
     */
    static testIsocele(): void {
        console.log("\n--- TEST DE TRIANGLE ISOCÈLE ---");
        
        // Test avec un triangle isocèle
        const triangleIsocele = new TroisPoints(
            new Point(0, 0),
            new Point(4, 0),
            new Point(2, 3)
        );
        console.log("Triangle isocèle:", triangleIsocele.afficher());
        console.log("Est isocèle:", triangleIsocele.estIsocele());
        
        // Test avec un triangle équilatéral
        const triangleEquilateral = new TroisPoints(
            new Point(0, 0),
            new Point(2, 0),
            new Point(1, Math.sqrt(3))
        );
        console.log("Triangle équilatéral:", triangleEquilateral.afficher());
        console.log("Est isocèle (équilatéral):", triangleEquilateral.estIsocele());
        
        // Test avec un triangle quelconque
        const triangleQuelconque = new TroisPoints(
            new Point(0, 0),
            new Point(3, 0),
            new Point(1, 4)
        );
        console.log("Triangle quelconque:", triangleQuelconque.afficher());
        console.log("Est isocèle:", triangleQuelconque.estIsocele());
    }
}

// QUESTION 9: Exécution de tous les tests
console.log("Lancement des tests...");
TestExo.numtest();
TestExo.testerClassPoint();
TestExo.testAlignement();
TestExo.testIsocele();
console.log("\n=== FIN DES TESTS - EXERCICE 1 ===");