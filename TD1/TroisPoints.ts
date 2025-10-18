import { Point } from "./point";

/**
 * EXERCICE 1 - CLASSE TROISPOINTS
 * Représente trois points dans un plan cartésien
 */
export class TroisPoints {
    // Attributs privés pour les trois points
    private _premier: Point;   // Premier point
    private _deuxieme: Point;  // Deuxième point
    private _troisieme: Point; // Troisième point

    /**
     * QUESTION 6: Constructeur de la classe TroisPoints
     * @param premier - Le premier point
     * @param deuxieme - Le deuxième point
     * @param troisieme - Le troisième point
     */
    constructor(premier: Point, deuxieme: Point, troisieme: Point) {
        this._premier = premier;
        this._deuxieme = deuxieme;
        this._troisieme = troisieme;
    }

    /**
     * QUESTION 6: Getters et setters pour le premier point
     */
    get premier(): Point { 
        return this._premier; 
    }
    
    set premier(value: Point) { 
        this._premier = value; 
    }

    /**
     * QUESTION 6: Getters et setters pour le deuxième point
     */
    get deuxieme(): Point { 
        return this._deuxieme; 
    }
    
    set deuxieme(value: Point) { 
        this._deuxieme = value; 
    }

    /**
     * QUESTION 6: Getters et setters pour le troisième point
     */
    get troisieme(): Point { 
        return this._troisieme; 
    }
    
    set troisieme(value: Point) { 
        this._troisieme = value; 
    }

    /**
     * QUESTION 7: Teste si les trois points sont alignés
     * Trois points A, B et C sont alignés si:
     * AB = AC + BC OU AC = AB + BC OU BC = AC + AB
     * @returns true si les points sont alignés, false sinon
     */
    testerAlignement(): boolean {
        // Calcul des distances entre les points
        const AB = this._premier.calculerDistance(this._deuxieme);
        const AC = this._premier.calculerDistance(this._troisieme);
        const BC = this._deuxieme.calculerDistance(this._troisieme);

        // Utilisation d'une tolérance pour les comparaisons de nombres flottants
        const tolerance = 0.001;
        
        return Math.abs(AB - (AC + BC)) < tolerance || 
               Math.abs(AC - (AB + BC)) < tolerance || 
               Math.abs(BC - (AC + AB)) < tolerance;
    }

    /**
     * QUESTION 8: Teste si les trois points forment un triangle isocèle
     * Un triangle ABC est isocèle si: AB = AC OU AB = BC OU BC = AC
     * @returns true si le triangle est isocèle, false sinon
     */
    estIsocele(): boolean {
        // Calcul des distances entre les points
        const AB = this._premier.calculerDistance(this._deuxieme);
        const AC = this._premier.calculerDistance(this._troisieme);
        const BC = this._deuxieme.calculerDistance(this._troisieme);

        // Utilisation d'une tolérance pour les comparaisons de nombres flottants
        const tolerance = 0.001;
        
        return Math.abs(AB - AC) < tolerance || 
               Math.abs(AB - BC) < tolerance || 
               Math.abs(BC - AC) < tolerance;
    }

    /**
     * Méthode utilitaire pour afficher les trois points
     * @returns Une chaîne représentant les trois points
     */
    afficher(): string {
        return `(${this._premier.afficher()}, ${this._deuxieme.afficher()}, ${this._troisieme.afficher()})`;
    }
}