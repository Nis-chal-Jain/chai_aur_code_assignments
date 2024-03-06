import React, {  useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Github() {
  const {username}=useParams('Nis-chal-jain')
  const [data,setdata]=useState([])
  useEffect(()=>{
     fetch(`https://api.github.com/users/${username}`)
    .then((req)=>req.json())
    .then((req)=>setdata(req))
  },[])

 
  return (
    <div className='align'>
      <h1 className='bg-orange-500 text-3xl p-3 m-3'>{data.followers}</h1>
      <img src={data.avatar_url} alt="" />
    </div>
  )
}

export default Github