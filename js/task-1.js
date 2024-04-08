// function isEnoughCapacity(products, containerSize) {
//     let sumProducts = 0;
//     const values = Object.values(products);

//     for (const value of values) {
//         sumProducts += value;
//     }
  
//     return sumProducts <= containerSize;
// }

// console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true
// console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false
// console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true
// console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // false


function deliverPizza(pizzaName) {
  return `Delivering ${pizzaName} pizza.`;
}

function makePizza(pizzaName) {
  return `Pizza ${pizzaName} is being prepared, please wait...`;
}

function makeMessage(pizzaName, callback) {
  return callback(pizzaName);
}

console.log(makeMessage("Royal Grand", makePizza)); // "Pizza Royal Grand is being prepared, please wait..."
console.log(makeMessage("Ultracheese", deliverPizza)); //"Delivering Ultracheese pizza."