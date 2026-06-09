import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "./common_api.js";

const check_api = async () => {
  const response = await api.get(import.meta.env.VITE_CHECK);
  return response.data;

};

const check_thunk = createAsyncThunk("auth/check", async (_, thunkApi) => {
  try {
    return await check_api();
  } catch (err) {
    return thunkApi.rejectWithValue(
      err.response?.data || { message: "login failed" },
    );
  }
});

export default check_thunk;
