
import { createSlice } from "@reduxjs/toolkit";;

const favoritesSlice = createSlice({
  name: "favorate",
  initialState: {
    favorites: [],
  },
  reducers: {
    addFavorites(state, action) {
      state.favorites = action.payload;
      console.log(action, state.favorites);
    },
    
  },
});

export const { addFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
