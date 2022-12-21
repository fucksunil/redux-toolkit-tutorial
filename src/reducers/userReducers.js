
import { createReducer } from "@reduxjs/toolkit"

const initialState = {
    name: "Ramesh",
    age: 20,
    status: "coder"
  }


  //THIS IS OLD STYLE TO STATE DATA CHANGE

//  export default (state=initialState, action)=>{
//     if(action.type === "UPDATE_AGE"){
//         return {
//             ...state,
//             age: action.payload
//         }
//     }
//     return state
// }


// THIS IS NEW STYLE TO STATE/ACTION DATA CHANGES
export default createReducer(initialState, (builder)=>{
    builder.addCase('UPDATE_AGE', (state, action)=>{
        state.age = action.payload
    })
})