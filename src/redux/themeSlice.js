import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bgTexture: "linear-gradient(45deg, #1f1f1e, #1f1f1e)",
  events: [],
};

export const themeSlice = createSlice({
  name: "themeSlice",
  initialState,

  reducers: {
    addBgTexture: (state, { payload }) => {
      state.bgTexture = payload;
      localStorage.setItem("bgTexture", JSON.stringify(payload));
    },
    addEvent: (state, { payload }) => {
      state.events = [...state.events, payload];
    },
  },
});

export const { addBgTexture, addEvent } = themeSlice.actions;
export default themeSlice.reducer;
