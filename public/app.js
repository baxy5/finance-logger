import { Invoice } from "./classes/invoice";
import { ListTemplate } from "./classes/ListTemplate";
import { Payment } from "./classes/payment";
/* // const anchor = document.querySelector("a")
const anchor = document.querySelector("a")! // => if you certainly know that there is an anchor

// console.log(anchor) => gives error
console.log(anchor.href)
/* if (anchor) {
    console.log(anchor.href)
} */
// const form = document.querySelector("form")!
const form = document.querySelector('.new-item-form');
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template instance
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
// classes
/* import { Invoice } from "./classes/invoice.js"
import { Payment } from "./classes/payment.js"
import { HasFormatter } from "./interfaces/HasFormatter"

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice("baszky", "valami", 200);
docTwo = new Invoice("asd", "valami", 250);

let docs: HasFormatter[] = [];
docs.push(docOne)
docs.push(docTwo) */
// intefaces
/* interface isPerson {
    name: string;
    age: number;
    speak(a: string): void;
}

const me: isPerson = {
    name: "janos",
    age: 17,
    speak(text: string) {
        console.log(text);
    }
}

const greetPerson = (person: isPerson) => {
    console.log(person.name);
} */
/* const invOne = new Invoice("Adaptics", "work on Eniranyitok", 1000000);
const invTwo = new Invoice("Adaptics", "work on Szalai", 2000000);

let invoices: Invoice[] = [];
invoices.push(invOne)
invoices.push(invTwo)

console.log(invoices)

console.log(invOne, invTwo)

invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format())
}) */
