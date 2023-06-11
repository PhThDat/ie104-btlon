export class HSLA {
    h: number;
    s: number;
    l: number;
    a: number;

    constructor(h: number, s: number, l: number, a: number) {
        this.h = h % 360;
        this.s = s % 100;
        this.l = l % 100;
        this.a = a;
    }

    toString = () => {
        return `hsl(${this.h}, ${this.s}%, ${this.l}%, ${this.a})`;
    }

    setH = (newH: number): HSLA => {
        return new HSLA(newH, this.s, this.l, this.a);
    }
    setS = (newS: number): HSLA => {
        return new HSLA(this.h, newS, this.l, this.a);
    }
    setL = (newL: number): HSLA => {
        return new HSLA(this.h, this.s, newL, this.a);
    }
    setA = (newA: number): HSLA => {
        return new HSLA(this.h, this.s, this.l, newA);
    }
}