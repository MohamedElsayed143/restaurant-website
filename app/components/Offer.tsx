import Image from "next/image";
import React from "react";
import CountDown from "./countDown";
import Link from "next/link";

function Offer() {
  return (
    <div className="bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png')] md:h-[70vh]">
      {/*text container*/}
      <div className="flex-1 flex flex-col justify-center items-center text-center gap-8 p-6">
        <h1 className="text-white text-5xl font-bold xl:text-6xl">
          Grilled to perfection & made to delight
        </h1>
        <p className="text-white xl:text-xl">
          Indulge in the ultimate grilled experience — juicy, tender cuts
          infused with smoky flavors and perfectly charred to perfection. Served
          with fresh sides and vibrant herbs, this dish is crafted to excite
          your senses and make every bite unforgettable
        </p>
        <CountDown />
        <Link href="/menu">
          <button
            className="bg-amber-500 text-white rounded-md py-3 px-6 cursor-pointer
        font-bold hover:bg-white hover:text-amber-500 transition"
          >
            Order Now
          </button>
        </Link>
      </div>
      {/*image container*/}
      <div className="flex-1 w-full relative md:h-full">
        <Image
          src="/offerProduct.png"
          alt=""
          fill
          className="object-cover m-0 p-0"
        />
      </div>
    </div>
  );
}

export default Offer;
