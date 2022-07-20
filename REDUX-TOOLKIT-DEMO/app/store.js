const {configureStore, getDefaultMiddleware} = require('@reduxjs/toolkit')
const {cakeReducer} = require('../features/cake/cakeSlice')
const {icecreamReducer} = require('../features/icecream/icecreamSlice')
const {userReducer} = require('../features/user/userSlice')
const {createLogger} = require('redux-logger')

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecreame: icecreamReducer,
        user: userReducer
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(createLogger())
})

module.exports = store