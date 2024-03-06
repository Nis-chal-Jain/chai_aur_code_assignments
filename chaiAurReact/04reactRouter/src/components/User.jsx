import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const {useid} = useParams(123)
  return (
    <div>User:{useid}</div>
  )
}

export default User