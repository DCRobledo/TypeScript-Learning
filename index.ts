type Pizza = {
    id?: number;
    name: string,
    price: number
}

type Order = {
    id: number,
    pizza: Pizza,
    status: "ordered" | "completed"
}

let nextPizzaID = 1
const menu : Pizza[] = []
addNewPizza({name: "Margherita", price: 8 })
addNewPizza({name: "Pepperoni", price: 10 })
addNewPizza({name: "Hawaiian", price: 10 })
addNewPizza({name: "Veggie", price: 9 })

let cashInRegister = 100

let nextOrderID = 1
const orderQueue : Order[] = []

function addNewPizza(newPizza: Omit<Pizza, "id">) : Pizza {
    const pizza : Pizza = {
        id: nextPizzaID,
        ...newPizza
    }
    menu.push(pizza)
    return pizza
}

function placeOrder(pizzaNameToOrder : string) : Order {
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

function completeOrder(orderID: number) : Order {
    let targetOrder = orderQueue[orderID];
    if (!targetOrder) {
        console.error(`Order ${orderID} not found`);
        return;
    }
    
    targetOrder.status = "completed";
    return targetOrder
}

function getPizzaDetail(identifier : string | number) : Pizza | undefined {
    let targetPizza : Pizza;

    if (typeof identifier === "string") {
        targetPizza = menu.find((pizzaObj: { name: string; }) => pizzaObj.name.toLowerCase() === identifier.toLowerCase() );
    }
    else if (typeof identifier === "number") {
        targetPizza = menu.find((pizzaObj: { id: number }) => pizzaObj.id === identifier );
    }
    
    return targetPizza;
}

addNewPizza({name: "Chicken Bacon Ranch", price: 12 })
addNewPizza({name: "BBQ Chicken", price: 12 })
addNewPizza({name: "Spicy Sausage", price: 11 })

placeOrder("Chicken Bacon Ranch")
completeOrder(1)

console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order queue:", orderQueue)