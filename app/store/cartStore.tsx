"use client";
import { create } from "zustand";

type CartItem = {
  id: number;
  name: string;
  unitPrice: number;
  quantity: number;
  option?: string;
  img: string;
};

type CartState = {
  cart: CartItem[];
  addToCart: (product: CartItem) => void;
  removeFromCart: (id: number, option?: string | null) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartState>((set) => ({
  cart: [],
  addToCart: (product) =>
    set((state) => {
      
      const existingIndex = state.cart.findIndex(
        (i) => i.id === product.id && i.option === product.option
      );

      if (existingIndex > -1) {
        const updated = [...state.cart];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + product.quantity,
        };
        return { cart: updated };
      }

     
      return { cart: [...state.cart, product] };
    }),
  removeFromCart: (id, option) =>
    set((state) => ({
     
      cart: state.cart.filter((i) => !(i.id === id && i.option === option)),
    })),
  clearCart: () => set({ cart: [] }),
}));
