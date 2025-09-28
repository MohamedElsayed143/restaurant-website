import { featuredProducts } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Featured() {
  return (
    <div className="w-screen overflow-x-scroll text-amber-500">
      {/* WRAPPER */}
      <div className="w-max flex">
        {/* SINGLE ITEM */}
        {featuredProducts.map((item) => (
          <div
            key={item.id}
            className="w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-gray-100 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]"
          >
            {/* IMG CONTAINER */}
            {item.img && (
              <div className="relative flex-1 w-full hover:rotate-[10deg] transition-all duration-500">
                <Image src={item.img} alt="" fill className="object-contain" />
              </div>
            )}
            {/* TEXT CONTAINER */}
            <div className="flex-1 flex flex-col items-center justify-center text-center gap-4 ">
              <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-2xl">
                {item.title}
              </h1>
              <p className="p-4 2xl:p-8">{item.desc}</p>
              <span className="text-xl font-bold">${item.price}</span>

              {/*BUTTON */}
              <Link
                href={`/product/${item.id}`}
                className="border-2 border-amber-500 text-amber-500 rounded-full px-12 py-2 
  inline-block font-semibold hover:bg-amber-500 hover:text-white cursor-pointer 
  shadow-md hover:shadow-lg transition-all duration-300"
              >
                Add to Cart
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Featured;
