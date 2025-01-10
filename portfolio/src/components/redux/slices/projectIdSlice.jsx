/** @format */

import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const projectIdSlice = createSlice({
  name: "programes",
  initialState: {
    projectId: [],
  },
  reducers: {
    addProjectId(state, action) {
      state.projectId = action.payload;
      console.log( state.projectId);
    },
    
  },
});

export const { addProjectId } = projectIdSlice.actions;
export default projectIdSlice.reducer;
