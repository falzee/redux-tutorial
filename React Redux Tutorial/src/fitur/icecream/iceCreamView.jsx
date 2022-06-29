import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { ordered,restocked } from './iceCreamSlice'

export const IceCreamView = () => {
    const [value,SetValue] = useState(1)
    const numOfIceCream = useSelector((state)=> state.iceCream.numOfIceCream)
    const dispatch = useDispatch()
    return (
        <div>
        <h2>Number of icecream - {numOfIceCream}</h2>
        <button onClick={()=>dispatch(ordered())}>Order icecream</button>
        <button onClick={()=>dispatch(restocked(value))}>Restock icecream</button>
        <input 
            type="number"
            value={value}
            onChange={(event)=> SetValue(parseInt(event.target.value))}
            min="1"
         />
        </div>
    )
}