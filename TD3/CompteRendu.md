# COMPTE RENDU - TD TypeScript - Exercice 3

## Énoncé de l'exercice

**Exercice 3** : Implémentation des classes `Adresse`, `Personne` et `ListePersonnes` avec les méthodes de recherche, de comptage et d’édition demandées.

---

## RÉPONSES AUX QUESTIONS

### QUESTION 1 : Définition des classes `Adresse` et `Personne` avec constructeurs et getters/setters

**Réponse :** Les classes `Adresse` et `Personne` ont été définies dans des fichiers séparés, avec constructeurs et getters/setters.

```typescript
// TD3/Adresse.ts
export class Adresse {
  private rue: string;
  private ville: string;
  private codePostal: string;

  constructor(rue: string, ville: string, codePostal: string) {
    this.rue = rue;
    this.ville = ville;
    this.codePostal = codePostal;
  }

  public getRue(): string { return this.rue; }
  public setRue(rue: string): void { this.rue = rue; }

  public getVille(): string { return this.ville; }
  public setVille(ville: string): void { this.ville = ville; }

  public getCodePostal(): string { return this.codePostal; }
  public setCodePostal(codePostal: string): void { this.codePostal = codePostal; }
}
```

```typescript
// TD3/Personne.ts
import { Adresse } from './Adresse';

export type Sexe = 'M' | 'F';

export class Personne {
  private nom: string;
  private sexe: Sexe | string;
  private adresses: Adresse[];

  constructor(nom: string, sexe: Sexe | string, adresses: Adresse[] = []) {
    this.nom = nom;
    this.sexe = sexe;
    this.adresses = adresses;
  }

  public getNom(): string { return this.nom; }
  public setNom(nom: string): void { this.nom = nom; }

  public getSexe(): Sexe | string { return this.sexe; }
  public setSexe(sexe: Sexe | string): void { this.sexe = sexe; }

  public getAdresses(): Adresse[] { return this.adresses; }
  public setAdresses(adresses: Adresse[]): void { this.adresses = adresses; }

  public addAdresse(adresse: Adresse): void { this.adresses.push(adresse); }
}
```

**Explication :** Chaque attribut est privé et accédé via des getters/setters pour respecter l’encapsulation.

---

### QUESTION 2 : Définition de la classe `ListePersonnes` avec constructeur et getters/setters

**Réponse :** La classe `ListePersonnes` encapsule un tableau de `Personne` avec un constructeur et des getters/setters.

```typescript
// TD3/ListePersonnes.ts (extrait - base de la classe)
import { Personne } from './Personne';

export class ListePersonnes {
  private personnes: Personne[];

  constructor(personnes: Personne[] = []) {
    this.personnes = personnes;
  }

  public getPersonnes(): Personne[] { return this.personnes; }
  public setPersonnes(personnes: Personne[]): void { this.personnes = personnes; }

  // ... méthodes Q3 à Q7 ci-dessous ...
}
```

**Explication :** Le constructeur accepte un tableau initial, modifiable via `setPersonnes`.

---

### QUESTION 3 : Méthode `findByNom(s: string)`

**Réponse :** Retourne le premier objet `Personne` dont le `nom` correspond, sinon `null`.

```typescript
public findByNom(s: string): Personne | null {
  for (const personne of this.personnes) {
    if (personne.getNom() === s) {
      return personne;
    }
  }
  return null;
}
```

**Explication :** Parcours séquentiel jusqu’au premier match, sinon `null` si absent.

---

### QUESTION 4 : Méthode `findByCodePostal(cp: string)`

**Réponse :** Indique si au moins une personne possède une adresse avec le code postal `cp`.

```typescript
public findByCodePostal(cp: string): boolean {
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
```

**Explication :** Utilise `some` sur les adresses de chaque personne; arrêt anticipé en cas de succès.

---

### QUESTION 5 : Méthode `countPersonneVille(ville: string)`

**Réponse :** Compte le nombre de personnes ayant au moins une adresse dans la `ville` donnée.

```typescript
public countPersonneVille(ville: string): number {
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
```

**Explication :** Incrémente pour chaque personne ayant au moins une adresse dans la ville cible.

---

### QUESTION 6 : Méthode `editPersonneNom(oldNom: string, newNom: string)`

**Réponse :** Remplace les `nom` égaux à `oldNom` par `newNom`.

```typescript
public editPersonneNom(oldNom: string, newNom: string): void {
  for (const personne of this.personnes) {
    if (personne.getNom() === oldNom) {
      personne.setNom(newNom);
    }
  }
}
```

**Explication :** Met à jour toutes les occurrences correspondantes.

---

### QUESTION 7 : Méthode `editPersonneVille(nom: string, newVille: string)`

**Réponse :** Remplace la `ville` de toutes les adresses des personnes dont le `nom` correspond.

```typescript
public editPersonneVille(nom: string, newVille: string): void {
  for (const personne of this.personnes) {
    if (personne.getNom() === nom) {
      const adresses = personne.getAdresses();
      for (const adresse of adresses) {
        adresse.setVille(newVille);
      }
    }
  }
}
```

**Explication :** Modifie chaque adresse des personnes ciblées pour refléter la nouvelle ville.

---

## Tests dans `main.ts`

**Réponse :** Création de quelques instances et vérification des méthodes.

```typescript
import { Adresse } from './Adresse';
import { Personne } from './Personne';
import { ListePersonnes } from './ListePersonnes';

const adr1 = new Adresse('1 rue des Lilas', 'Paris', '75001');
const adr2 = new Adresse('2 avenue Victor Hugo', 'Lyon', '69000');
const adr3 = new Adresse('3 boulevard de la République', 'Paris', '75011');

const p1 = new Personne('Alice', 'F', [adr1]);
const p2 = new Personne('Bob', 'M', [adr2, adr3]);
const p3 = new Personne('Alice', 'F', [adr2]);

const liste = new ListePersonnes([p1, p2, p3]);

console.log('findByNom("Alice") =>', liste.findByNom('Alice'));
console.log('findByNom("Charlie") =>', liste.findByNom('Charlie'));
console.log('findByCodePostal("75001") =>', liste.findByCodePostal('75001'));
console.log('findByCodePostal("13001") =>', liste.findByCodePostal('13001'));
console.log('countPersonneVille("Paris") =>', liste.countPersonneVille('Paris'));

liste.editPersonneNom('Alice', 'Alicia');
console.log('After editPersonneNom("Alice","Alicia"), findByNom("Alicia") =>', liste.findByNom('Alicia'));

liste.editPersonneVille('Bob', 'Marseille');
console.log('After editPersonneVille("Bob","Marseille"), countPersonneVille("Marseille") =>', liste.countPersonneVille('Marseille'));
```

**Explication :** Le script illustre les recherches par nom/code postal, le comptage par ville et les éditions demandées.
