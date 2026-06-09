import { createAsyncThunk } from "@reduxjs/toolkit"
import api from "../all_api/common_api.js"

const borrow_return_status_api= async(id)=>{
    const res = await api.patch(import.meta.env.VITE_APPROVE_BORROW_RETURN+id)
    return res.data
}

const borrow_return_status_thunk=createAsyncThunk(
    "borrow_return/status",
    async(id,thunkApi)=>{
      try{
          return await borrow_return_status_api(id)
      }
      catch(err){
       thunkApi.rejectWithValue(err.message)
      }

    }
)

export default borrow_return_status_thunk