"use strict";
/* // const anchor = document.querySelector("a")
const anchor = document.querySelector("a")! // => if you certainly know that there is an anchor

// console.log(anchor) => gives error
console.log(anchor.href)
/* if (anchor) {
    console.log(anchor.href)
} */
// const form = document.querySelector("form")!
const form = document.querySelector('.new-item-form');
console.log(form.children);
// inputs
const type = document.querySelector('#type');
const toform = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toform.value, details.value, amount.valueAsNumber);
});
// classes
class Invoice {
    /* readonly client: string;
    private details: string;
    public amount: number; */
    /* constructor(c: string, d: string, a: number) {
        this.client = c;
        this.details = d;
        this.amount = a;
    } */
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice("Adaptics", "work on Eniranyitok", 1000000);
const invTwo = new Invoice("Adaptics", "work on Szalai", 2000000);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
// console.log(invoices)
// console.log(invOne, invTwo)
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
