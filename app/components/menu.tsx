"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CartIcon from "./CartIcon";

const links = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 4, title: "Contact", url: "/contact" },
];

function Menu() {
  const [open, setOpen] = useState(false);
  const user = false;

  return (
    <div>
      {/* MENU BUTTON*/}
      {!open ? (
        <Image
          src="/open2.png"
          alt="open"
          width={35}
          height={35}
          onClick={() => setOpen(true)}
          className="cursor-pointer sm:hidden"
        />
      ) : (
        <Image
          src="/close2.png"
          alt="close"
          width={35}
          height={35}
          onClick={() => setOpen(false)}
          className="cursor-pointer sm:hidden"
        />
      )}

      {/* MENU */}
      {open && (
        <div
          className="bg-amber-500 text-black absolute left-0 top-24 w-full 
          h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center 
          text-2xl z-50"
        >
          {links.map((item) => (
            <Link
              href={item.url}
              key={item.id}
              onClick={() => setOpen(false)}
              className="px-6 py-2 rounded-full bg-black text-white shadow-md 
                         hover:bg-white hover:text-amber-500 hover:scale-110 
                         transition-all duration-300"
            >
              {item.title}
            </Link>
          ))}

          {!user ? (
            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="px-6 py-2 rounded-full bg-black text-white shadow-md 
                         hover:bg-white hover:text-amber-500 hover:scale-110 
                         transition-all duration-300"
            >
              Login
            </Link>
          ) : (
            <Link
              href="/orders"
              onClick={() => setOpen(false)}
              className="px-6 py-2 rounded-full bg-black text-white shadow-md 
                         hover:bg-white hover:text-amber-500 hover:scale-110 
                         transition-all duration-300"
            >
              Orders
            </Link>
          )}

          <Link
            href="/cart"
            onClick={() => setOpen(false)}
            className="px-6 py-2 rounded-full bg-black text-white shadow-md 
                       hover:bg-white hover:text-amber-500 hover:scale-110 
                       transition-all duration-300 flex items-center gap-2"
          >
            <CartIcon /> Cart
          </Link>
        </div>
      )}
    </div>
  );
}

export default Menu;
