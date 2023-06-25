import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bgTexture: "",
  events: [],
};

export const themeSlice = createSlice({
  name: "themeSlice",
  initialState,
  reducers: {
    addBgTexture: (state, { payload }) => {
      state.bgTexture = payload;
      localStorage.setItem("bgTexture",state.bgTexture);
    },
    addEvent: (state, { payload }) => {
      state.events = [...state.events, payload];
    },
  },
});

export const { addBgTexture, addEvent } = themeSlice.actions;
export default themeSlice.reducer;
