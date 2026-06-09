import { createAsyncThunk } from "@reduxjs/toolkit"
import api from "../all_api/common_api.js"

const entry_exit_status_api= async(id)=>{
    const res = await api.patch(import.meta.env.VITE_APPROVE_ENTRY_EXIT+id)
    return res.data
}

const entry_exit_status_thunk=createAsyncThunk(
    "entry_exit/status",
    async(id,thunkApi)=>{
      try{
          return await entry_exit_status_api(id)
      }
      catch(err){
       thunkApi.rejectWithValue(err.message)
      }

    }
)

export default entry_exit_status_thunk