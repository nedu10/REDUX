const actionTypes = require("./actionTypes");
const {
    FETCH_USERS_REQUESTED, 
    FETCH_USERS_SUCCESS, 
    FETCH_USERS_ERROR
} = actionTypes

const INITIAL_STATE = {
    loading: false,
    users: [],
    error: null
}

const reducer = function (state = INITIAL_STATE, action){
    switch (action.type) {
        case FETCH_USERS_REQUESTED:
            
            return {
                ...state,
                loading: false
            };
    
        case FETCH_USERS_SUCCESS:
            
            return {
                ...state,
                users: action.payload
            };
    
        case FETCH_USERS_ERROR:
            
            return {
                ...state,
                error: action.payload
            };
    
        default:
            return state;
    }
}

module.exports = reducer