import  book_bycourse_thunk from "../all_api/get_book_bycourse_api.js"
import { createSlice } from "@reduxjs/toolkit"

const book_bycourse_slice = createSlice({
    name:"book-by-course",
    initialState:{
        data:[],
        iserror:null,
        isloading:false
    },
  
     extraReducers:(builder=>{ 
        builder 
        .addCase(book_bycourse_thunk.pending,(state)=>{ state.isloading=true; }) 
        .addCase(book_bycourse_thunk.fulfilled,(state,action)=>{ state.isloading=false; state.data=action.payload;
            
         }) 
        .addCase(book_bycourse_thunk.rejected,(state,action)=>{ state.isloading=false;  state.iserror=action.payload; }) }) })
        
export default book_bycourse_slice.reducer