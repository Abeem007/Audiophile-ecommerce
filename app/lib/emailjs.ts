import emailjs from "@emailjs/browser";


const EMAILJS_PUBLIC_KEY =
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";
const EMAILJS_SERVICE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
const EMAILJS_TEMPLATE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";


export function initializeEmailJS() {
  if (typeof window !== "undefined" && EMAILJS_PUBLIC_KEY) {
    emailjs.init(EMAILJS_PUBLIC_KEY);
    return true;
  }
  return false;
}

export async function sendOrderConfirmationEmail(orderDetails: {
  name: string;
  email: string;
  orderId: string;
  total: number;
  cart: Array<{
    name: string;
    price: number;
    quantity: number;
  }>;
  shippingInfo: {
    address: string;
    city: string;
    country: string;
    zip: string;
    phone: string;
  };
  paymentMethod: string;
}) {
initializeEmailJS();


if (!EMAILJS_PUBLIC_KEY || !EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID) {
  console.error("❌ Missing EmailJS credentials. Check environment variables.");
  console.log("Public Key exists:", !!EMAILJS_PUBLIC_KEY);
  console.log("Service ID exists:", !!EMAILJS_SERVICE_ID);
  console.log("Template ID exists:", !!EMAILJS_TEMPLATE_ID);
  return { success: false, error: "Missing EmailJS credentials" };
}

  try {
    
    const subtotal = orderDetails.total;
    const shipping = 50;
    const vat = Math.round(subtotal * 0.2);
    const grandTotal = subtotal + shipping + vat;

   
    const items = orderDetails.cart.map((item) => ({
      name: item.name,
      price: (item.price * item.quantity).toLocaleString(),
      quantity: item.quantity,
    }));

    const templateParams = {
      name: orderDetails.name,
      email: orderDetails.email,
      order_id: orderDetails.orderId,
      order_date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      items: items,
      subtotal: subtotal.toFixed(2),
      shipping: shipping.toFixed(2),
      vat: vat.toFixed(2),
      grand_total: grandTotal.toFixed(2),
      shipping_name: orderDetails.name,
      shipping_address: orderDetails.shippingInfo.address,
      shipping_city: orderDetails.shippingInfo.city,
      shipping_country: orderDetails.shippingInfo.country,
      shipping_zip: orderDetails.shippingInfo.zip,
      shipping_phone: orderDetails.shippingInfo.phone,
      payment_method:
        orderDetails.paymentMethod === "emoney"
          ? "e-Money"
          : "Cash on Delivery",
      tracking_link: `https://audiophile.com/track/${orderDetails.orderId}`,
      current_year: new Date().getFullYear(),
    };

    console.log("Sending email with params:", templateParams);
 console.log("Service ID:", EMAILJS_SERVICE_ID);
 console.log("Template ID:", EMAILJS_TEMPLATE_ID);
    console.log("To email:", orderDetails.email);
    
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    console.log("Email sent successfully:", response);
    return { success: true, response };
  } catch (error:any) {
    console.error("Failed to send email:", error);

if (error.text) {
  console.error("EmailJS error details:", error.text);
}
if (error.status) {
  console.error("HTTP Status:", error.status);
}
    

    return { success: false, error };
  }
}
