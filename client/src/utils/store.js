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

const userReducer = createSlice({
  name: "user",
  initialState: {
    user: {},
  },
  reducers: {
    setUserData: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const store = configureStore({
  reducer: {
    session: sessionReducer.reducer,
    user: userReducer.reducer,
  },
});

export const { signIn, signOut } = sessionReducer.actions;
export const { setUserData } = userReducer.actions;
