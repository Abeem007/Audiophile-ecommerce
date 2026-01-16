"use client";
import { useCart } from "../context/CartContext";

type SummaryProps = {
  onContinue: () => void;
  onEmptyCart: () => void;
  isProcessing?: boolean;
};

export default function Summary({ onContinue, onEmptyCart,isProcessing=false }: SummaryProps) {
  const { cart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const shipping = 50;
  const vat = Math.round(total * 0.2);
  const grandTotal = total + shipping + vat;

  const handleContinue = () => {
    if (cart.length === 0) {
      onEmptyCart();
      return;
    }
    onContinue();
  };

  return (
    <div className="bg-white p-8 rounded-lg  h-fit">
      <h2 className="font-bold mb-6">SUMMARY</h2>
      {cart.length === 0 ? (
        <p className="text-center opacity-60 py-8">Your cart is empty</p>
      ) : (
        <div className="s">
          {cart.map((item) => (
            <div key={item.slug} className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded"
              />
              <div className="flex-1">
                <p className="font-bold text-sm"> {item.name.split(" ")[0]}</p>
                <p className="opacity-50 text-sm">${item.price}</p>
              </div>
              <span className="opacity-50 text-sm">x{item.quantity}</span>
            </div>
          ))}

          <div className="mt-6 space-y-2 text-sm">
            <Row label="TOTAL" value={total} />
            <Row label="SHIPPING" value={shipping} />
            <Row label="VAT (INCLUDED)" value={vat} />
            <Row label="GRAND TOTAL" value={grandTotal} highlight />
          </div>
        </div>
      )}
      <button
        onClick={handleContinue}
        disabled={isProcessing}
        className="mt-6 w-full h-12 bg-[#D87D4A] text-white font-bold hover:bg-[#FBAF85]"
      >
        {isProcessing ? "PROCESSING..." : "CONTINUE & PAY"}
      </button>
    </div>
  );
}
function Row({
  label,
  value,
  highlight,
}: {
  label: string;
  value: number;
  highlight?: boolean;
}) {
  return (
    <div className="flex justify-between">
      <span className="opacity-50">{label}</span>
      <span className={`font-bold ${highlight ? "text-[#D87D4A]":""}`}>
        ${value.toLocaleString()}
      </span>
    </div>
  );
}
