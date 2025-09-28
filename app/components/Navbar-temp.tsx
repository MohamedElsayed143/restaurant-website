import React from "react";
import Link from "next/link";
import Menu from "./menu";
import CartIcon from "./CartIcon";
import Image from "next/image";

const Navbar = () => {
  const user = false;
  return (
    <div
      className="h-12 p-4 flex items-center justify-between border-b-2 border-b-amber-500
     uppercase md:h-24 lg:px-20 xl:px-40"
    >
      <div className="hidden md:flex gap-4 flex-1 ">
        <Link
          className="px-3 py-1 rounded-md font-bold cursor-pointer 
hover:bg-amber-500 hover:text-white transition duration-300 ease-in-out"
          href="/"
        >
          Home
        </Link>
        <Link
          className="px-3 py-1 rounded-md font-bold cursor-pointer 
hover:bg-amber-500 hover:text-white transition duration-300 ease-in-out"
          href="/menu"
        >
          Menu
        </Link>
        <Link
          className="px-3 py-1 rounded-md font-bold cursor-pointer 
hover:bg-amber-500 hover:text-white transition duration-300 ease-in-out"
          href="/contact"
        >
          Contact
        </Link>
      </div>

      <div className="text-2xl font-bold text-amber-500 animate-bounce">
        Elkhadry
      </div>

      <div className="md:hidden">
        <Menu />
      </div>

      <div className="hidden md:flex gap-4 items-center justify-end flex-1">
        <div className="md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-amber-500 px-1 rounded-md">
          <Image src="/phone.png" alt="" width={20} height={20} />
          <span>01032886679</span>
        </div>
        {!user ? (
          <Link
            className="px-3 py-1 rounded-md font-bold cursor-pointer 
   hover:bg-amber-500 hover:text-white transition duration-300 ease-in-out"
            href="/login"
          >
            Login
          </Link>
        ) : (
          <Link href="/order">Order</Link>
        )}
        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;
