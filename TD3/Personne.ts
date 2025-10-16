import { Adresse } from './Adresse';

// Type utilitaire pour contraindre le sexe
export type Sexe = 'M' | 'F';

// Représente une personne avec un nom, un sexe et une liste d'adresses
export class Personne {
  private nom: string;
  private sexe: Sexe | string;
  private adresses: Adresse[];

  // Crée une personne ; les adresses sont optionnelles (par défaut vide)
  constructor(nom: string, sexe: Sexe | string, adresses: Adresse[] = []) {
    this.nom = nom;
    this.sexe = sexe;
    this.adresses = adresses;
  }

  // Getters/Setters pour exposer les attributs privés en respectant l'encapsulation
  public getNom(): string {
    return this.nom;
  }

  public setNom(nom: string): void {
    this.nom = nom;
  }

  public getSexe(): Sexe | string {
    return this.sexe;
  }

  public setSexe(sexe: Sexe | string): void {
    this.sexe = sexe;
  }

  public getAdresses(): Adresse[] {
    return this.adresses;
  }

  public setAdresses(adresses: Adresse[]): void {
    this.adresses = adresses;
  }

  // Ajoute une adresse supplémentaire à la personne
  public addAdresse(adresse: Adresse): void {
    this.adresses.push(adresse);
  }
}


