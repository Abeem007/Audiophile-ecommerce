import React from 'react'
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className="bg-[#101010] -mt-2 pt-2">
      <div className="h-px w-full max-w-[1110px] bg-white mx-auto opacity-20 " />
      <div className="bg-[url('/assets/home/mobile/image-header.jpg')] md:bg-[url('/assets/home/tablet/image-header.jpg')] lg:bg-[url('/assets/home/desktop/image-hero.jpg')] bg-cover bg-center  bg-no-repeat  p-30 md:p-40 lg:p-25 xl:p-40">
        <div className="flex flex-col gap-1 pt-4 lg:pt-0 md:gap-5 lg:gap-2 xl:gap-5 items-center justify-center lg:items-start lg:justify-start text-white  text-center lg:text-left  ">
          <h4 className="opacity-[49.64%] text-[13px] md:text-[14px] p-2 lg:p-0  uppercase tracking-[7px]  md:tracking-[10px] text-nowrap">
            New Product
          </h4>
          <h1 className="uppercase font-bold  text-[34px] md:text-[56px] lg:text-[46px] xl:md:text-[56px] p-1 lg:p-0  text-nowrap leading-10 md:leading-[58px] tracking-[1.29px] md:tracking-[2px]">
            XX99 MARK II <br />
            HEADPHONES
          </h1>
          <p className="opacity-75 font-medium text-[15px] leading-[25px] w-[328px] md:w-[349px] tracking-normal  pt-2 px-0.5 lg:p-0">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link
            href="/product/xx99-mark-two-headphones"
            className="w-40 h-12 md:mt-4 xl:mt-6 flex justify-center items-center text-white text-[13px] font-bold bg-[#D87D4A] hover:bg-[#FBAF85]  tracking-[1px]"
          >
            SEE PRODUCT
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection