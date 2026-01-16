import React from "react";
import Link from "next/link";
import CategorySection from "../components/CategorySection";
import ManSection from "../components/ManSection";
const Speakers = () => {
    return (
      <section className="bg-[#101010] pt-2 -mt-1 ">
        <div className="h-px w-full max-w-[1110px] bg-white mx-auto opacity-20 " />
        <div className=" text-white text-[28px] md:text-[40px] font-bold tracking-[2px] md:tracking-[1.43px] h-[130px] md:h-[230px]  flex items-center justify-center text-center leading-11 uppercase">
          SPEAKERS
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between lg:justify-evenly bg-white pt-20 pb-10 md:py-25 lg:py-35  px-10 gap-10 lg:gap-15  xl:gap-0">
          <img
            src="/assets/product-zx9-speaker/mobile/image-category-page-preview.jpg"
            alt=""
            className="block md:hidden rounded-lg"
          />
          <img
            src="/assets/product-zx9-speaker/tablet/image-category-page-preview.jpg"
            alt=""
            className="h-[352px] w-[689px] hidden md:block lg:hidden rounded-lg"
          />
          <img
            src="/assets/product-zx9-speaker/desktop/image-category-page-preview.jpg"
            alt="headphone-product"
            className="xl:w-[540px] xl:h-[560px] lg:w-[450px] lg:h-full  hidden lg:block rounded-lg"
          />

          <div className="flex flex-col justify-center items-center text-center bg-white lg:items-start lg:text-left lg:justify-start gap-3 w-[327px] h-[340px]  md:w-[572px] md:h-full lg:w-[445px] lg:h-full ">
            <h4 className="text-[14px] uppercase tracking-[10px] text-[#D87D4A]">
              NEW PRODUCT
            </h4>
            <h2 className="font-bold tracking-[1px] md:tracking-[1.43px] uppercase leading-11 text-[28px] md:text-[40px] text-black pt-2 ">
              ZX9 <br /> SPEAKER
            </h2>
            <p className="opacity-50 text-black leading-[25px] text-[15px] md:text-center lg:text-left pb-2 md:pb-0 md:pt-3 tracking-[0px] w-[95%]">
              Upgrade your sound system with the all new ZX9 active speaker.
              It’s a bookshelf speaker system that offers truly wireless
              connectivity -- creating new possibilities for more pleasing and
              practical audio setups.
            </p>
            <Link
              href="/product/zx9-speaker"
              className="w-40 h-12 md:mt-4 xl:mt-6 flex justify-center items-center text-white text-[13px] font-bold bg-[#D87D4A] hover:bg-[#FBAF85]  tracking-[1px]"
            >
              SEE PRODUCT
            </Link>
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between  lg:justify-evenly -mt-3  bg-white  pt-15 pb-10 md:py-10  px-10 gap-10 lg:gap-15  xl:gap-0">
          <div className=" flex flex-col justify-center items-center text-center lg:items-start lg:text-left lg:justify-start gap-3 w-[327px] h-[340px] md:w-[572px] md:h-full lg:w-[445px]  lg:h-full  ">
            <h2 className="font-bold text-[28px] md:text-[40px] leading-11 tracking-[1px] md:tracking-[1.43px] uppercase text-black ">
              ZX7 <br /> SPEAKER
            </h2>
            <p className="opacity-50  text-[15px] leading-[25px] tracking-[0px] text-black md:text-center lg:text-left pb-2 md:pb-0 md:pt-3 w-[95%]">
              Stream high quality sound wirelessly with minimal loss. The ZX7
              bookshelf speaker uses high-end audiophile components that
              represents the top of the line powered speakers for home or studio
              use.
            </p>
            <Link
              href="/product/zx7-speaker"
              className="w-40 h-12 md:mt-4 xl:mt-6 flex justify-center items-center text-white text-[13px] font-bold bg-[#D87D4A] hover:bg-[#FBAF85]  tracking-[1px]"
            >
              SEE PRODUCT
            </Link>
          </div>
          <img
            src="/assets/product-zx7-speaker/mobile/image-category-page-preview.jpg"
            alt=""
            className="w-[327px] h-[352px] block md:hidden"
          />
          <img
            src="/assets/product-zx7-speaker/tablet/image-category-page-preview.jpg"
            alt=""
            className="hidden md:block lg:hidden w-[689px] h-[352px]"
          />
          <img
            src="/assets/product-zx7-speaker/desktop/image-category-page-preview.jpg"
            alt=""
            className="xl:w-[540px] xl:h-[560px] lg:w-[450px] lg:h-full   rounded-lg hidden lg:block"
          />
        </div>
        <div className="bg-white -mt-6 lg:-mt-1">
          <CategorySection />
        </div>
        <div className="bg-white -mt-20 md:-mt-10">
        <ManSection />
        </div>
      </section>
    );
};

export default Speakers;
