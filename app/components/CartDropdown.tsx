"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function CartDropdown({ closeCart }: { closeCart: () => void }) {
  const { cart, totalItems, totalPrice, increment, decrement, clearCart } =
    useCart();
const handleDropdownClick = (e: React.MouseEvent) => {
  e.stopPropagation();
};
  if (cart.length === 0) {
    return (
      <div className="fixed z-40 right-0 top-20 w-[377px] bg-white p-8 rounded-lg shadow-lg" onClick={handleDropdownClick}>
        <p className="text-center font-bold opacity-60">Your cart is empty</p>
      </div>
    );
  }
  return (
    <div
      className="fixed  top-[114px] right-6.5 md:right-10 lg:right-20 lg:top-30 w-[327px] md:w-[377px] bg-white p-8 rounded-lg shadow-lg z-40 "
      onClick={handleDropdownClick}
    >
      <div className="flex justify-between mb-6">
        <h3 className="font-bold uppercase">Cart ({totalItems})</h3>
        <button
          onClick={clearCart}
          className="text-sm underline opacity-50 hover:text-[#D87D4A]"
        >
          Remove all
        </button>
      </div>

      <div className="flex flex-col gap-5">
        {cart.map((item) => (
          <div key={item.slug} className="flex items-center gap-4">
            <Image
              src={item.image}
              alt={item.name}
              width={64}
              height={64}
              className="rounded"
            />

            <div className="flex-1">
              <p className="font-bold text-sm uppercase">
                {item.name.split(" ")[0]}
              </p>
              <p className="opacity-50 text-sm">
                ${item.price.toLocaleString()}
              </p>
            </div>

            <div className="flex bg-[#F1F1F1] w-24 h-8 justify-around items-center">
              <button
                className="hover:text-[#D87D4A]"
                onClick={() => decrement(item.slug)}
              >
                -
              </button>
              <span className="font-bold">{item.quantity}</span>
              <button
                className="hover:text-[#D87D4A]"
                onClick={() => increment(item.slug)}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between mt-6">
        <span className="uppercase opacity-50">Total</span>
        <span className="font-bold">${totalPrice.toLocaleString()}</span>
      </div>

      <Link
        href="/checkout"
        onClick={(e) => {
          e.stopPropagation(); 
          closeCart(); 
        }}
        className="mt-6 w-full h-12 bg-[#D87D4A] text-white font-bold flex items-center justify-center hover:bg-[#FBAF85]"
      >
        Checkout
      </Link>
    </div>
  );
}
