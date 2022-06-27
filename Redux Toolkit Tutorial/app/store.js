const configureStore = require('@reduxjs/toolkit').configureStore
//const reduxLogger = require('redux-logger')
const cakeReducer = require('../fitur/cake/cakeSlice')
const iceCreamReducer = require('../fitur/icecream/iceCreamSlice')
const userReducer = require('../fitur/user/userSlice')
//const logger = reduxLogger.createLogger()

const store = configureStore({
    reducer:{
        cake: cakeReducer,
        iceCream: iceCreamReducer,
        user: userReducer
    },
    //middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

module.exports = store
