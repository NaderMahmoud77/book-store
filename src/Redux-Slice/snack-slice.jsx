import { createSlice } from "@reduxjs/toolkit";

let SnackSlice = createSlice({
  name: "snack",
  initialState: {
    openSnack: false,
    message: "",
  },
  reducers: {
    showSnack: (state, action) => {
      let open = action.payload.open;
      let messg = action.payload.message;

      state.openSnack = open;
      state.message = messg;
    },
    hidSnack: (state) =>{
        state.openSnack = false
    }
  },
});

export let SnackReducer = SnackSlice.reducer;
export let SnackActions = SnackSlice.actions;
