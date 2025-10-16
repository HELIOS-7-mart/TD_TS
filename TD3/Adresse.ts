// Représente une adresse postale avec rue, ville et code postal
export class Adresse {
  private rue: string;
  private ville: string;
  private codePostal: string;

  // Initialise une nouvelle adresse
  constructor(rue: string, ville: string, codePostal: string) {
    this.rue = rue;
    this.ville = ville;
    this.codePostal = codePostal;
  }

  // Accesseurs/mutateurs pour chacun des attributs privés
  public getRue(): string {
    return this.rue;
  }

  public setRue(rue: string): void {
    this.rue = rue;
  }

  public getVille(): string {
    return this.ville;
  }

  public setVille(ville: string): void {
    this.ville = ville;
  }

  public getCodePostal(): string {
    return this.codePostal;
  }

  public setCodePostal(codePostal: string): void {
    this.codePostal = codePostal;
  }
}
