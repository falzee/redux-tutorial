
const redux = require('redux')
const createStore = redux.createStore
const bindActionCreators = redux.bindActionCreators//klo make bindActionCreators
//action
const CAKE_ORDERED = 'CAKE_ORDERED' //buat kondisi
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'

function orderCake(){
    return{
    type : CAKE_ORDERED,
    payload : 1
    }
}
function cakeRestocked(qty = 1){
    return{
    type : CAKE_RESTOCKED,
    payload : qty
    }
}
//reducer
const intialState = {
    numOfCake: 10

}//nilai awal
const reducer = (state = intialState,action) => {
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
//store
const store = createStore(reducer)//holds app state

console.log('initial state',store.getState())//allow access via getState()
const unsubscribe = store.subscribe(() => console.log('Update Store',store.getState()))//allow state to be updated  via getState()

const actions = bindActionCreators({orderCake,cakeRestocked},store.dispatch)//klo make bindActionCreators
/* store.dispatch(orderCake())//register listener via subscribe(listener)
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(cakeRestocked(4)) */
actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.cakeRestocked(4)

unsubscribe()//handles unregistering of listeners via the function returned by subscribe(listener) 


