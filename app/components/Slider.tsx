"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "always fresh & always crispy & always hot",
    image: "/slide201.jpg",
  },
  {
    id: 2,
    title: "we deliver your order wherever you are in Egypt",
    image: "/slide202.jpg",
  },
  {
    id: 3,
    title: "The finest grills to enjoy with your family",
    image: "/slide204.jpeg",
  },
];

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
  const interval = setInterval(
  () =>
  setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
  2000
  );
  return () => clearInterval(interval);
  }, []);
  return (
    <div
      className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row
    bg-gray-100"
    >
      <div className="flex-1 flex items-center flex-col gap-8 text-amber-500 font-bold">
        <h1 className="text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl">
          {data[currentSlide].title}
        </h1>
        <Link href="/menu">
          <button
            className="bg-amber-500 text-white py-4 px-8 rounded-md 
    hover:bg-amber-600 hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            Order Now
          </button>
        </Link>
      </div>
      <div className="w-full h-full flex-1 relative flex items-center justify-center">
        <Image
          src={data[currentSlide].image}
          alt=""
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}

export default Slider;
