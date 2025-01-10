/** @format */

import { configureStore } from "@reduxjs/toolkit";
// import todosReducer from '../features/todos/todosSlice'
// import filtersReducer from '../features/filters/filtersSlice'
import projectIdSlice from "./slices/projectIdSlice";
import favoritesSlice from "./slices/favoritesSlice";
export const store = configureStore({
  reducer: {
    projectIdSlice: projectIdSlice,
    favoritesSlice: favoritesSlice,
    // filters: filtersReducer,
  },
});
