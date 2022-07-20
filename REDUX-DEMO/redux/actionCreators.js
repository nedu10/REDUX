const actionTypes = require("./actionTypes");
const {
    CAKE_ORDERED, 
    CAKE_RESTOCKED, 
    ICECREAM_ORDERED, 
    ICECREAM_RESTOCKED
} = actionTypes

function orderCake(payload = 1){
    return {
        type: CAKE_ORDERED,
        payload
    }
}

function restockCake(payload = 1){
    return {
        type: CAKE_RESTOCKED,
        payload
    }
}
function orderIceCream(payload = 1){
    return {
        type: ICECREAM_ORDERED,
        payload
    }
}

function restockIceCream(payload = 1){
    return {
        type: ICECREAM_RESTOCKED,
        payload
    }
}

module.exports = {
    orderCake,
    restockCake,
    orderIceCream,
    restockIceCream
}