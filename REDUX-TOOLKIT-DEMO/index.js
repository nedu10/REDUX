const { subscribe, dispatch, getState } = require('./app/store')
const {cakeActions} = require('./features/cake/cakeSlice')
const {fetchUsers} = require('./features/user/userSlice')
const {icecreamctions} = require('./features/icecream/icecreamSlice')


const unsubscribe = subscribe(() => {console.log('show updated >> ', getState())})

dispatch(cakeActions.ordered({qty: 2}))
dispatch(cakeActions.ordered({qty: 2}))
dispatch(cakeActions.ordered({qty: 2}))
dispatch(cakeActions.restocked({qty: 20}))


dispatch(icecreamctions.ordered({qty: 2}))
dispatch(icecreamctions.ordered({qty: 2}))
dispatch(icecreamctions.restocked({qty: 20}))

dispatch(fetchUsers())

// unsubscribe()