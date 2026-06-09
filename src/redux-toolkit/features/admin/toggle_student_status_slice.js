import toggle_student_status_thunk from "../../Admin/toggle_student_status.js"
import { createSlice } from "@reduxjs/toolkit"

const toggle_student_status_slice = createSlice({
    name:"toggle_student_status",
    initialState:{
        iserror:null,
        data:[]
    },
    extraReducers:(builder)=>{
        builder
        .addCase(toggle_student_status_thunk.fulfilled,(state,action)=>{
            state.data=action.payload
        })
        .addCase(toggle_student_status_thunk.rejected,(state,action)=>{
            state.iserror=action.payload
        })
    }
})

export default toggle_student_status_thunk.reducer