// classes

class Invoice {
    client: string;
    details: string;
    amount: number;

    constructor(c:string, d: string, a: number) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes ${this.amount}$ for ${this.details}`;
    }
}

const invOne = new Invoice('mandi', 'work on testing', 250);

console.log(invOne)
let invoices: Invoice[] = [];
invoices.push(invOne);
console.log(invoices)

invOne.client = 'jon'
console.log(invOne)