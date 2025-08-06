import { createSlice } from "@reduxjs/toolkit";

let SnackFormSlice = createSlice({
  name: "snackForm",
  initialState: {
    openSnackForm: false,
    message: "",
  },
  reducers: {
    showSnack: (state, action) => {
      state.openSnackForm = true;
      state.message = action.payload;
    },
    hidSnack: (state) => {
      state.openSnackForm = false;
      state.message = "";
    },
  },
});

export let SnackFormReducer = SnackFormSlice.reducer;
export let SnackFormActions = SnackFormSlice.actions;
