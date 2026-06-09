import { createAsyncThunk } from "@reduxjs/toolkit"
import api from "./common_api.js"

const book_bycourse_api= async(data)=>{
    const res = await api.post(import.meta.env.VITE_GET_BOOK_BYCOURSE,data)
    return res.data


}


const book_bycourse_thunk = createAsyncThunk(
    "books/bycourse",async(data,thunkApi)=>{
        try {
             const response = await book_bycourse_api(data);
             
return response
        } catch (err) {
          return  thunkApi.rejectWithValue(err.message)
        }
    }
)

export default book_bycourse_thunk