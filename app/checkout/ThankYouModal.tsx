"use client";

import { useCart } from "../context/CartContext"
import Link from "next/link";

type ThankYouModalProps = {
  onClose: () => void;
  orderData?: {
    id: string;
    email: string;
    name: string;
    total: number;
  };
  cartItems?: Array<{
    slug: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
  }>;
};


export default function ThankYouModal({ onClose, orderData, cartItems= [] }: ThankYouModalProps)
{
   const subtotal = orderData?.total || 0;
   const shipping = 50;
   const vat = orderData?.total? Math.round(orderData.total * 0.2):0;
   const grandTotal = orderData?.total ? orderData.total  + shipping + vat:0;

   const firstItem = cartItems.length>0 ? cartItems[0] : null;
    const otherCount = cartItems.length>1 ? cartItems.length - 1:0; 
    
    const handleClose = () => {
      
      onClose();
    };
    return (
      <section>
        <div className="fixed inset-0 bg-black/60 z-40" />

        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 w-full ">
          <div className="bg-white w-full md:max-w-[540px] rounded-lg p-10">
            <div className=" mb-6">
              <img src="/assets/checkout/icon-order-confirmation.svg" alt="" />
            </div>

            <h2 className="text-2xl font-bold uppercase mb-4">
              Thank you <br /> for your order
            </h2>

            <p className="opacity-50 text-[15px] mb-3">
              You will receive an email confirmation shortly.
              {orderData?.email && (
                <span className="block mt-1">
                  Confirmation sent to: {orderData.email}
                </span>
              )}
              {orderData?.id && (
                <span className="block mt-1">Order ID: #{orderData.id}</span>
              )}
            </p>

            <div className="flex flex-col md:flex-row overflow-hidden items-center justify-center rounded-lg my-6 h-[232px] md:h-[140px] w-full  ">
              <div className="bg-[#F1F1F1] p-4 h-[140px] flex-1 w-full ">
                {firstItem ? (
                  <>
                    <div className="flex items-center  md:gap-4">
                      <img
                        src={firstItem.image}
                        className="w-12.5 h-12.5 rounded"
                        alt={firstItem.name}
                      />
                      <div>
                        <p className="font-bold text-[15px] leading-[25px] text-nowrap">
                          {firstItem.name.split(" ")[0]}
                        </p>
                        <p className="opacity-50 font-bold leading-[25px] text-sm">
                          ${firstItem.price}
                        </p>
                      </div>
                      <span className="ml-auto text-[15px] text-center font-bold opacity-50">
                        x{firstItem.quantity}
                      </span>
                    </div>
                    <hr className="lg:w-[198px] mx-auto h-px opacity-8 mt-4" />
                    {otherCount > 0 && (
                      <p className="text-xs text-center mt-3 font-bold  opacity-50 border- pt-2">
                        and {otherCount} other item(s)
                      </p>
                    )}
                  </>
                ) : (
                  <div className="h-full flex items-center justify-center">
                    <p className="text-center opacity-60">
                      Order processed successfully
                    </p>
                  </div>
                )}
              </div>

              <div className="bg-black text-white p-6 gap-2 flex flex-col w-full md:max-w-[198px] justify-center h-[92px] md:min-h-[140px]">
                <p className="opacity-50 text-[15px] text-nowrap">
                  GRAND TOTAL
                </p>
                <p className="font-bold text-lg uppercase">${grandTotal.toLocaleString()}</p>
              </div>
            </div>

            <Link
              href="/"
              onClick={handleClose}
              className="w-full h-12 bg-[#D87D4A] text-white font-bold flex items-center justify-center hover:bg-[#FBAF85]"
            >
              BACK TO HOME
            </Link>
          </div>
        </div>
      </section>
    );
}