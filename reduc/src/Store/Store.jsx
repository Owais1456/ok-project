
import { configureStore } from '@reduxjs/toolkit'
import CounterSlices from './Slices/CounterSlices'

export default configureStore({
  reducer: {
    counter: CounterSlices
  }
})