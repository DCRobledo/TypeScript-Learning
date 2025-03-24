const menu = [
    { name: "Margherita", price: 8 }, 
    { name: "Pepperoni", price: 10 }, 
    { name: "Hawaiian", price: 10 }, 
    { name: "Veggie", price: 9 }
]

let cashInRegister = 100

const nextOrderID = 1
const orderQueue = []

function addNewPizza(newPizza) {
    menu.push(newPizza)
}

function placeOrder(pizzaNameToOrder) {
    let targetPizza = menu.find(pizzaObj => pizzaObj.name === pizzaNameToOrder);
    if (targetPizza) {
        cashInRegister += targetPizza.price;
    }
    
    let orderPizzaObj = { id: nextOrderID, pizza: targetPizza, status: "ordered" }
    orderQueue.push(orderPizzaObj);
    nextOrderID += 1;
    
    return orderPizzaObj;
}

function completeOrder(orderID) {
    let targetOrder = orderQueue[orderID];
    
    if (targetOrder) {
        targetOrder.status = "complete";
        return targetOrder
    }
}

addNewPizza({ name: "Chicken Bacon Ranch", cost: 12 })
addNewPizza({ name: "BBQ Chicken", cost: 12 })
addNewPizza({ name: "Spicy Sausage", cost: 11 })

placeOrder("Chicken Bacon Ranch")
completeOrder("1")

console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order queue:", orderQueue)