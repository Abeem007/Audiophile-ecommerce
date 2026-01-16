"use client";
import { useState } from "react";
import { useCart } from "@/app/context/CartContext";

interface ProductDetailsProps {
  product: any;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const [added, setAdded] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      slug: product.slug,
      name: product.name,
      price: product.price,
      quantity,
      image: product.image.mobile,
    });

    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };
  return (
    <div className="flex flex-col  bg-white items-start text-left justify-start gap-3 w-[327px] h-full  md:w-[339.5px] md:h-full lg:w-[445px] lg:h-full ">
      {product.new && (
        <h4 className="text-[14px] md:text-[12px] lg:text-[14px] uppercase tracking-[10px] md:tracking-[8.57px] lg:tracking-[10px] text-[#D87D4A]">
          NEW PRODUCT
        </h4>
      )}
      <h2 className="font-bold tracking-[1px] lg:tracking-[1.43px] uppercase leading-8 lg:leading-11 text-[28px] lg:text-[40px] text-black pt-2 ">
        {product.name.split(" ").slice(0, -1).join("")}
        <br />
        {product.name.split(" ").slice(-1)}
      </h2>
      <p className="opacity-50 text-black leading-[25px] text-[15px] text-left pb-2 md:pb-0 md:pt-3 tracking-[0px] md:w-[90%] lg:w-[95%]">
        {product.description}
      </p>
      <p className=" mt-2 mb-3 md:mb-0 font-bold tracking-[1.29px] text-[18px] uppercase">
        $ {product.price * quantity}
      </p>

      <div className="flex gap-2 justify-start items-end">
        <div className="flex bg-[#F1F1F1] w-30 h-12 justify-around items-center">
          <button
            className="text-center hover:text-[#D87D4A]"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          >
            -
          </button>
          <p className="text-black text-[13px] text-center uppercase font-bold tracking-[1px]">
            {quantity}
          </p>
          <button
            className="text-center hover:text-[#D87D4A]"
            onClick={() => setQuantity((q) => q + 1)}
          >
            +
          </button>
        </div>
        <div className="relative inline-block">
          <button
            onClick={handleAddToCart}
            className={`w-40 h-12 md:mt-4 xl:mt-6 flex justify-center items-center text-white text-[13px] font-bold bg-[#D87D4A] hover:bg-[#FBAF85]  tracking-[1px] transition-all duration-200 transform
    ${added ? "scale-95 bg-[#FBAF85]" : ""}`}
          >
            ADD TO CART
          </button>
          {added && (
            <span className="absolute text-nowrap -top-5 left-1/2 right-1/2 -translate-x-1/2 text-sm text-[#D87D4A] font-semibold animate-fadeUp">
              Added to cart ✔
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
