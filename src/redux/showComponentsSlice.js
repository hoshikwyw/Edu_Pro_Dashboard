import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showComponents: "Dashboard",
};

export const showComponentsSlice = createSlice({
  name: "showComponentsSlice",
  initialState,

  reducers: {
    setShowComponents: (state,{payload})=>{
        state.showComponents = payload
    }
  },
});

export const {setShowComponents } = showComponentsSlice.actions;
export default showComponentsSlice.reducer;
