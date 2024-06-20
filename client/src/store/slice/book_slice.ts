import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Book, InitialStateType } from "../../types";

const initialState: InitialStateType = {
  open: false,
  update: false,
  add: false,
  item: {
    title: "",
    desc: "",
  }
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setDialog: (
      state,
      action: PayloadAction<{ open: boolean; add?: boolean; update?: boolean }>
    ) => {
      state.open = action.payload.open;
      state.add = action.payload.add ?? false;
      state.update = action.payload.update ?? false;
    },
    setItem: (state, action: PayloadAction<{ item: Book }>) => {
      state.item = action.payload.item;
    }
  }
});
export const { setDialog, setItem } = bookSlice.actions;

export default bookSlice.reducer;
