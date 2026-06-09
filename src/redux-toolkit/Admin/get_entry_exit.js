import { createAsyncThunk } from "@reduxjs/toolkit"
import api from "../all_api/common_api.js"

const get_entry_exit = async()=>{
    const res = await api.get(import.meta.env.VITE_GET_ENTRY_EXIT_DATA)
    return res.data

}

const get_entry_exit_thunk = createAsyncThunk(
    "get/entry_exit", async(_,thunkApi)=>{
        try{
            return get_entry_exit()
        }
        catch(err){
            thunkApi.rejectWithValue(err.message)
        }
    }
)

export default get_entry_exit_thunk