"use client";
import { useEffect, useState } from "react";

type CheckoutFormProps = {
  onValidityChange: (isValid: boolean) => void;
  onFormDataChange?: (formData: any, isValid: boolean) => void;
};

export default function CheckoutForm({ onValidityChange,onFormDataChange }: CheckoutFormProps) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\+?[0-9]{10,15}$/;
  const zipRegex = /^[0-9]{4,6}$/;
  const eMoneyNumberRegex = /^[0-9]{10}$/;
  const eMoneyPinRegex = /^[0-9]{4}$/;
  const lettersOnlyRegex = /^[A-Za-z\s]+$/;
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    zip: "",
    city: "",
    country: "",
    eMoneyNumber: "",
    eMoneyPin: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [payment, setPayment] = useState<"emoney" | "cod">("emoney");
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    validate(true);


  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

     if (name === "phone") {      
       if (!/^\+?[0-9]*$/.test(value)) return;
       setForm({ ...form, [name]: value });
       return;
     }
    if ([ "zip", "eMoneyNumber", "eMoneyPin"].includes(name)) {
      if (!/^[0-9]*$/.test(value)) return;
    }
    if (["name", "city", "country"].includes(name)) {
      if (!/^[A-Za-z\s]*$/.test(value)) return;
    }
    setForm({ ...form, [name]: value });
  };

  const validate = (showErrors = false) => {
    const newErrors: Record<string, string> = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    } else if (form.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 caracters";
    } else if (!lettersOnlyRegex.test(form.name)) {
      newErrors.name = "Name must contain only letters";
    }
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!emailRegex.test(form.email))
      newErrors.email = "Please enter a valid email address";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!phoneRegex.test(form.phone.replace(/\s/g, '')))
      newErrors.phone = "Phone number must be 10–15 digits";

    if (!form.address.trim()) newErrors.address = "Address is required";

    if (!form.zip.trim()) newErrors.zip = "ZIP code is required";
    else if (!zipRegex.test(form.zip))
      newErrors.zip = "ZIP code must be 4–6 digits";

    if (!form.city.trim()) newErrors.city = "City is required";
    else if (!lettersOnlyRegex.test(form.city))
      newErrors.city = "City must contain only letters";

    if (!form.country.trim()) newErrors.country = "Country is required";
    else if (!lettersOnlyRegex.test(form.country))
      newErrors.country = "Country must contain only letters";

    if (payment === "emoney") {
      if (!form.eMoneyNumber.trim())
        newErrors.eMoneyNumber = "e-money Number is required";
      else if (!eMoneyNumberRegex.test(form.eMoneyNumber))
        newErrors.eMoneyNumber = "e-money Number must contain 10 digits";
      if (!form.eMoneyPin.trim())
        newErrors.eMoneyPin = "e-money PIN is required";
      else if (!eMoneyPinRegex.test(form.eMoneyPin))
        newErrors.eMoneyPin = "e-money PIN must contain 4 digits";
    }
    if (showErrors) {
      setErrors(newErrors);
    }

    const isValid = Object.keys(newErrors).length === 0;
    onValidityChange(isValid);
    return isValid;
  };

  useEffect(() => {
    const isValid = validate(false);
    onValidityChange(isValid);
    if (onFormDataChange) {
      const formData = {
        ...form,
        paymentMethod: payment,
      };
      onFormDataChange(formData, isValid);
    } 
  }, [form, payment]);

  

  return (
    <form  className="bg-white p-8 rounded-lg space-y-8">
      <h1 className="text-[32px] font-bold tracking-[1.14px] mb-8">CHECKOUT</h1>
      <section>
        <h3 className="text-[#D87D4A] uppercase text-[13px] tracking-px mb-4">
          Billing Details
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex flex-col items-start gap-2">
            <p className="text-sm font-bold">Name</p>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Tolu Akinjide"
              className={`input ${errors.name ? "input-error" : ""}`}
            />
            {touched.name && errors.name && (
              <p className="text-xs text-red-500 mt-1">{errors.name}</p>
            )}
          </div>
          <div className="flex flex-col items-start gap-2">
            <p className="text-sm font-bold">Email Address</p>
            <input
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="tolu@mail.com"
              className={`input ${errors.email ? "input-error" : ""}`}
            />
            {touched.email && errors.email && (
              <p className="text-xs text-red-500 mt-1">{errors.email}</p>
            )}
          </div>
          <div className="flex flex-col items-start gap-2">
            <p className="text-sm font-bold">Phone Number</p>
            <input
              name="phone"
              type="tel"
              inputMode="tel"
              value={form.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="+1 202-555-0136"
              className={`input ${errors.phone ? "input-error" : ""}`}
            />
            {touched.phone && errors.phone && (
              <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
            )}
          </div>
        </div>
      </section>
      <section>
        <h3 className="text-[#D87D4A] uppercase text-[13px] tracking-px mb-4">
          Shipping Info
        </h3>
        <div className="flex flex-col items-start gap-2">
          <p className="text-sm font-bold">Address</p>
          <input
            name="address"
            value={form.address}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="1137 Williams Avenue"
            className={`input w-full mb-4 ${
             touched.address && errors.address ? "input-error" : ""
            }`}
          />
          {touched.address && errors.address && (
            <p className="text-xs text-red-500 mb-4">{errors.address}</p>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex flex-col items-start gap-2">
            <p className="text-sm font-bold">Zip Code</p>
            <input
              name="zip"
              inputMode="numeric"
              pattern="[0-9]*"
              value={form.zip}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="10001"
              className={`input ${touched.zip && errors.zip ? "input-error" : ""}`}
            />
            {touched.zip && errors.zip && (
              <p className="text-xs text-red-500 mt-1">{errors.zip}</p>
            )}
          </div>
          <div className="flex flex-col items-start gap-2">
            <p className="text-sm font-bold">City</p>
            <input
              name="city"
              value={form.city}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="New York"
              className={`input ${touched.city && errors.city ? "input-error" : ""}`}
            />
            {touched.city && errors.city && (
              <p className="text-xs text-red-500 mt-1">{errors.city}</p>
            )}
          </div>
          <div className="flex flex-col items-start gap-2">
            <p className="text-sm font-bold">Country</p>
            <input
              name="country"
              value={form.country}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="United States"
              className={`input ${touched.country && errors.country ? "input-error" : ""}`}
            />
            {touched.country && errors.country && (
              <p className="text-xs text-red-500 mt-1">{errors.country}</p>
            )}
          </div>
        </div>
      </section>
      <section>
        <h3 className="text-[#D87D4A] uppercase text-[13px] tracking-[1px] mb-4">
          Payment Details
        </h3>
        <div className="flex flex-col md:flex-row justify-between ">
          <p className="text-sm font-bold mb-3 md:mb-0">Payment Method</p>
          <div className="space-y-4 md:space-y-2 md:w-[45%] ">
            <label
              className="flex items-center gap-3 border border-gray-300 rounded-lg px-4 py-3 cursor-pointer
      hover:border-[#D87D4A]
      focus-within:border-[#D87D4A]
      has-checked:border-[#D87D4A]
      transition"
            >
              <input
                type="radio"
                name="payment"
                value="emoney"
                checked={payment === "emoney"}
                onChange={() => setPayment("emoney")}
                className="sr-only"
              />
              <span className="radio-custom" />
              e-Money
            </label>
            <label
              className="flex items-center gap-3 border border-gray-300 rounded-lg px-4 py-3 cursor-pointer
      hover:border-[#D87D4A]
      focus-within:border-[#D87D4A]
      has-checked:border-[#D87D4A]
      transition"
            >
              <input
                type="radio"
                name="payment"
                value="cod"
                checked={payment === "cod"}
                onChange={() => {
                  setPayment("cod");
                  setForm((prev) => ({
                    ...prev,
                    eMoneyNumber: "",
                    eMoneyPin: "",
                  }));
                  setErrors((prev) => ({
                    ...prev,
                    eMoneyNumber: "",
                    eMoneyPin: "",
                  }));
                }}
                className="sr-only"
              />
              <span className="radio-custom" />
              Cash on Delivery
            </label>
          </div>
        </div>
        {payment === "emoney" && (
          <div className="flex justify-betwee gap-4 mt-6 md:mt-5">
            <div className="flex flex-col items-start gap-2 w-[50%]">
              <p className="text-sm font-bold">e-Money Number</p>
              <input
                name="eMoneyNumber"
                value={form.eMoneyNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="238521993"
                className={`input ${touched.eMoneyNumber && errors.eMoneyNumber ? "input-error" : ""}`}
              />
              {touched.eMoneyNumber && errors.eMoneyNumber && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.eMoneyNumber}
                </p>
              )}
            </div>
            <div className="flex flex-col items-start gap-2 w-[50%]">
              <p className="text-sm font-bold">e-money PIN </p>
              <input
                name="eMoneyPin"
                type="password"
                value={form.eMoneyPin}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="2385"
                className={`input ${errors.eMoneyPin ? "input-error" : ""}`}
              />
              {touched.eMoneyPin && errors.eMoneyPin && (
                <p className="text-xs text-red-500 mt-1">{errors.eMoneyPin}</p>
              )}
            </div>
          </div>
        )}
        {payment === "cod" && (
          <div className="flex gap-3 items-center pt-4">
            <img
              src="/assets/checkout/icon-cash-on-delivery.svg"
              alt="checkout-icon-cash-on-delivery"
            />
            <p className="mt-4 text-[15px] leading-[25px] tracking-0px opacity-50">
              The ‘Cash on Delivery’ option enables you to pay in cash when our
              delivery courier arrives at your residence. Just make sure your
              address is correct so that your order will not be cancelled.
            </p>
          </div>
        )}
      </section>
    </form>
  );
}
