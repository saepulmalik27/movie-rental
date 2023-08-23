import { TMovie } from "@/lib/types/movie.type";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TinitialState = {
  items: TMovie[];
};

const initialState: TinitialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<TMovie>) => {
      state.items.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<TMovie>) => {
      state.items = state.items.filter(
        (item) => item.episode_id !== action.payload.episode_id
      );
    },
    clearCart: (state) => {
      state.items = [];
    },
    listCart: (state) => {
      state.items;
    },
  },
});

export const { addToCart, removeFromCart, clearCart, listCart } =
  cartSlice.actions;

export default cartSlice.reducer;
