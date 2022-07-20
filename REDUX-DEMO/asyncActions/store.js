const redux = require('redux')
const {createStore, combineReducers, applyMiddleware} = redux
const reducer = require('./reducers')
const {createLogger} = require('redux-logger')
const {default: thunkMiddleware} = require('redux-thunk')


const store = createStore(reducer, applyMiddleware(createLogger(), thunkMiddleware))

module.exports = store
