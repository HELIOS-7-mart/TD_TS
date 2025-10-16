// Import de la classe Stagiaire pour composer la Formation
import { Stagiaire } from "./Stagiaire";

// Classe représentant une formation composée de stagiaires
export class Formation {
	// Le constructeur initialise l'intitulé, le nombre de jours, et la liste de stagiaires
	constructor(
		private _intitule: string,
		private _nbrJours: number,
		private _stagiaires: Stagiaire[]
	) {}

	// Getter/Setter pour l'intitulé de la formation
	get intitule(): string { return this._intitule; }
	set intitule(value: string) { this._intitule = value; }

	// Getter/Setter pour le nombre de jours de formation
	get nbrJours(): number { return this._nbrJours; }
	set nbrJours(value: number) { this._nbrJours = value; }

	// Getter/Setter pour la liste des stagiaires
	get stagiaires(): Stagiaire[] { return this._stagiaires; }
	set stagiaires(value: Stagiaire[]) { this._stagiaires = value; }

	// Calcule la moyenne de la formation (moyenne des moyennes des stagiaires)
	calculerMoyenneFormation(): number {
		if (this._stagiaires.length === 0) return NaN;
		const sommeDesMoyennes = this._stagiaires.reduce((total, stagiaire) => {
			const moyenne = stagiaire.calculerMoyenne();
			return total + moyenne;
		}, 0);
		return sommeDesMoyennes / this._stagiaires.length;
	}

	// Retourne l'indice du stagiaire ayant la meilleure moyenne (ou -1 si liste vide)
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

	// Affiche le nom et la meilleure moyenne, ou un message si aucun élève
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

	// Affiche la note minimale du premier stagiaire ayant la meilleure moyenne
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

	// Affiche la moyenne du premier stagiaire correspondant au nom donné
	trouverMoyenneParNom(nom: string): void {
		const stagiaire = this._stagiaires.find(s => s.nom === nom);
		if (!stagiaire) {
			console.log("Aucun élève n'a été trouvé.");
		} else {
			console.log(`${stagiaire.nom} a une moyenne de: ${stagiaire.calculerMoyenne()}`);
		}
	}
}