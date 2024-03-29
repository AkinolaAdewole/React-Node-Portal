import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import {io} from 'socket.io-client'
const socket = io('http://localhost:4500');

const Signup = () => {

  useEffect(() =>{
    socket.emit("send-user",{firstname:"Akinola"});
    socket.on("user-sent",(res)=>{
      console.log(res)
    })
  }, [])
  

    const [firstName, setFirstName] =useState(null)
    const [lastName, setLastName]=useState(null)
    const [email, setEmail] = useState("")
    const [password, setPassWord]=useState(null)
    const [image,setImage]=useState("")

    // let allUser={firstName,lastName,email,password,image}
    const register=()=>{
      axios.post(
        'http://localhost:4500/signup', {firstName,lastName,email,
        password}).then(
        (result)=>{

        }
      )
    }
  return (
    <>

    <nav>
      <div className='btn'> <Link to="/login" >login</Link></div>
    </nav>


    <div className='container-fluid'>
        <div className='row'>
            <div className="col-9 shadow-sm mx-auto">
                <form action="">
                    <input type="text" placeholder='Firstname' className='form-control'
                     onChange={(e)=>setFirstName(e.target.value)} />

                     <input type="text" placeholder='Lastname' className='form-control'
                      onChange={(e)=>setLastName(e.target.value)} />

                      <input type="text" placeholder='Email' className='form-control'
                       onChange={(e)=>setEmail(e.target.value)} />

                       <input type="file" className='form-control'
                       onChange={(e)=>setImage(e.target.value)} />

                       <input type="password" placeholder='Password' className='form-control'
                        onChange={(e)=>setPassWord(e.target.value)} />

                        <div className='btn' onClick={register}>SUBMIT</div>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Signup