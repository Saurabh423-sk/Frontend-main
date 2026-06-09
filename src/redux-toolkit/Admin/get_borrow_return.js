import { createAsyncThunk } from "@reduxjs/toolkit"
import api from "../all_api/common_api.js"

const get_borrow_return_api = async()=>{
    const res = await api.get(import.meta.env.VITE_GET_BORROW_RETURN)
    return res.data

}

const get_borrow_return_thunk = createAsyncThunk(
    "get/borrow_return", async(_,thunkApi)=>{
        try{
            return get_borrow_return_api()
        }
        catch(err){
            thunkApi.rejectWithValue(err.message)
        }
    }
)

export default get_borrow_return_thunk