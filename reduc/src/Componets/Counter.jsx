import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../Store/Slices/CounterSlices'
import { useDispatch, useSelector } from 'react-redux'


export function Counter() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}