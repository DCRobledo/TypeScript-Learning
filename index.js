var menu = [
    { id: 1, name: "Margherita", price: 8 },
    { id: 2, name: "Pepperoni", price: 10 },
    { id: 3, name: "Hawaiian", price: 10 },
    { id: 4, name: "Veggie", price: 9 }
];
var cashInRegister = 100;
var nextOrderID = 1;
var orderQueue = [];
function addNewPizza(newPizza) {
    menu.push(newPizza);
}
function placeOrder(pizzaNameToOrder) {
    var targetPizza = menu.find(function (pizzaObj) { return pizzaObj.name === pizzaNameToOrder; });
    if (!targetPizza) {
        console.error("Pizza ".concat(pizzaNameToOrder, " not found"));
        return;
    }
    cashInRegister += targetPizza.price;
    var orderPizzaObj = { id: nextOrderID, pizza: targetPizza, status: "ordered" };
    orderQueue.push(orderPizzaObj);
    nextOrderID += 1;
    return orderPizzaObj;
}
function completeOrder(orderID) {
    var targetOrder = orderQueue[orderID];
    if (!targetOrder) {
        console.error("Order ".concat(orderID, " not found"));
        return;
    }
    targetOrder.status = "completed";
    return targetOrder;
}
addNewPizza({ id: 4, name: "Chicken Bacon Ranch", price: 12 });
addNewPizza({ id: 5, name: "BBQ Chicken", price: 12 });
addNewPizza({ id: 6, name: "Spicy Sausage", price: 11 });
placeOrder("Chicken Bacon Ranch");
completeOrder(1);
console.log("Menu:", menu);
console.log("Cash in register:", cashInRegister);
console.log("Order queue:", orderQueue);
