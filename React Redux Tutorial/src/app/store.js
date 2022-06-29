import { configureStore } from '@reduxjs/toolkit'
import cakeReducer from '../fitur/cake/cakeSlice'
import iceCreamReducer from '../fitur/icecream/iceCreamSlice'
import userReducer from '../fitur/user/userSlice'

const store = configureStore({
    reducer:{
        cake: cakeReducer,
        iceCream: iceCreamReducer,
        user: userReducer
    },
    //middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store
