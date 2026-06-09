import { createSlice } from "@reduxjs/toolkit"
 import signup_thunk from "../all_api/signup_api.js" 
 const signup_slice = createSlice({
     name:"user_data", 
     initialState:{ user:null, success:false, isloading:false, iserror:null, message:null }
     
     ,reducers:{},
     
     extraReducers:(builder=>{ 
        builder 
        .addCase(signup_thunk.pending,(state)=>{ state.isloading=true; }) 
        .addCase(signup_thunk.fulfilled,(state,action)=>{ state.isloading=false; state.user =action.payload.user; state.success=true; state.message=action.payload.message }) 
        .addCase(signup_thunk.rejected,(state,action)=>{ state.isloading=false; state.success=false; state.iserror=action.payload.message; state.user=null }) }) })
        
        
        export default signup_slice.reducer