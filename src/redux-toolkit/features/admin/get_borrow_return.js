import { createSlice } from "@reduxjs/toolkit";
import get_borrow_return_thunk from "../../Admin/get_borrow_return.js";


const borrow_return_slice = createSlice({
    name:"get_borrow_return",
    initialState:{
        loading:false,
        iserror:null,
        data:[],
        success:false
    },
    extraReducers:(builder)=>{
     builder
     .addCase(get_borrow_return_thunk.fulfilled,(state,action)=>{
        state.loading=false;
        state.data=action.payload;
        state.success=true
     })
      .addCase(get_borrow_return_thunk.pending,(state,action)=>{
        state.loading=true;
     })
      .addCase(get_borrow_return_thunk.rejected,(state,action)=>{
        state.loading=false;
      state.iserror=action.payload
        state.success=false
     })

    }
})
export default borrow_return_slice.reducer
