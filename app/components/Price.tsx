"use client";
import React, { useEffect, useState } from "react";
import { useCartStore } from "@/app/store/cartStore";
import { useRouter } from "next/navigation";
type Props = {
  price: number;
  id: number;
  title: string;
  img: string;
  options?: { title: string; additionalPrice: number }[];
};

export default function Price({ price, id, title, img, options }: Props) {
  const [total, setTotal] = useState(price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);

  const addToCart = useCartStore((state) => state.addToCart);
  const router = useRouter();

  useEffect(() => {
    setTotal(
      quantity * (options ? price + options[selected].additionalPrice : price)
    );
  }, [quantity, selected, options, price]);

  const handleAddToCart = () => {
    const option = options ? options[selected] : undefined;
    addToCart({
      id,
      name: title,
      unitPrice: options ? price + options[selected].additionalPrice : price,
      quantity,
      option: option?.title,
      img: img,
    });
    router.push("/cart");
  };

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">${total.toFixed(2)}</h2>

      {/*OPTIONS CONTAINER*/}
      <div className="flex gap-4">
        {options?.map((option, index) => (
          <button
            key={option.title}
            className="min-w-[6rem] p-2 ring-1 ring-amber-400 rounded-md cursor-pointer"
            style={{
              background: selected === index ? "var(--color-amber-400)" : "",
              color: selected === index ? "white" : "#fbbf24",
            }}
            onClick={() => setSelected(index)}
          >
            {option.title}
          </button>
        ))}
      </div>

      {/*QUANTITY AND ADD BUTTON CONTAINER*/}
      <div className="flex justify-between items-center">
        {/*QUANTITY*/}
        <div className="flex justify-between w-full p-3 ring-1 ring-amber-500">
          <span>QUANTITY</span>
          <div className="flex gap-4 items-center">
            <button
              className="cursor-pointer"
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
            >
              {"<"}
            </button>
            <span>{quantity}</span>
            <button
              className="cursor-pointer"
              onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}
            >
              {">"}
            </button>
          </div>
        </div>

        {/*CART BUTTON*/}
        <button
          className="uppercase w-45 h-13 border-2 border-amber-500 text-white bg-amber-500 
   font-semibold hover:bg-white hover:text-amber-500 cursor-pointer 
  shadow-md hover:shadow-lg transition-all duration-300"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
