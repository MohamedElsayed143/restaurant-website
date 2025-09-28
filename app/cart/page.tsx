"use client";

import Image from "next/image";
import React from "react";
import { useCartStore } from "@/app/store/cartStore";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useCartStore();
  const router = useRouter();
  console.log("cart:", cart);
  const subtotal = cart.reduce(
    (acc, item) => acc + item.unitPrice * item.quantity,
    0
  );

  return (
    <div
      className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)]
    flex flex-col text-amber-500 lg:flex-row"
    >
      {/* PRODUCTS CONTAINER */}
      <div
        className="h-1/2 p-4 flex flex-col justify-center
      lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40"
      >
        {cart.length === 0 ? (
          <p className="text-center text-lg">Your cart is empty 🛒</p>
        ) : (
          cart.map((item) => (
            <div
              key={`${item.id}-${item.option}`}
              className="flex items-center justify-between mb-4"
            >
              <Image
                src={item.img}
                alt={item.name}
                width={100}
                height={100}
                className="rounded-md"
              />
              <div>
                <h1 className="uppercase text-xl font-bold">{item.name}</h1>
                {item.option && (
                  <span className="text-sm text-gray-500">{item.option}</span>
                )}
                <span className="block">x{item.quantity}</span>
              </div>
              <h2 className="font-bold">
                ${(item.unitPrice * item.quantity).toFixed(2)}{" "}
              </h2>
              <span
                className="cursor-pointer text-red-500 font-bold"
                onClick={() => removeFromCart(item.id, item.option)}
              >
                X
              </span>
            </div>
          ))
        )}
      </div>

      {/* PAYMENT CONTAINER */}
      <div
        className="h-1/2 p-4 bg-gray-100 flex flex-col gap-4 justify-center
      lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6 font-bold"
      >
        <div className="flex justify-between">
          <span>Subtotal ({cart.length} items)</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Service Cost</span>
          <span>$0.0</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery Cost</span>
          <span className="text-green-500 font-bold">FREE!</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between">
          <span>TOTAL (INCL. VAT)</span>
          <span className="font-bold">${subtotal.toFixed(2)}</span>
        </div>

        <button
          onClick={() => {
            if (cart.length === 0) {
              toast.error("Your cart is empty 🛒");
              return;
            }
            router.push("/checkOut");
            clearCart();
          }}
          className="bg-amber-500 text-white p-3 rounded-md w-1/2 self-end
             transition-all duration-300 ease-in-out
             hover:bg-amber-600 hover:scale-105
             active:scale-95 shadow-md hover:shadow-lg
             animate-pulse cursor-pointer"
        >
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CartPage;
