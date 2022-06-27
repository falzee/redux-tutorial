const store = require('./app/store')
const cakeActions = require('./fitur/cake/cakeSlice').cakeActions
const iceCreamActions = require('./fitur/icecream/iceCreamSlice').iceCreamActions
const fetchUsers = require('./fitur/user/userSlice').fetchUsers

console.log('Initial state',store.getState())//allow access via getState()
const unsubscribe = store.subscribe(() => {
    console.log('Updated Store',store.getState())
})


store.dispatch(fetchUsers())
/* store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.restocked(4))
store.dispatch(cakeActions.restocked(2))

store.dispatch(iceCreamActions.ordered())
store.dispatch(iceCreamActions.ordered())
store.dispatch(iceCreamActions.restocked(4))
store.dispatch(iceCreamActions.restocked(5))

unsubscribe() */