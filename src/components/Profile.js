import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

function Profile() {

    const {name, age, status} = useSelector((state)=> {
        return state
    })

    const dispatch = useDispatch();
    console.log(dispatch)
    const updateAge = (age) => {
        dispatch({type:"UPDATE_AGE", payload: age})
    }

  return (
    <div>
        <h2>I am {name}</h2>
        <h2>My age is {age}</h2>
        <h2>My status is {status}</h2>
        <button onClick={()=>updateAge(40)}>Update Age</button>
    </div>
  )
}

export default Profile