import { createSlice } from "@reduxjs/toolkit";
import get_book_thunk from "../../Admin/get_books.js";


const allbook_slice = createSlice({
    name:"books",
    initialState:{
        loading:false,
        iserror:null,
        data:[],
        success:false
    },
    extraReducers:(builder)=>{
     builder
     .addCase(get_book_thunk .fulfilled,(state,action)=>{
        state.loading=false;
        state.data=action.payload;
        state.success=true
     })
      .addCase(get_book_thunk .pending,(state,action)=>{
        state.loading=true;
     })
      .addCase(get_book_thunk .rejected,(state,action)=>{
        state.loading=false;
      state.iserror=action.payload
        state.success=false
     })

    }
})
export default allbook_slice.reducer
