import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartOpen: false,
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
        console.log("item in cart already");
        state.cart = state.cart = state.cart.map((item) => {
          if (item.id === action.payload.item.id) {
            item.count += action.payload.item.count;
            console.log(`adding ${action.payload.item.count} to item count`);
          }
          return item;
        });
        // itemInCart.quantity;
      } else {
        console.log("item not in cart already");
        console.log(itemInCart);
        console.log(action.payload.item.id);
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
  }, //end reducers
});

export const {
  setItems,
  addToCart,
  decreaseCount,
  increaseCount,
  setIsCartOpen,
  removeFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
