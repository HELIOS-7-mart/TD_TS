# COMPTE RENDU - TD TypeScript - Exercice 2

## Énoncé de l'exercice

**Exercice 2** : Implémentation des classes Stagiaire et Formation avec leurs méthodes respectives.

---

## RÉPONSES AUX QUESTIONS

### QUESTION 1 : Définition de la classe Stagiaire avec constructeur

**Réponse :** La classe `Stagiaire` a été définie avec un constructeur prenant deux paramètres privés (`nom`, `notes`).

```typescript
export class Stagiaire {
    // QUESTION 1: Constructeur avec deux paramètres privés
    constructor(private _nom: string, private _notes: number[]) {
        
    }
}
```

**Explication :** Le constructeur initialise les attributs privés `_nom` et `_notes` du stagiaire.

---

### QUESTION 2 : Getters et setters pour les attributs de Stagiaire

**Réponse :** Implémentation des getters et setters pour accéder et modifier `nom` et `notes`.

```typescript
// QUESTION 2: Getters/Setters de Stagiaire
public get nom(): string { 
    return this._nom; 
}

public set nom(value: string) { 
    this._nom = value; 
}

public get notes(): number[] { 
    return this._notes; 
}

public set notes(value: number[]) { 
    this._notes = value; 
}
```

**Explication :** Les getters permettent de lire les attributs privés, les setters de les modifier, conformément à l'encapsulation.

---

### QUESTION 3 : Méthode calculerMoyenne() dans Stagiaire

**Réponse :** La méthode calcule la moyenne des notes du stagiaire.

```typescript
// QUESTION 3: Moyenne des notes du stagiaire
calculerMoyenne(): number {
    if (this._notes.length === 0) return NaN;
    const somme = this._notes.reduce((total, note) => total + note, 0);
    return somme / this._notes.length;
}
```

**Explication :** On additionne les notes avec `reduce` puis on divise par le nombre de notes; s'il n'y a aucune note, on retourne `NaN`.

---

### QUESTION 4 : Méthodes trouverMax() et trouverMin() dans Stagiaire

**Réponse :** Ces méthodes retournent respectivement la note maximale et minimale.

```typescript
// QUESTION 4: Max et Min des notes du stagiaire
trouverMax(): number {
    if (this._notes.length === 0) return NaN;
    return Math.max(...this._notes);
}

trouverMin(): number {
    if (this._notes.length === 0) return NaN;
    return Math.min(...this._notes);
}
```

**Explication :** `Math.max` et `Math.min` appliqués à l'ensemble des notes via l'opérateur de décomposition.

---

### QUESTION 5 : Classe Formation, getters/setters et constructeur

**Réponse :** La classe `Formation` est définie avec ses attributs privés, son constructeur et ses getters/setters.

```typescript
import { Stagiaire } from "./Stagiaire";

export class Formation {
    // QUESTION 5: Constructeur et attributs privés
    constructor(
        private _intitule: string,
        private _nbrJours: number,
        private _stagiaires: Stagiaire[]
    ) {}

    // Getters/Setters
    get intitule(): string { return this._intitule; }
    set intitule(value: string) { this._intitule = value; }

    get nbrJours(): number { return this._nbrJours; }
    set nbrJours(value: number) { this._nbrJours = value; }

    get stagiaires(): Stagiaire[] { return this._stagiaires; }
    set stagiaires(value: Stagiaire[]) { this._stagiaires = value; }
}
```

**Explication :** Le constructeur reçoit l'intitulé, le nombre de jours et la liste des stagiaires; les getters/setters assurent l'accès aux attributs.

---

### QUESTION 6 : Méthode calculerMoyenneFormation()

**Réponse :** Retourne la moyenne des moyennes des stagiaires.

```typescript
// QUESTION 6: Moyenne de la formation (moyenne des moyennes des stagiaires)
calculerMoyenneFormation(): number {
    if (this._stagiaires.length === 0) return NaN;
    const sommeDesMoyennes = this._stagiaires.reduce((total, stagiaire) => {
        const moyenne = stagiaire.calculerMoyenne();
        return total + moyenne;
    }, 0);
    return sommeDesMoyennes / this._stagiaires.length;
}
```

**Explication :** On calcule la moyenne de chaque stagiaire puis on en fait la moyenne globale.

---

### QUESTION 7 : Méthode getIndexMax()

**Réponse :** Retourne l'indice du stagiaire ayant la meilleure moyenne.

```typescript
// QUESTION 7: Indice du stagiaire avec la meilleure moyenne
getIndexMax(): number {
    if (this._stagiaires.length === 0) return -1;
    let indexMax = 0;
    let meilleureMoyenne = this._stagiaires[0].calculerMoyenne();
    for (let i = 1; i < this._stagiaires.length; i++) {
        const moyenneCourante = this._stagiaires[i].calculerMoyenne();
        if (moyenneCourante > meilleureMoyenne) {
            meilleureMoyenne = moyenneCourante;
            indexMax = i;
        }
    }
    return indexMax;
}
```

**Explication :** Parcours linéaire pour déterminer l'indice associé à la moyenne maximale; renvoie `-1` si aucun stagiaire.

---

### QUESTION 8 : Méthode afficherNomMax()

**Réponse :** Affiche le nom du premier stagiaire ayant la meilleure moyenne.

```typescript
// QUESTION 8: Affiche le nom et la meilleure moyenne
afficherNomMax(): void {
    const idx = this.getIndexMax();
    if (idx === -1) {
        console.log("Aucun élève n'a été trouvé.");
    } else {
        const meilleur = this._stagiaires[idx];
        const moyenne = meilleur.calculerMoyenne();
        console.log(`${meilleur.nom} a la meilleure moyenne: ${moyenne}`);
    }
}
```

**Explication :** La méthode utilise `getIndexMax()` pour trouver le stagiaire et affiche son nom et sa moyenne.

---

### QUESTION 9 : Méthode afficherMinMax()

**Réponse :** Affiche la note minimale du premier stagiaire ayant la meilleure moyenne.

```typescript
// QUESTION 9: Affiche la note minimale du meilleur stagiaire
afficherMinMax(): void {
    const idx = this.getIndexMax();
    if (idx === -1) {
        console.log("Aucun élève n'a été trouvé.");
    } else {
        const meilleur = this._stagiaires[idx];
        const noteMin = meilleur.trouverMin();
        console.log(`${meilleur.nom} a la note minimale: ${noteMin}`);
    }
}
```

**Explication :** On réutilise l'indice du meilleur stagiaire puis on affiche sa plus petite note.

---

### QUESTION 10 : Méthode trouverMoyenneParNom(nom: string)

**Réponse :** Affiche la moyenne du premier stagiaire dont le nom correspond au paramètre.

```typescript
// QUESTION 10: Affiche la moyenne d'un stagiaire recherché par nom
trouverMoyenneParNom(nom: string): void {
    const stagiaire = this._stagiaires.find(s => s.nom === nom);
    if (!stagiaire) {
        console.log("Aucun élève n'a été trouvé.");
    } else {
        console.log(`${stagiaire.nom} a une moyenne de: ${stagiaire.calculerMoyenne()}`);
    }
}
```

**Explication :** Recherche du premier stagiaire par son `nom` via `find`, puis affichage de sa moyenne.

---

### QUESTION 11 : Tests dans main.ts

**Réponse :** Création de trois `Stagiaire`, d'une `Formation` et appel aux méthodes.

```typescript
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
```

**Explication :** Le script crée des objets, instancie la formation et vérifie les méthodes demandées via des affichages console.

---

## Instructions d'exécution (Windows PowerShell)

Assurez-vous d'avoir Node.js installé (`node -v`, `npm -v`). Placez-vous dans `C:\\Users\\eliot\\OneDrive\\Documents\\TD_TS\\TD2`.

- Option 1 — via ts-node
```powershell
npm init -y
npm install --save-dev typescript ts-node
npx ts-node main.ts
```

- Option 2 — compilation puis exécution Node
```powershell
npm init -y
npm install --save-dev typescript
npx tsc --target ES2017 --module commonjs --outDir dist main.ts Formation.ts Stagiaire.ts
node dist/main.js
```

---

## Remarques
- Cas limites gérés : aucune note ⇒ `NaN`; aucun stagiaire ⇒ `-1` et messages explicites.
- Code TS strict et encapsulé, prêt à l'exécution sans erreur.
