import { api } from "@/api/api";
import { configureStore } from "@reduxjs/toolkit";
import filmsReducer from "./slices/filmsSlice";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    filmsReducer,
  },
  middleware: (gDM) => gDM().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
