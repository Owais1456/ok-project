// src/Counter.js
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { increment, decrement, incrementByAmount } from './counterSlice'
import './Counter.css'
import { decrement, increment, incrementByAmount } from '../Store/Slices/CounterSlices'

const Counter = () => {
  const dispatch = useDispatch()
  const count = useSelector(state => state.counter.value)

  return (
    <div className="counter-container">
      <h1 className="counter-value">{count}</h1>
      <div className="button-group">
        <button className="button" onClick={() => dispatch(increment())}>Increment</button>
        <button className="button" onClick={() => dispatch(decrement())}>Decrement</button>
        <button className="button" onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
      </div>
    </div>
  )
}

export default Counter
