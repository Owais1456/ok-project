// src/store.js
import {  configureStore } from '@reduxjs/toolkit'
import CounterSlices from './Slices/CounterSlices'

export const store = configureStore({
  reducer: {
    counter: CounterSlices
  }
})
