import { createSlice } from "@reduxjs/toolkit";
import { userInitState } from "../../initStates";

export const userSlice = createSlice({
  name: "user",
  initialState: userInitState,
  reducers: {
    createUser: (state, action) => {
      state.status = action.payload.status;
      state.message = action.payload.message;
    },
    loginUser: (state, action) => {
      state.token = action.payload.token;
      state.isConnected = action.payload.isConnected;
      state.status = action.payload.status;
      state.message = action.payload.message;
    },
    logoutUser: (state, action) => {
      state.profile = userInitState.profile;
      state.token = null;
      state.isConnected = false;
      state.status = action.payload.status;
      state.message = action.payload.message;
    },
    deleteUser: (state, action) => {
      state.profile = userInitState.profile;
      state.token = null;
      state.isConnected = false;
      state.status = action.payload.status;
      state.message = action.payload.message;
    },
    getProfile: (state, action) => {
      state.profile = action.payload.profile;
      state.status = action.payload.status;
      state.message = action.payload.message;
    },
    updateProfile: (state, action) => {
      state.profile = action.payload.profile;
      state.status = action.payload.status;
      state.message = action.payload.message;
    },
    errorUserRequest: (state, action) => {
      state.status = action.payload.status;
      state.message = action.payload.message;
    },
  },
});

export const {
  createUser,
  loginUser,
  logoutUser,
  getProfile,
  updateProfile,
  deleteUser,
  errorUserRequest,
} = userSlice.actions;
export default userSlice.reducer;
