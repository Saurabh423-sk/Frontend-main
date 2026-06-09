import { createAsyncThunk } from "@reduxjs/toolkit"
import api from "../all_api/common_api.js"

const change_student_status_api= async(id)=>{
    const res = await api.patch(`${import.meta.env.VITE_CHANGE_STUDENT_STATUS}/${id}`)
    return res.data
}

const toggle_student_status_thunk=createAsyncThunk(
    "toggle_student/status",
    async(id,thunkApi)=>{
      try{
          return await change_student_status_api(id)
      }
      catch(err){
       thunkApi.rejectWithValue(err.message)
      }

    }
)

export default toggle_student_status_thunk