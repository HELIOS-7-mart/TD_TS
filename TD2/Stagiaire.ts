// Classe représentant un stagiaire avec son nom et ses notes
export class Stagiaire {
    // Le constructeur initialise le nom et le tableau de notes
    constructor(private _nom: string, private _notes: number[]) {
        
    }

    // Getter/Setter pour le nom du stagiaire
    public get nom(): string { return this._nom; }
    public set nom(value: string) { this._nom = value; }

    // Getter/Setter pour le tableau des notes
    public get notes(): number[] { return this._notes; }
    public set notes(value: number[]) { this._notes = value; }

    // Calcule et retourne la moyenne des notes (NaN si aucune note)
    calculerMoyenne(): number {
        if (this._notes.length === 0) return NaN;
        const somme = this._notes.reduce((total, note) => total + note, 0);
        return somme / this._notes.length;
    }

    // Retourne la note maximale (NaN si aucune note)
    trouverMax(): number {
        if (this._notes.length === 0) return NaN;
        return Math.max(...this._notes);
    }

    // Retourne la note minimale (NaN si aucune note)
    trouverMin(): number {
        if (this._notes.length === 0) return NaN;
        return Math.min(...this._notes);
    }

}
