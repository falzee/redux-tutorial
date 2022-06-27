//immer tutorial kode di line 34
const redux = require('redux')
const createStore = redux.createStore
const produce = require('immer').produce

const initialState = {
    nama : 'Abdul',
    alamat : {
        jalan: 'perum',
        kota: 'Semarang',
        negara: 'INA'
    }
}
const JALAN_UPDATE = 'JALAN_UPDATE'

function updateJalan(jalan){
    return{
    type : JALAN_UPDATE,
    payload : jalan
    }
}

const reducer = (state = initialState,action) => {
    switch(action.type){
        case JALAN_UPDATE:
            /* return{
                ...state,
                alamat: {
                    ...state.alamat,
                    jalan: action.payload
                }
                
            } */
            //klo pake immer jadi kayak gini
            return produce(state,(draft)=>{
                draft.alamat.jalan = action.payload
            })
        default :
            return state
    }
}
const store = createStore(reducer)//holds app state
//buat akses statenya kayak mau akses value (kayak ice cream ada berapa jumlahnya) jadinya state.iceCream.numOfIceCream

console.log('initial state',store.getState())//allow access via getState()
const unsubscribe = store.subscribe(() => console.log('Update Store',store.getState()))//allow state to be updated  via getState()

store.dispatch(updateJalan('perum jalan'))

unsubscribe()