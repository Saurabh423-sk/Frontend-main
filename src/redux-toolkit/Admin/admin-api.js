import { createAsyncThunk} from "@reduxjs/toolkit";
import api from "../all_api/common_api.js"
const admin_api = async(data)=>{

    const res = await api.post(import.meta.env.VITE_ADMIN,data);
    return res.data
    console.log(res)

}


const admin_thunk = createAsyncThunk(
    "/auth/admin",async(data,thunkapi)=>{
try {
    return await admin_api(data)
    
    
} catch (error) {
    return thunkapi.rejectWithValue(error.response?.data)
}


    }
)

export default admin_thunk