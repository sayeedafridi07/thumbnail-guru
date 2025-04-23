import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("token"))
    : null,
  refreshToken: localStorage.getItem("refreshToken")
    ? JSON.parse(localStorage.getItem("refreshToken"))
    : null,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
      localStorage.setItem("token", JSON.stringify(action.payload));
    },
    setRefreshToken(state, action) {
      state.refreshToken = action.payload;
      localStorage.setItem("refreshToken", JSON.stringify(action.payload));
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const { setToken, setRefreshToken, setLoading } = authSlice.actions;

export default authSlice.reducer;
