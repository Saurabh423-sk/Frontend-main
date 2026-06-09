import { createSlice } from "@reduxjs/toolkit";
import check_thunk from "../all_api/check_api.js";

const initialState = {
  user: null,
  isLoading: false,
  success: false,
  isError: null,
  message: null,
  detail:null
};

const profile_slice = createSlice({
  name: "profile",
  initialState,
  reducers: {
   
    clearProfile: (state) => {
      state.user = null;
      state.success = false;
      state.isError = null;
      state.message = null;
      state.isLoading = false;
    },
  },

  extraReducers: (builder) => {
    builder
      
      .addCase(check_thunk.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
        state.success = false;
      })

     
      .addCase(check_thunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.success = action.payload.success;
        state.message = action.payload.message;

        // Store only actual user data
        state.user = action.payload.data;
        state.detail=action.payload
      })

      
      .addCase(check_thunk.rejected, (state, action) => {
        state.isLoading = false;
        state.success = false;
        state.user = null;

        state.isError =
          action.payload?.message ||
          action.error?.message ||
          "Something went wrong";
      });
  },
});

export const { clearProfile } = profile_slice.actions;

export default profile_slice.reducer;