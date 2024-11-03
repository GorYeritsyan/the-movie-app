import { FilmsSliceInitState } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: FilmsSliceInitState = {
  page: 1,
  paginationPortionNumber: 1,
};

const filmsSlice = createSlice({
  name: "filmsSlice",
  initialState,
  reducers: {
    addPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    increasePageByOne(state) {
      state.page++;
    },
    decreasePageByOne(state) {
      state.page--;
    },
    resetPage(state) {
      state.page = 1;
      state.paginationPortionNumber = 1;
    },

    nextPortion(state) {
      state.paginationPortionNumber++;
    },

    prevPortion(state) {
      state.paginationPortionNumber--;
    },
  },
});

export const {
  addPage,
  increasePageByOne,
  decreasePageByOne,
  resetPage,
  nextPortion,
  prevPortion,
} = filmsSlice.actions;

export default filmsSlice.reducer;
