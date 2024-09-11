import React from 'react'
import { useSelector } from 'react-redux'

const Hader = () => {
  const  {counter} = useSelector(state => state.counterReducer)

  return (
    <div>
      
    </div>
  )
}

export default Hader
