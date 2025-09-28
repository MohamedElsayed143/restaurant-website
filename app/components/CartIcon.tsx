"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useCartStore } from "@/app/store/cartStore";

function CartIcon() {
  const cart = useCartStore((state) => state.cart);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Link
      href="/cart"
      className="flex items-center gap-4 px-3 py-1 rounded-md font-bold cursor-pointer 
hover:bg-amber-500 hover:text-white transition duration-300 ease-in-out"
    >
      <div className="relative w-8 h-8 md:w-6 md:h-6">
        <Image src="/cart2.png" alt="" fill />
      </div>
      <span>Cart ({totalItems})</span>
    </Link>
  );
}

export default CartIcon;
