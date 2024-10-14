import { FilmsSliceInitState } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: FilmsSliceInitState = {
  page: 1,
};

const filmsSlice = createSlice({
  name: "filmsSlice",
  initialState,
  reducers: {
    addPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
  },
});

export const { addPage } = filmsSlice.actions;

export default filmsSlice.reducer;
