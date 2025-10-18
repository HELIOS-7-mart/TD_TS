// CORRECTION: Class name should be capitalized (Point, not point)
export class Point {
    // CORRECTION: Constructor parameters should be properly typed and consistent naming
    constructor(private _abs: number, private _ord: number) {
        
    }

    // CORRECTION: Getters and setters should reference the correct private field names
    get abs(): number { return this._abs; }
    set abs(value: number) { this._abs = value; }
    get ord(): number { return this._ord; }
    set ord(value: number) { this._ord = value; }

    //méthode de calcul

    // CORRECTION: Missing + operator between the two Math.pow expressions and wrong field references
    calculerDistance(p: Point): number {
        return Math.sqrt(Math.pow(this._abs - p._abs, 2) + Math.pow(this._ord - p._ord, 2));
    }
    // CORRECTION: Added proper spacing and semicolon
    static distance(x1: number, y1: number, x2: number, y2: number): number {
        return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
    }

    // CORRECTION: Fixed variable names, field references, and return statement
    calculerMilieu(p: Point): Point {
        const xM = (this._abs + p._abs) / 2;
        const yM = (this._ord + p._ord) / 2;
        return new Point(xM, yM);
    }

    // CORRECTION: Fixed template literal syntax and field references
    afficher(): string {
        return `(${this._abs}, ${this._ord})`;
    }

}