import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./themeSlice";
import authSlice from "./authSlice";
import { authApi } from "./api/authApi";
import showComponentsSlice from "./showComponentsSlice";

export const store = configureStore({
  reducer: {
    themeSlice: themeSlice,
    [authApi.reducerPath]: authApi.reducer,
    authSlice: authSlice,
    showComponentsSlice: showComponentsSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});
