console.log("welcome setup")

const store = require('./redux/store')
const actionCreators = require('./redux/actionCreators')
const helpers = require('./redux/helpers')
const redux = require('redux')

const {getState, dispatch, subscribe} = store
const {orderCake, restockCake, orderIceCream, restockIceCream} = actionCreators
const {bindActionCreatorsHelper} = helpers

// const unsubscribe = subscribe(() => console.log('new update >> ', getState()))
const unsubscribe = subscribe(() => {})

// dispatch(orderCake(3))
// dispatch(orderCake(1))
// dispatch(orderCake(2))
// dispatch(restockCake(15))

const actions = redux.bindActionCreators({orderCake, restockCake, orderIceCream, restockIceCream}, dispatch)
// const actions = bindActionCreatorsHelper({orderCake, restockCake}, dispatch)

actions.orderCake(3)
actions.orderCake(2)
actions.orderCake(1)
actions.restockCake(14)
actions.orderIceCream(1)
actions.restockIceCream(14)
unsubscribe()

dispatch(orderCake(2))
console.log("ggg >> ", store.getState())


//async stores

const asyncStore = require('./asyncActions/store')
const {asyncFetchUsersRequested} = require('./asyncActions/asyncActionCreators')

const {getState: asyncGetState, dispatch: asyncDispatch, subscribe: asyncSubscribe} = asyncStore

const asyncUnsubscribe = asyncSubscribe(() => console.log('new update >> ', asyncGetState()))

asyncDispatch(asyncFetchUsersRequested())

asyncUnsubscribe()