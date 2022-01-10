
const itemsObject = [
    { quantity: 1, price: 200 },
    { quantity: 3, price: 350 },
    { quantity: 5, price: 400 },
];

const newArrayMap = itemsObject.map((x) => {
    // x.quantity = x.quantity * 2;
    // x.price = x.price * 2;
    // return x;
    const container = {};
    container.quantity = x.quantity * 2;
    container.price = x.price * 2;
    return container;
});
console.log(JSON.stringify(newArrayMap));

const newArrayFilter = itemsObject.filter((x) => {
    return x.quantity > 2 && x.price > 300;
})
console.log(JSON.stringify(newArrayFilter));

const newArrayReduce = itemsObject.reduce((sum, x) => {
    return sum + x.quantity*x.price;
}, 0)
console.log(JSON.stringify(newArrayReduce));

const string =' Perhaps The Easiest-to-understand   Case   For Reduce Is   To Return The Sum Of  All The Elements In  An Array  ';

//const newString = string.toLowerCase().trim().replace(/\s{2,}|[^a-z]/g, ' ');

const newString = string.trim().split(/[ -]+/).join(' ').toLowerCase();

console.log(JSON.stringify(newString));