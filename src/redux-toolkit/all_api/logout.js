import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "./common_api.js";

const logoutApi = async()=>{
  const res = await api.post(import.meta.env.VITE_LOGOUT)
  return res.data

} 

const logout_thunk = createAsyncThunk(
    "logout/user",
    async()=>{
       return  await logoutApi()
    }
)

export default logout_thunk