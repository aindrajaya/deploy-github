import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function CounterAppRedux() {
  const count = useSelector(state => state.count) //get data dari global store
  const dispatch = useDispatch() //send data/actions ke global store

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=> dispatch({type: "INCREMENT"})}>Increment</button>
      <button onClick={()=> dispatch({type: "DECREMENT"})}>Decrement</button>
      <button onClick={()=> dispatch({type: "RESET"})}>Reset</button>
    </div>
  )
}
