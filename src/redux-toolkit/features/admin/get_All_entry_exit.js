import { createSlice } from "@reduxjs/toolkit";
import get_entry_exit_thunk from "../../Admin/get_entry_exit.js";


const entry_exit_slice = createSlice({
    name:"entry_exit",
    initialState:{
        loading:false,
        iserror:null,
        data:[],
        success:false
    },
    extraReducers:(builder)=>{
     builder
     .addCase(get_entry_exit_thunk .fulfilled,(state,action)=>{
        state.loading=false;
        state.data=action.payload;
        state.success=true
     })
      .addCase(get_entry_exit_thunk.pending,(state,action)=>{
        state.loading=true;
     })
      .addCase(get_entry_exit_thunk.rejected,(state,action)=>{
        state.loading=false;
      state.iserror=action.payload
        state.success=false
     })

    }
})
export default entry_exit_slice.reducer
