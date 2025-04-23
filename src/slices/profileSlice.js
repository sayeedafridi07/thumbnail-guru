import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: localStorage.getItem("profile")
    ? JSON.parse(localStorage.getItem("profile"))
    : null,
  loading: false,
};

const profileSlice = createSlice({
  name: "profile",
  initialState: initialState,
  reducers: {
    setProfile(state, action) {
      state.profile = action.payload;
      localStorage.setItem("profile", JSON.stringify(action.payload));
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const { setProfile, setLoading } = profileSlice.actions;

export default profileSlice.reducer;
