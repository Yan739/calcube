import {Injectable, signal} from '@angular/core';

@Injectable({providedIn: 'root'})
export class CalcEngineService {
    display = signal('0');
    history = signal<string[]>([]);

    private current = 0;
    private pending: number | null = null;
    private operator: string | null = null;

    input(digit: string) {
        this.display.update(v => (v === '0' ? digit : v + digit));
    }

    setOperator(op: string) {
        this.pending = parseFloat(this.display());
        this.operator = op;
        this.display.set('0');
    } 

    equals() {
        if (this.pending === null || !this.operator) return;
        const b = parseFloat(this.display());
        const result = this.compute(this.pending, b, this.operator);
        const entry = `${this.pending} ${this.operator} ${b} = ${result}`;
        this.history.update(h => [entry, ...h].slice(0, 20));
        this.display.set(String(result));
        this.pending = null;
        this.operator = null;
    }

    clear() {
        this.display.set('0');
        this.pending = null;
        this.operator = null;
    }

    private compute(a: number, b: number, op: string): number {
        switch (op) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a != 0 ? a / b : NaN;
            default: return b;
        }

    }
        
}
