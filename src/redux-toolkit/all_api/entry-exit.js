 import { createAsyncThunk } from "@reduxjs/toolkit"
 import api from "./common_api"

 const entry_exit = async(data)=>{
const res =  await api.post(`${import.meta.env.VITE_ENTRY_EXIT}/${data}`)
  return res.data
 }

 const entry_exit_thunk = createAsyncThunk(
    "entry/exit",async(data,thunkApi)=>{

try{
    const response = await  entry_exit(data)
    return response
}catch(err){
    return thunkApi.rejectWithValue(err.response?.data?.message || "you already requested this ")
}



    }
 )

export default entry_exit_thunk