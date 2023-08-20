import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bgTexture: null,
  events: [],
};

export const themeSlice = createSlice({
  name: "themeSlice",
  initialState,

  reducers: {
    addBgTexture: (state, { payload }) => {
      state.bgTexture = payload;
      // console.log(payload);
      localStorage.setItem("bgTexture", JSON.stringify(payload));
    },
    addEvent: (state, { payload }) => {
      state.events = [...state.events, payload];
    },
  },
});

export const { addBgTexture, addEvent } = themeSlice.actions;
export default themeSlice.reducer;
