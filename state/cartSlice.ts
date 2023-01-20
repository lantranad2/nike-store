import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IShoe } from "../components/data";
import { RootState } from "./store";
import toast from "react-hot-toast";

interface CartState {
  visible: boolean;
  items: (IShoe & { quantity: number })[];
}

const initialState: CartState = {
  visible: false,
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    openCart: (state) => {
      state.visible = true;
    },

    closeCart: (state) => {
      state.visible = false;
    },

    addToCart: (state, action: PayloadAction<IShoe>) => {
      const idxShoe = state.items.findIndex(
        (shoe) => action.payload.id === shoe.id
      );

      if (idxShoe >= 0) {
        state.items[idxShoe].quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }

      localStorage.setItem("shoes", JSON.stringify(state.items));
      toast.success(`${action.payload.title} Added to Cart`);
    },

    emptyCart: (state) => {
      state.items = [];
      localStorage.setItem("shoes", JSON.stringify(state.items));
      toast.success(`Removed all items in Cart`);
    },

    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem("shoes", JSON.stringify(state.items));
      toast.success(`Removed from Cart`);
    },

    increaseQuantity: (state, action: PayloadAction<string>) => {
      const idxShoe = state.items.findIndex(
        (shoe) => action.payload === shoe.id
      );
      state.items[idxShoe].quantity += 1;
      localStorage.setItem("shoes", JSON.stringify(state.items));
      toast.success(`Increased the quantity`);
    },

    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const idxShoe = state.items.findIndex(
        (shoe) => action.payload === shoe.id
      );
      state.items[idxShoe].quantity -= 1;
      toast.success(`Decreased the quantity`);

      if (state.items[idxShoe].quantity <= 0) {
        state.items = state.items.filter((item) => item.id !== action.payload);
        toast.success(`Removed from Cart`);
      }
      localStorage.setItem("shoes", JSON.stringify(state.items));
    },

    loadCart: (state) => {
      state.items = JSON.parse(localStorage.getItem("shoes") || "[]");
    },
  },
});

export const {
  openCart,
  closeCart,
  addToCart,
  emptyCart,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  loadCart,
} = cartSlice.actions;
export const cartVisible = (state: RootState) => state.cart.visible;
export const cartItems = (state: RootState) => state.cart.items;
export default cartSlice.reducer;
