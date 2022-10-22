/* import { Invoice } from "./classes/invoice";
import { ListTemplate } from "./classes/ListTemplate";
import { Payment } from "./classes/payment";
import { HasFormatter } from "./interfaces/HasFormatter"; */

/* // const anchor = document.querySelector("a")
const anchor = document.querySelector("a")! // => if you certainly know that there is an anchor

// console.log(anchor) => gives error
console.log(anchor.href)
/* if (anchor) {
    console.log(anchor.href)
} */

// const form = document.querySelector("form")!
/* const form = document.querySelector('.new-item-form') as HTMLFormElement;
 */
// inputs
/* const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement; */

// list template instance
/* const ul = document.querySelector("ul")!
const list = new ListTemplate(ul)

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let doc: HasFormatter;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
    } else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
    }


    list.render(doc, type.value, 'end')
}); */

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


// ENUMS
enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }


// GENERICS
const addUID = <T extends { name: string }>(obj: T) => {
    let uid = Math.floor(Math.random() * 100)
    return { ...obj, uid }
}

let docOne = addUID({ name: "asd", age: 20 });
// let docTwo = addUID("asd")


console.log(docOne.uid)

interface Resource<T> {
    uid: number,
    resourceName: ResourceType,
    data: T
}

let docThree: Resource<string> = {
    uid: 1,
    resourceName: ResourceType.AUTHOR,
    data: "valami"
}

// TUPLES

let tup: [string, number, boolean] = ['asd', 25, true]























