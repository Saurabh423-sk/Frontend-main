import { createAsyncThunk } from "@reduxjs/toolkit"
import api from "../all_api/common_api.js"
const get_students = async()=>{
     const res = await api.get(import.meta.env.VITE_GET_STUDENTS)
     return res.data
  
}

const students_thunk = createAsyncThunk(
    "get/students", async(_,thunkApi)=>{
       try{
         return await get_students()
       }catch(err){
        thunkApi.rejectWithValue(err.message)
       }

    }
)

export default students_thunk