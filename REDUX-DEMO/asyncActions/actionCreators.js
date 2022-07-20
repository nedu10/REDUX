const actionTypes = require("./actionTypes");
const {
    FETCH_USERS_REQUESTED, 
    FETCH_USERS_SUCCESS, 
    FETCH_USERS_ERROR
} = actionTypes

function fetchUsersRequested(){
    return {
        type: FETCH_USERS_REQUESTED
    }
}

function fetchUsersSuccess(users = []){
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}
function fetchUsersError(error = null){
    return {
        type: FETCH_USERS_ERROR,
        payload: error
    }
}

module.exports = {
    fetchUsersRequested,
    fetchUsersSuccess,
    fetchUsersError
}