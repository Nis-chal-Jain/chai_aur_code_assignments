import React, { useContext, useState } from 'react'
import Usercontext from '../context/UserContext'

function Login() {
    const [username,setUsername] = useState()
    const [Password,setpassword] = useState(null)
    const {setUser} = useContext(Usercontext)
    const handleSubmit = (e)=>{
        e.preventDefault()
        setUser({username,Password})
    }
  return (
    <div>
        <h2>Username</h2>
        <input type="text"
        placeholder='Username'
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        />
        <h2>Password</h2>
        <input type="text"
        placeholder='Password'
        value={Password}
        onChange={(e)=>setpassword(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login