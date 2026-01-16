"use client";

import { useState } from "react";
import CheckoutForm from "./CheckoutForm";
import ThankYouModal from "./ThankYouModal";
import Summary from "./Summary";
import GoBackButton from "../components/GoBackButton";
import ErrorModal from "./ErrorModal";
import { useCart } from "../context/CartContext";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { sendOrderConfirmationEmail } from "../lib/emailjs";

export default function CheckoutPage() {
  const { cart, totalPrice, clearCart } = useCart();
  const [showThankYou, setShowThankYou] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showEmptyCart, setShowEmptyCart] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderData, setOrderData] = useState<any>(null);
  const [formData, setFormData] = useState<any>(null);

  const createOrder = useMutation(api.orders.createOrder);
 
  const handleFormDataChange = (data: any, isValid: boolean) => {
    setFormData(data);
    setFormIsValid(isValid);
  };
  const handleContinue = async () => {
    if (!cart.length) {
      setShowEmptyCart(true);
      return;
    }
    if (!formIsValid || !formData) {
      setShowError(true);
      return;
    }  
    await processOrder();
  };

  const processOrder = async () => {
    setIsProcessing(true);
    try {
      const orderId = await createOrder({
        name: formData.name,
        email: formData.email,
        total: totalPrice,
        paymentMethod: formData.paymentMethod,
        cart: cart.map((item) => ({
          slug: item.slug,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
        })),
      });
      console.log("🔄 Attempting to send email...");
    
      const emailResult = await sendOrderConfirmationEmail({
        name: formData.name,
        email: formData.email,
        orderId: orderId,
        total: totalPrice,
        cart: cart.map(item => ({
          name: item.name,
          price: item.price,
          quantity: item.quantity
        })),
        shippingInfo: {
          address: formData.address || "",
          city: formData.city || "",
          country: formData.country || "",
          zip: formData.zip || "",
          phone: formData.phone || ""
        },
        paymentMethod: formData.paymentMethod
      });

      console.log("📧 Email result:", emailResult);

  
      if (emailResult.success) {
        setOrderData({
          id: orderId,
          email: formData.email,
          name: formData.name,
          total: totalPrice,
        });
        setShowError(false);
        setShowThankYou(true);
      } else {
    
        console.warn("Order created but email failed");
      

        setOrderData({
          id: orderId,
          email: formData.email,
          name: formData.name,
          total: totalPrice,
        });

        setShowError(false);
        setShowThankYou(true);
      }
    } catch (error) {
      console.error("Checkout failed:", error);
      setShowError(true);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <section className="bg-[#F2F2F2] min-h-screen py-6 md:py-12 relative">
      <div className="max-w-[1110px] mx-auto px-6">
        <div className="mb-5 md:pt-20 md:pb-4  ">
          <GoBackButton />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-8">
          <CheckoutForm
            onValidityChange={setFormIsValid}
            onFormDataChange={handleFormDataChange}
          />
          <Summary
            onContinue={() => handleContinue()}
            onEmptyCart={() => setShowEmptyCart(true)}
            isProcessing={isProcessing}
          />
        </div>
        {showError && (
          <ErrorModal
            title="Form Incomplete"
            message=
               "Please fill in all required fields before continuing."
                
            
            onClose={() => setShowError(false)}
          />
        )}
      </div>
      {showThankYou && (
        <ThankYouModal
          orderData={orderData}
          cartItems={cart}
          onClose={() => {
            clearCart();
            setShowThankYou(false);
          }}
        />
      )}
      {showEmptyCart && (
        <ErrorModal
          title="Cart Empty"
          message="Your cart is empty. Please add items before checking out."
          onClose={() => setShowEmptyCart(false)}
        />
      )}
    </section>
  );
}
