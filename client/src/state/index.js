import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartOpen: false,
  isMenuOpen: false,
  cart: [],
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.item.id
      );
      if (itemInCart) {
        state.cart = state.cart = state.cart.map((item) => {
          if (item.id === action.payload.item.id) {
            item.count += action.payload.item.count;
          }
          return item;
        });
        // itemInCart.quantity;
      } else {
        state.cart = [...state.cart, action.payload.item];
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    increaseCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          item.count++;
        }
        return item;
      });
    },
    decreaseCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id && item.count > 1) {
          item.count--;
        }
        return item;
      });
    },
    setIsCartOpen: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
    setIsMenuOpen: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
  }, //end reducers
});

export const {
  setItems,
  addToCart,
  decreaseCount,
  increaseCount,
  setIsCartOpen,
  setIsMenuOpen,
  removeFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
