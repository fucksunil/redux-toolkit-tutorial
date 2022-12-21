import React from 'react'
import { useSelector } from 'react-redux';

function Profile() {

    const {name, age, status} = useSelector((state)=> {
        return state
    })

  return (
    <div>
        <h2>I am {name}</h2>
        <h2>My age is {age}</h2>
        <h2>My status is {status}</h2>
    </div>
  )
}

export default Profile