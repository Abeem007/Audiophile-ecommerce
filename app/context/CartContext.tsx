"use client";

import { createContext, useContext, useState } from "react";

type CartItem = {
    slug: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
}
type CartContextType = {
    cart: CartItem[];
    addToCart: (item: CartItem) => void;
    increment: (slug: string) => void;
    decrement: (slug: string) => void;
    clearCart: () => void;
    totalItems: number;
    totalPrice: number;
}
const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [cart, setCart] = useState<CartItem[]>([]);
    const addToCart = (item: CartItem) => {
        setCart((prev) => {
            const existing = prev.find((i) => i.slug === item.slug);
            if (existing) {
                return prev.map((i) => i.slug === item.slug ? { ...i, quantity: i.quantity + item.quantity } : i);
            }
            return [...prev, item];
        });
    };

    const increment = (slug: string)=>{
    setCart(prev => prev.map(i => i.slug === slug ? {...i, quantity: i.quantity + 1}: i))
}

    const decrement = (slug: string) => {
        setCart(prev => prev.map(i => i.slug === slug ? {...i, quantity: i.quantity - 1}  : i).filter(i => i.quantity > 0))
   } 
    
    const clearCart = () => setCart([])
    
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, i)=> sum + i.price * i.quantity,0)
    return (
        <CartContext.Provider value={{cart, addToCart,increment, decrement,clearCart, totalItems,totalPrice}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
};