# COMPTE RENDU - TD TypeScript - Exercice 1

## Énoncé de l'exercice

**Exercice 1** : Implémentation de classes Point et TroisPoints avec leurs méthodes respectives.

---

## RÉPONSES AUX QUESTIONS

### QUESTION 1 : Définition de la classe Point avec constructeur

**Réponse :** La classe Point a été définie avec un constructeur prenant deux paramètres privés.

```typescript
export class Point {
    // Attributs privés pour les coordonnées du point
    private _abs: number; // Abscisse (coordonnée x)
    private _ord: number; // Ordonnée (coordonnée y)

    /**
     * QUESTION 1: Constructeur de la classe Point
     * @param abs - L'abscisse du point
     * @param ord - L'ordonnée du point
     */
    constructor(abs: number, ord: number) {
        this._abs = abs;
        this._ord = ord;
    }
}
```

**Explication :** Le constructeur initialise les attributs privés `_abs` et `_ord` avec les valeurs passées en paramètres.

---

### QUESTION 2 : Getters et setters pour les attributs

**Réponse :** Implémentation des getters et setters pour accéder et modifier les coordonnées.

```typescript
/**
 * QUESTION 2: Getters et setters pour l'abscisse
 */
get abs(): number { 
    return this._abs; 
}

set abs(value: number) { 
    this._abs = value; 
}

/**
 * QUESTION 2: Getters et setters pour l'ordonnée
 */
get ord(): number { 
    return this._ord; 
}

set ord(value: number) { 
    this._ord = value; 
}
```

**Explication :** Les getters permettent de lire les valeurs privées, les setters permettent de les modifier. Cela respecte le principe d'encapsulation.

---

### QUESTION 3 : Méthode calculerDistance

**Réponse :** Implémentation de la méthode qui calcule la distance entre deux points.

```typescript
/**
 * QUESTION 3: Calcule la distance entre le point courant et un autre point
 * Formule: √((x1 - x2)² + (y1 - y2)²)
 * @param p - Le point avec lequel calculer la distance
 * @returns La distance entre les deux points
 */
calculerDistance(p: Point): number {
    return Math.sqrt(Math.pow(this._abs - p._abs, 2) + Math.pow(this._ord - p._ord, 2));
}
```

**Explication :** La méthode utilise la formule mathématique de la distance euclidienne entre deux points. `Math.sqrt()` calcule la racine carrée et `Math.pow()` calcule les puissances.

---

### QUESTION 4 : Méthode statique distance

**Réponse :** Implémentation d'une méthode statique pour calculer la distance entre deux points.

```typescript
/**
 * QUESTION 4: Méthode statique pour calculer la distance entre deux points
 * @param x1 - Abscisse du premier point
 * @param y1 - Ordonnée du premier point
 * @param x2 - Abscisse du deuxième point
 * @param y2 - Ordonnée du deuxième point
 * @returns La distance entre les deux points
 */
static distance(x1: number, y1: number, x2: number, y2: number): number {
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}
```

**Explication :** Cette méthode statique peut être appelée directement sur la classe sans créer d'instance. Elle prend les coordonnées des deux points en paramètres.

---

### QUESTION 5 : Méthode calculerMilieu

**Réponse :** Implémentation de la méthode qui calcule le milieu d'un segment.

```typescript
/**
 * QUESTION 5: Calcule le milieu du segment défini par le point courant et un autre point
 * Formule: xM = (x1 + x2) / 2, yM = (y1 + y2) / 2
 * @param p - Le point avec lequel former le segment
 * @returns Un nouvel objet Point représentant le milieu
 */
calculerMilieu(p: Point): Point {
    const xM = (this._abs + p._abs) / 2;
    const yM = (this._ord + p._ord) / 2;
    return new Point(xM, yM);
}
```

**Explication :** La méthode calcule les coordonnées du milieu en utilisant la formule mathématique et retourne un nouvel objet Point.

---

### QUESTION 6 : Classe TroisPoints avec constructeur et getters/setters

**Réponse :** Définition de la classe TroisPoints avec ses attributs et méthodes d'accès.

```typescript
export class TroisPoints {
    // Attributs privés pour les trois points
    private _premier: Point;   // Premier point
    private _deuxieme: Point;  // Deuxième point
    private _troisieme: Point; // Troisième point

    /**
     * QUESTION 6: Constructeur de la classe TroisPoints
     */
    constructor(premier: Point, deuxieme: Point, troisieme: Point) {
        this._premier = premier;
        this._deuxieme = deuxieme;
        this._troisieme = troisieme;
    }

    // Getters et setters pour chaque point
    get premier(): Point { return this._premier; }
    set premier(value: Point) { this._premier = value; }
    
    get deuxieme(): Point { return this._deuxieme; }
    set deuxieme(value: Point) { this._deuxieme = value; }
    
    get troisieme(): Point { return this._troisieme; }
    set troisieme(value: Point) { this._troisieme = value; }
}
```

**Explication :** La classe encapsule trois objets Point avec leurs méthodes d'accès respectives.

---

### QUESTION 7 : Méthode TesterAlignement

**Réponse :** Implémentation de la méthode qui teste l'alignement de trois points.

```typescript
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
```

**Explication :** La méthode utilise la propriété géométrique selon laquelle trois points sont alignés si la distance entre deux points est égale à la somme des distances aux deux autres points. Une tolérance est utilisée pour gérer les imprécisions des calculs en virgule flottante.

---

### QUESTION 8 : Méthode estIsocele

**Réponse :** Implémentation de la méthode qui teste si trois points forment un triangle isocèle.

```typescript
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
```

**Explication :** Un triangle est isocèle si au moins deux de ses côtés ont la même longueur. La méthode compare les trois distances possibles avec une tolérance pour les calculs en virgule flottante.

---

### QUESTION 9 : Tests dans main.ts

**Réponse :** Implémentation d'une classe de test complète pour valider toutes les méthodes.

```typescript
export class TestExo {
    // Méthodes de test pour chaque fonctionnalité
    static testerClassPoint(): void { /* Tests de la classe Point */ }
    static testAlignement(): void { /* Tests d'alignement */ }
    static testIsocele(): void { /* Tests de triangle isocèle */ }
}

// Exécution de tous les tests
TestExo.numtest();
TestExo.testerClassPoint();
TestExo.testAlignement();
TestExo.testIsocele();
```

**Explication :** La classe de test valide le bon fonctionnement de toutes les méthodes implémentées avec différents cas de test (points alignés, non alignés, triangles isocèles, etc.).
