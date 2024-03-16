import React, { useContext } from 'react'
import Usercontext from '../context/UserContext'

function Profile() {
  const {user} = useContext(Usercontext)
  // if(user.username==null) return(<h2>pls login</h2>)
  if(!user) return <h1>Not logged in </h1>
  return (
    <div>
        <h2>User:{user.username}</h2>
    </div>
  )
}

export default Profile