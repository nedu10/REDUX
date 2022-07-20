const actionTypes = require("./actionTypes");
const {
    CAKE_ORDERED, 
    CAKE_RESTOCKED, 
    ICECREAM_ORDERED, 
    ICECREAM_RESTOCKED
} = actionTypes

const INITIAL_CAKE_STATE = {
    num_of_cake: 10
}
const INITIAL_ICECREAM_STATE = {
    num_of_icecream: 10
}

const cake_reducer = function CakeReducer(state = INITIAL_CAKE_STATE, action){
    switch (action.type) {
        case CAKE_ORDERED:
            
            return {
                ...state,
                num_of_cake: state.num_of_cake - action.payload
            };
    
        case CAKE_RESTOCKED:
            
            return {
                ...state,
                num_of_cake: state.num_of_cake + action.payload
            };
    
        default:
            return state;
    }
}
const icecream_reducer = function IceCreamReducer(state = INITIAL_ICECREAM_STATE, action){
    switch (action.type) {
        case ICECREAM_ORDERED:
            
            return {
                ...state,
                num_of_icecream: state.num_of_icecream - action.payload
            };
    
        case ICECREAM_RESTOCKED:
            
            return {
                ...state,
                num_of_icecream: state.num_of_icecream + action.payload
            };
    
        default:
            return state;
    }
}

module.exports = {
    cake_reducer,
    icecream_reducer
}