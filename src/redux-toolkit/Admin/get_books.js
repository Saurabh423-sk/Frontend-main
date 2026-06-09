import { createAsyncThunk } from "@reduxjs/toolkit"
import api from "../all_api/common_api.js"

const get_book_api = async()=>{
    const res = await api.get(import.meta.env.VITE_GET_BOOKS)
    return res.data

}

const get_book_thunk = createAsyncThunk(
    "get/books", async(_,thunkApi)=>{
        try{
            return get_book_api()
        }
        catch(err){
            thunkApi.rejectWithValue(err.message)
        }
    }
)

export default get_book_thunk