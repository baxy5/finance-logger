/* // const anchor = document.querySelector("a")
const anchor = document.querySelector("a")! // => if you certainly know that there is an anchor

// console.log(anchor) => gives error
console.log(anchor.href)
/* if (anchor) {
    console.log(anchor.href)
} */

// const form = document.querySelector("form")!
const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLInputElement;
const toform = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    console.log(
        type.value,
        toform.value,
        details.value,
        amount.valueAsNumber
    );
});

// classes
import { Invoice } from "./classes/invoice.js"

const invOne = new Invoice("Adaptics", "work on Eniranyitok", 1000000);
const invTwo = new Invoice("Adaptics", "work on Szalai", 2000000);

let invoices: Invoice[] = [];
invoices.push(invOne)
invoices.push(invTwo)

console.log(invoices)

console.log(invOne, invTwo)

invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format())
})
























