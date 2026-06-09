 import { createAsyncThunk } from "@reduxjs/toolkit"
 import api from "./common_api"

 const borrow_return = async({req,data})=>{
const res =  await api.post(`${import.meta.env.VITE_BORROW_RETURN}/${req}`,data)
  console.log("FINAL URL:", import.meta.env.VITE_BORROW_RETURN);
  return res.data
 }

 const borrow_return_thunk = createAsyncThunk(
    "borrow_return/req",async({req,data},thunkApi)=>{

try{
    const response = await  borrow_return({req,data})
    return response
}catch(err){
    return thunkApi.rejectWithValue(err.response?.data?.message || "you already requested this ")
}



    }
 )

export default borrow_return_thunk