import React from "react";
import Link from "next/link";
import CategorySection from "../components/CategorySection";
import ManSection from "../components/ManSection";

export default function Headpones () {
   
  return (
   
      <div className="bg-[#101010] pt-2  -mt-1 ">
        <div className="h-px w-full max-w-[1110px] bg-white mx-auto opacity-20 " />
        <div className=" text-white text-[28px] md:text-[40px] font-bold tracking-[2px] md:tracking-[1.43px] h-[130px] md:h-[230px]  flex items-center justify-center text-center leading-11 uppercase">
          HEADPHONES
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between lg:justify-evenly bg-white pt-20 pb-10 md:py-25 lg:py-35 md:gap-10  px-10 gap-10 lg:gap-15  xl:gap-0">
          <img
            src="/assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg"
            alt=""
            className="block md:hidden rounded-lg"
          />
          <img
            src="/assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg"
            alt=""
            className="h-[352px] w-[689px] hidden md:block lg:hidden rounded-lg"
          />
          <img
            src="/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg"
            alt="headphone-product"
            className="xl:w-[540px] xl:h-[560px] lg:w-[450px] lg:h-full  hidden lg:block rounded-lg"
          />

          <div className="flex flex-col justify-center items-center text-center bg-white lg:items-start lg:text-left lg:justify-start gap-3 w-[327px] h-[340px]  md:w-[572px] md:h-full lg:w-[445px] lg:h-full ">
            <h4 className="text-[14px] uppercase tracking-[10px] text-[#D87D4A]">
              NEW PRODUCT
            </h4>
            <h2 className="font-bold tracking-[1px] md:tracking-[1.43px] uppercase leading-11 text-[28px] md:text-[40px] text-black pt-2">
              XX99 Mark II Headphones
            </h2>
            <p className="opacity-50 text-black leading-[25px] text-[15px] md:text-center lg:text-left pb-2 md:pb-0 md:pt-3 tracking-[0px] w-[95%]">
              The new XX99 Mark II headphones is the pinnacle of pristine audio.
              It redefines your premium headphone experience by reproducing the
              balanced depth and precision of studio-quality sound.
            </p>
            <Link
              href="/product/xx99-mark-two-headphones"
              className="w-40 h-12 md:mt-4 xl:mt-6 flex justify-center items-center text-white text-[13px] font-bold bg-[#D87D4A] hover:bg-[#FBAF85]  tracking-[1px]"
            >
              SEE PRODUCT
            </Link>
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between  lg:justify-evenly -mt-3  bg-white  pt-15 pb-10 md:py-10 md:gap-10  px-10 gap-10 lg:gap-15  xl:gap-0">
          <div className=" flex flex-col justify-center items-center text-center lg:items-start lg:text-left lg:justify-start gap-3 w-[327px] h-[340px] md:w-[572px] md:h-full lg:w-[445px]  lg:h-full ">
            <h2 className="font-bold text-[28px] md:text-[40px] leading-11 tracking-[1px] md:tracking-[1.43px] uppercase text-black ">
              XX99 Mark I Headphones
            </h2>
            <p className="opacity-50  text-[15px] leading-[25px] tracking-[0px] text-black md:text-center lg:text-left pb-2 md:pb-0 md:pt-3 w-[92%]">
              As the gold standard for headphones, the classic XX99 Mark I
              offers detailed and accurate audio reproduction for audiophiles,
              mixing engineers, and music aficionados alike in studios and on
              the go.
            </p>
            <Link
              href="/product/xx99-mark-one-headphones"
              className="w-40 h-12 md:mt-4 xl:mt-6 flex justify-center items-center text-white text-[13px] font-bold bg-[#D87D4A] hover:bg-[#FBAF85]  tracking-[1px]"
            >
              SEE PRODUCT
            </Link>
          </div>
          <img
            src="/assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg"
            alt=""
            className="w-[327px] h-[352px] block md:hidden"
          />
          <img
            src="/assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg"
            alt=""
            className="hidden md:block lg:hidden w-[689px] h-[352px]"
          />
          <img
            src="/assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg"
            alt=""
            className="xl:w-[540px] xl:h-[560px] lg:w-[450px] lg:h-full   rounded-lg hidden lg:block"
          />
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between lg:justify-evenly -mt-3 bg-white pt-15 pb-10 md:py-25 lg:py-30 md:gap-10  px-10 gap-10 lg:gap-15  xl:gap-0">
          <img
            src="/assets/product-xx59-headphones/mobile/image-category-page-preview.jpg"
            alt=""
            className="block md:hidden rounded-lg"
          />
          <img
            src="/assets/product-xx59-headphones/tablet/image-category-page-preview.jpg"
            alt=""
            className="h-[352px] w-[689px] hidden md:block lg:hidden rounded-lg"
          />
          <img
            src="/assets/product-xx59-headphones/desktop/image-category-page-preview.jpg"
            alt="headphone-product"
            className="xl:w-[540px] xl:h-[560px] lg:w-[450px] lg:h-full hidden lg:block rounded-lg"
          />

          <div className="flex flex-col justify-center items-center text-center bg-white lg:items-start lg:text-left lg:justify-start gap-3 w-[327px] h-[340px]  md:w-[572px] md:h-full lg:w-[445px] lg:h-full ">
            <h2 className="font-bold tracking-[1px] md:tracking-[1.43px] uppercase leading-11 text-[28px] md:text-[40px] text-black pt-2 ">
              XX59 <br /> Headphones
            </h2>
            <p className="opacity-50 text-black leading-[25px] text-[15px] md:text-center lg:text-left pb-2 md:pb-0 md:pt-3 tracking-[0px] w-[95%]">
              Enjoy your audio almost anywhere and customize it to your specific
              tastes with the XX59 headphones. The stylish yet durable versatile
              wireless headset is a brilliant companion at home or on the move.
            </p>
            <Link
              href="/product/xx59-headphones"
              className="w-40 h-12 md:mt-4 xl:mt-6 flex justify-center items-center text-white text-[13px] font-bold bg-[#D87D4A] hover:bg-[#FBAF85]  tracking-[1px]"
            >
              SEE PRODUCT
            </Link>
          </div>
        </div>
        <div className="bg-white -mt-6">
          <CategorySection />
        </div>
        <div className="bg-white -mt-20 md:-mt-6">
          <ManSection />
        </div>
      </div>
   
  );
};


