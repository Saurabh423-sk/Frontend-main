import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../api/axios";

const login_thunk = createAsyncThunk(
  "/auth/login",
  async (data, thunkApi) => {
    try {
      const res = await API.post("/auth/login", data);
      return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue(
        err.response?.data || { message: "login failed" }
      );
    }
  }
);

export default login_thunk;