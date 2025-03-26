var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var nextPizzaID = 1;
var menu = [];
addNewPizza({ name: "Margherita", price: 8 });
addNewPizza({ name: "Pepperoni", price: 10 });
addNewPizza({ name: "Hawaiian", price: 10 });
addNewPizza({ name: "Veggie", price: 9 });
var cashInRegister = 100;
var nextOrderID = 1;
var orderQueue = [];
function addNewPizza(newPizza) {
    var pizza = __assign({ id: nextPizzaID }, newPizza);
    menu.push(pizza);
    return pizza;
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
function getPizzaDetail(identifier) {
    var targetPizza;
    if (typeof identifier === "string") {
        targetPizza = menu.find(function (pizzaObj) { return pizzaObj.name.toLowerCase() === identifier.toLowerCase(); });
    }
    else if (typeof identifier === "number") {
        targetPizza = menu.find(function (pizzaObj) { return pizzaObj.id === identifier; });
    }
    return targetPizza;
}
addNewPizza({ name: "Chicken Bacon Ranch", price: 12 });
addNewPizza({ name: "BBQ Chicken", price: 12 });
addNewPizza({ name: "Spicy Sausage", price: 11 });
placeOrder("Chicken Bacon Ranch");
completeOrder(1);
console.log("Menu:", menu);
console.log("Cash in register:", cashInRegister);
console.log("Order queue:", orderQueue);
