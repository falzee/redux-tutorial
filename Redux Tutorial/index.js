
const redux = require('redux')
const reduxLogger = require('redux-logger')
const createStore = redux.createStore
const bindActionCreators = redux.bindActionCreators//klo make bindActionCreators
const combineReducers = redux.combineReducers//buat gabungin reducer
const applyMiddleware = redux.applyMiddleware//buat nambahin fitur, buat fitur yg mau ditambahin bisa cek https://www.npmjs.com/
const logger = reduxLogger.createLogger()//contoh fitur yg diinstall cek line 87

//action
const CAKE_ORDERED = 'CAKE_ORDERED' //deklarasi action type
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'
const ICE_CREAM_ORDERED = 'ICE_CREAM_ORDERED' 
const ICE_CREAM_RESTOCKED = 'ICE_CREAM_RESTOCKED'

function orderCake(qty = 1){
    return{
    type : CAKE_ORDERED,
    payload : qty
    }
}
function cakeRestocked(qty = 1){
    return{
    type : CAKE_RESTOCKED,
    payload : qty
    }
}
function orderIceCream(qty = 1){
    return{
    type : ICE_CREAM_ORDERED,
    payload : qty
    }
}
function iceCreamRestocked(qty = 1){
    return{
    type : ICE_CREAM_RESTOCKED,
    payload : qty
    }
}
//reducer
const cakeState = {
    numOfCake: 10

}//nilai awal
const iceCreamState = {
    numOfIceCream: 50

}
//multiple reducer
const cakeReducer = (state = cakeState,action) => {
    switch(action.type){
        case CAKE_ORDERED:
            return{
                ...state,
                numOfCake: state.numOfCake - 1//props pake :
            }//klo ada beberapa properti tambahin spread operator jadi ....state,properti: value 
        case CAKE_RESTOCKED:
            return{
                ...state,
                numOfCake: state.numOfCake + action.payload
            }
        default :
            return state
    }
}
const iceCreamReducer = (state = iceCreamState,action) => {
    switch(action.type){
        case ICE_CREAM_ORDERED:
            return{
                ...state,
                numOfIceCream: state.numOfIceCream - 1//props pake :
            }//klo ada beberapa properti tambahin spread operator jadi ....state,properti: value 
        case ICE_CREAM_RESTOCKED:
            return{
                ...state,
                numOfIceCream: state.numOfIceCream + action.payload
            }
        default :
            return state
    }
}
//store
const rootReducer = combineReducers({
    cake : cakeReducer,
    iceCream : iceCreamReducer
})//karana beberapa reducer jadi reducer digabungin jadi 1 dulu sebelum di-pass ke store
const store = createStore(rootReducer,applyMiddleware(logger))//holds app state 
//buat akses statenya kayak mau akses value (kayak ice cream ada berapa jumlahnya) jadinya state.iceCream.numOfIceCream

console.log('initial state',store.getState())//allow access via getState()
const unsubscribe = store.subscribe(() => {})//allow state to be updated  via getState()

const actions = bindActionCreators({orderCake,cakeRestocked,orderIceCream,iceCreamRestocked},store.dispatch)//klo make bindActionCreators
/* store.dispatch(orderCake())//register listener via subscribe(listener)
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(cakeRestocked(4)) */
actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.cakeRestocked(4)
actions.orderIceCream()
actions.iceCreamRestocked(5)


unsubscribe()//handles unregistering of listeners via the function returned by subscribe(listener) 


