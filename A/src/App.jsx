import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Create from './Create'
import Updata from './Updata'

import Read from './Read'
import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => {
  return (
    
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='create' element={<Create/>}/>
        <Route path='updata/:id' element={<Updata/>}/>
        <Route path='read/:id' element={<Read/>}/>

      </Routes>
    
  )
}

export default App
