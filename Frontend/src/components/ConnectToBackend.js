import React, { useState,useRef } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const ConnectToBackend = () => {
    const [firstName, setFirstName] =useState(null)
    const [lastName, setLastName]=useState(null)
    const[date, setDate]=useState(null)
    const [time, setTime]=useState (null)
    const [password, setPassword]=useState(null)
    const [email, setEmail] = useState("")
    const [image, setImage]=useState("")
    const [users, setUsers]=useState([])

    // const firstName=useRef()
    // const lastNameRef= useRef()
    // const dateRef= useRef()
    // const timeRef= useRef()
    // const password=useRef()

  // let allUser={firstName,lastName,date,time,password}
   
  const handleSubmit=(e)=>{
      e.preventDefault()
    
      // let allUser={firstName,lastName,time,date,password}
      axios.post(
        'http://localhost:4500/inputTodo',{firstName, lastName, time,
      date,email, password}
        ).then((result)=>{
          // setUsers({firstName,lastName,date,time,password})
        
        })

        // second method
        // fetch("http://localhost:4800/inputTodo",{
        //     method:"POST",
        //     body:JSON.stringy({name:nameRef.current.value})
        // }).then(res=>res.JSON()).then(data=>{
        //     console.log(data)
        // })
    }

    const hp=(e)=>{
      e.preventDefault()
    }
  return (
    <>
    <nav>
      <div className='btn'> <Link to="/login" >login</Link></div>
    </nav>

    <form action="" onLoad={hp}>
     <div> 
      <input type="text" onChange={(e)=>setFirstName(e.target.value)} placeholder="Firstname"/>
     </div>

    <div>
      <input type="text" onChange={(e)=>setLastName(e.target.value)} placeholder="Lastname"/>
    </div>

    <div>
      <input type="text" placeholder='E-mail' onChange={(e)=>setEmail(e.target.value)} />
    </div>

    <div>
      <input type="time" onChange={(e)=>setTime(e.target.value)} /> 
    </div>

    <div> 
      <input type="date" onChange={(e)=>setDate(e.target.value)}/>
    </div>
    
    <div>
      <input type="password"
       placeholder="password"  onChange={(e)=>setPassword(e.target.value)}/>
    </div>

  

     <button onClick={handleSubmit} >SUBMIT</button>
     
    </form>
    </>
  )
}

export default ConnectToBackend