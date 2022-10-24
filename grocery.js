// create a class
var Grocery = /** @class */ (function () {
    function Grocery(n, q, p) {
        this.name = n;
        this.quantity = q;
        this.price = p;
    }
    return Grocery;
}());
// create a list of grocery items
//
var list_items = [
    new Grocery("milk", 3, 5),
    new Grocery("bread", 6, 4),
    new Grocery("egg", 11, 12)
];
var ele = document.getElementById("app");
list_items.forEach(function (e) {
    var p = document.createElement("p");
    p.textContent = "".concat(e.name, " ").concat(e.quantity, " -> $").concat(e.price);
    ele.appendChild(p);
});
