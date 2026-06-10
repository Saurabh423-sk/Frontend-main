import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../api/axios";

const signup_thunk = createAsyncThunk(
  "/auth/signup",
  async (data, thunkApi) => {
    try {
      const res = await API.post(import.meta.env.VITE_SIGNUP, data);
      return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue(
        err.response?.data || { message: "Signup failed" }
      );
    }
  }
);

export default signup_thunk;