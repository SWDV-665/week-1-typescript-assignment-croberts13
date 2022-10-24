// create a class
class Grocery {
    name: string;
    quantity: number;
    price: number;

    constructor(n: string, q: number, p: number){
        this.name =n;
        this.quantity =q;
        this.price =p;
    }
}

// create a list of grocery items
//
let list_items =[
    new Grocery("milk", 3, 5),
    new Grocery("bread", 6, 4),
    new Grocery("egg", 11, 12)
]

const ele = document.getElementById("app");
list_items.forEach(e=> {
    const p = document.createElement("p");
    p.textContent = `${e.name} ${e.quantity} -> $${e.price}`;
    ele.appendChild(p);
});
