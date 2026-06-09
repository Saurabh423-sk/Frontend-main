import { createSlice } from "@reduxjs/toolkit";
import students_thunk from "../../Admin/get_students.js";

const students_slice = createSlice({
    name:"students",
    initialState:{
        loading:false,
        iserror:null,
        data:[],
        success:false
    },
    extraReducers:(builder)=>{
     builder
     .addCase(students_thunk.fulfilled,(state,action)=>{
        state.loading=false;
        state.data=action.payload;
        state.success=true
     })
      .addCase(students_thunk.pending,(state,action)=>{
        state.loading=true;
     })
      .addCase(students_thunk.rejected,(state,action)=>{
        state.loading=false;
      state.iserror=action.payload
        state.success=false
     })

    }
})
export default students_slice.reducer