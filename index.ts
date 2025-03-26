type Pizza = {
    id: number;
    name: string,
    price: number
}

type Order = {
    id: number,
    pizza: Pizza,
    status: "ordered" | "completed"
}

const menu : Pizza[] = [
    { id: 1, name: "Margherita", price: 8 },
    { id: 2, name: "Pepperoni", price: 10 },
    { id: 3, name: "Hawaiian", price: 10 },
    { id: 4, name: "Veggie", price: 9 }
]

let cashInRegister = 100

let nextOrderID = 1
const orderQueue : Order[] = []

function addNewPizza(newPizza: Pizza) {
    menu.push(newPizza)
}

function placeOrder(pizzaNameToOrder : string) {
    let targetPizza : Pizza = menu.find((pizzaObj: { name: string; }) => pizzaObj.name === pizzaNameToOrder);
    if (!targetPizza) {
        console.error(`Pizza ${pizzaNameToOrder} not found`)
        return;
    }
    cashInRegister += targetPizza.price;

    let orderPizzaObj : Order = { id: nextOrderID, pizza: targetPizza, status: "ordered" }
    orderQueue.push(orderPizzaObj);
    nextOrderID += 1;

    return orderPizzaObj;
}

function completeOrder(orderID: number) {
    let targetOrder = orderQueue[orderID];
    if (!targetOrder) {
        console.error(`Order ${orderID} not found`);
        return;
    }
    
    targetOrder.status = "completed";
    return targetOrder
}

addNewPizza({id: 4, name: "Chicken Bacon Ranch", price: 12 })
addNewPizza({id: 5, name: "BBQ Chicken", price: 12 })
addNewPizza({id: 6, name: "Spicy Sausage", price: 11 })

placeOrder("Chicken Bacon Ranch")
completeOrder(1)

console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order queue:", orderQueue)