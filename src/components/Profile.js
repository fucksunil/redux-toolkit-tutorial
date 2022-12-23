import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {fetchName, updateStatus} from '../action';

function Profile() {

    const { name, age, status } = useSelector((state) => state)

    const dispatch = useDispatch()
    const updateAge = (age) => {
        dispatch({type:"UPDATE_AGE", payload:age})
    }
    
    const updateName = async () => {
        // const res = await fetch('https://jsonplaceholder.typicode.com/users')
        // const result = await res.json()
        // console.log(result)
        // dispatch({type:"UPDATE_NAME", payload:result[0].name})

        dispatch(fetchName())
    }

    const changeStatus = (status) => {
        dispatch(updateStatus(status))
    }


    return (
        <div>
            <h2>My name is {name}</h2>
            <h2>My age is {age}</h2>
            <h2>My status is {status}</h2>
            <button onClick={()=> updateAge(40)}>update age</button>
            <button onClick={()=> updateName()}>update name</button>
            <button onClick={()=> changeStatus("single")}>update status</button>
        </div>
    )
}

export default Profile