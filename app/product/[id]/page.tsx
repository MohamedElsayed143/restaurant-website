import Image from "next/image";
import { products } from "@/data";
import Price from "@/app/components/Price";

type Props = {
  params: { id: string };
};

export default function SingleProductPage({ params }: Props) {
  const id = parseInt(params.id, 10);
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="p-10">
        <h1 className="text-2xl font-bold text-red-500">Product not found</h1>
      </div>
    );
  }

  return (
    <div
      className="p-4 lg:px-20 xl:px-40 min-h-screen flex flex-col justify-around 
      text-amber-500 md:flex-row md:gap-8 md:items-center"
    >
      {/* IMAGE */}
      {product.img && (
        <div className="relative w-full h-64 md:h-[400px]">
          <Image
            src={product.img}
            alt={product.title}
            fill
            className="object-contain"
          />
        </div>
      )}

      {/* TEXT */}
      <div className="h-auto flex flex-col gap-4 md:h-[70%] md:justify-center md:gap-6 xl:gap-8">
        <h1 className="text-3xl font-bold uppercase xl:text-5xl">
          {product.title}
        </h1>
        <p className="text-sm md:text-base">{product.desc}</p>

        {/* PRICE COMPONENT */}
        <Price
          price={product.price}
          id={product.id}
          title={product.title} // ← مهم
          img={product.img!} // ← مهم جداً
          options={product.options}
        />
      </div>
    </div>
  );
}
