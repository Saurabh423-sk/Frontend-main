import api from "../all_api/common_api"
import { createAsyncThunk } from "@reduxjs/toolkit"
const check_admin_api = async()=>{
    const res = await api.get(import.meta.env.VITE_CHECK_ADMIN)
    return res.data
}

const check_admin_thunk = createAsyncThunk(
    "check/admin" , async(_,thunkApi)=>{

try {
    return await check_admin_api()
} catch (err) {
    return thunkApi.rejectWithValue(err.message)
}




    }
)

export default check_admin_thunk