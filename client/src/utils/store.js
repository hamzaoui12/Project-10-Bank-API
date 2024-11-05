import { configureStore, createSlice } from "@reduxjs/toolkit";

const sessionReducer = createSlice({
  name: "session",
  initialState: {
    token: null,
  },
  reducers: {
    signIn: (state, action) => {
      state.token = action.payload.token;
    },
    signOut: (state) => {
      state.token = null;
    },
  },
});

export const store = configureStore({
  reducer: {
    session: sessionReducer.reducer,
  },
});

export const { signIn, signOut } = sessionReducer.actions;
