import React from 'react'
import Link from 'next/link';

const EarphonesSection = () => {
  return (
    <section className="flex items-center justify-center lg:px-15">
      <div className="flex flex-col md:flex-row  gap-6">
        <div>
          <img
            src="/assets/home/mobile/image-earphones-yx1.jpg"
            alt="earphones-image"
            className="rounded-lg block md:hidden w-[327px] h-50"
          />
          <img
            src="/assets/home/tablet/image-earphones-yx1.jpg"
            alt="earphones-image"
            className="rounded-lg hidden md:block lg:hidden md:w-[339px] h-80"
          />
          <img
            src="/assets/home/desktop/image-earphones-yx1.jpg"
            alt="earphones-image"
            className="rounded-lg hidden lg:block w-[540px] h-80"
          />
        </div>
        <div className="w-[327px] h-50 md:w-[339px] lg:w-[540px] md:h-80 rounded-lg bg-[#F1F1F1] flex flex-col justify-center pl-5 md:pl-10 lg:pl-20 gap-6 text-black">
          <h3 className="font-bold text-[28px] tracking-[2px] uppercase ">
            YX1 EARPHONES
          </h3>
          <Link
            href="/product/yx1-earphones"
            className="uppercase flex justify-center items-center border border-black  w-40 h-12"
          >
            {" "}
            SEE PRODUCT
          </Link>
        </div>
      </div>
    </section>
  );
}

export default EarphonesSection