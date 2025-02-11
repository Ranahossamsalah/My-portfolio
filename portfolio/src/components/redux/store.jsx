/** @format */

import { configureStore } from "@reduxjs/toolkit";
import projectIdSlice from "./slices/projectIdSlice";
import favoritesSlice from "./slices/favoritesSlice";
export const store = configureStore({
  reducer: {
    projectIdSlice: projectIdSlice,
    favoritesSlice: favoritesSlice,
  },
});
