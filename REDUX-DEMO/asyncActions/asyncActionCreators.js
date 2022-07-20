const {fetchUsersRequested, fetchUsersSuccess, fetchUsersError} = require('./actionCreators')
const axios = require('axios')

function asyncFetchUsersRequested(){
    return async function(dispatch) {
        dispatch(fetchUsersRequested())
        try {
            const users = await axios.get("https://jsonplaceholder.typicode.com/users")
            dispatch(fetchUsersSuccess(users.data))
        } catch (error) {
            console.log("error >> ", error)
            dispatch(fetchUsersError(error.message))
        }
        
    }
}

module.exports = {
    asyncFetchUsersRequested
}