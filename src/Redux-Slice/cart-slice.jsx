import { createSlice } from "@reduxjs/toolkit";

let getCartFromStorage = () => {
  const data = localStorage.getItem("cart");
  return data ? JSON.parse(data) : [];
};

let saveCartToStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

let CartSlice = createSlice({
  name: "cart",
  initialState: getCartFromStorage(), 
  reducers: {
    addBook: (state, action) => {
      let book = action.payload;
      let exist = state.find((item) => item.id === book.id);

      let newCart;
      if (exist) {
        
        newCart = state.map((item) =>
          item.id === book.id ? { ...item, ...book } : item
        );
      } else {
        newCart = [...state, book];
      }

      saveCartToStorage(newCart);

      return newCart;
    },

    removeBook: (state, action) => {
      const id = action.payload;
      const newCart = state.filter((item) => item.id !== id);
      saveCartToStorage(newCart);
      return newCart;
    },
  },
});

export const cartReducer = CartSlice.reducer;
export const cartActions = CartSlice.actions;
