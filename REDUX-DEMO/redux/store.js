const redux = require('redux')
const {createStore, combineReducers, applyMiddleware} = redux
const reducer = require('./reducers')
const {createLogger} = require('redux-logger')

const {cake_reducer, icecream_reducer } = reducer

const rootReducer = combineReducers({
    cake: cake_reducer,
    icecream: icecream_reducer
})

const store = createStore(rootReducer, applyMiddleware(createLogger()))

module.exports = store
