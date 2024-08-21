import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams,  } from 'react-router-dom'

const Updata = () => {



  // const [data,setData] = useState([])
  const {id} = useParams()

  const [value,setValue] = useState({
    name:"",
    email:"",
    phone:""

  })

  useEffect(()=>{
    axios.get("http://localhost:5000/users/" + id)
    .then(res=>{
      setValue(res.data)
    })
    .catch(err=>console.log(err))
  },[])
  const nav = useNavigate()

  const handleUpdate=(e)=>{
    e.preventDefault()
    axios.put("http://localhost:5000/users/"+ id,value)
    .then(res=>{
      console.log(res)
      nav('/')
    })
    .catch(err=>console.log(err))
  }
  
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
      <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
      <h1>Update User</h1>
      <form onSubmit={handleUpdate}>
        <div className='mb-2'>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" className='form-control' placeholder='Enter Name' 
       value={value.name} onChange={e=>setValue({...value,name:e.target.value})} />
        </div>

        <div className='mb-2'>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" className='form-control' placeholder='Enter Email' 
       value={value.email} onChange={e=>setValue({...value,email:e.target.value})} />
        </div>

        <div className='mb-2'>
        <label htmlFor="phone">Phone:</label>
        <input type="phone" name="phone" className='form-control' placeholder='Enter Phone' 
         value={value.phone} onChange={e=>setValue({...value,phone:e.target.value})}/>
        </div>
        <button className='btn btn-success'>Update</button>
        <Link to="/" className='btn btn-primary ms-3'>Back</Link>
      </form>
      </div>
    </div>
  )}










export default Updata
