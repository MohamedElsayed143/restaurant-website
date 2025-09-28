"use client";

import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";

const CheckoutPage = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center text-green-600 text-center relative overflow-hidden">
      {/* Confetti animation */}
      <Confetti width={windowSize.width} height={windowSize.height} />

      {/* Message */}
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Your order has been placed successfully 🎉
      </h1>
      <p className="text-lg md:text-xl text-gray-700">
        It’s on the way! Please wait for delivery 🚚
      </p>
    </div>
  );
};

export default CheckoutPage;
