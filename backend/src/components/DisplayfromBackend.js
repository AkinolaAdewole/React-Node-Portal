import React, { useState } from 'react'
import axios from 'axios'

const DisplayfromBackend = () => {
    const [users, setUsers]=useState([])
    
    const url='http://localhost:4500/todo'
    const disp=()=>{
    }
    axios.get(url).then((res)=>{
      // console.log(res.data.allUser)
      setUsers(res.data.allUser)
    })
    
    
  return (
    <>

    <table className='table table-responsive'>
        <thead>       
          <tr>
            <td>index</td>
            <td>Firstname</td>
            <td>Lastname</td>
            <td>id</td>
            <td>Action</td>
          </tr>
       </thead>
    {users.map((todo,index)=>(
       <tbody>
        <tr>
          <td>{index+1}</td>
          <td> {todo.firstName}</td> 
          <td>{todo.lastName}</td>
          <td>{todo._id}</td>
          <td><div className='btn'>delete</div></td>
        </tr>
       </tbody>
       ))}
      </table>
    
    <button onClick={disp}>send</button>
    </>
  )
}

export default DisplayfromBackend