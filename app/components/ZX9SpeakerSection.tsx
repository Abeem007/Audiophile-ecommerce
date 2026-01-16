import React from "react";
import Link from "next/link";

const ZX9SpeakerSection = () => {
  return (
    <section className=" md:px-10 lg:px-[61px] xl:px-10 flex items-center justify-center relative  rounded-lg">
      <div className=" w-[327px] h-[600px] md:w-[689px] md:h-[720px] lg:w-[1110px] lg:h-[560px]  bg-[#D87D4A] rounded-lg flex flex-col lg:flex-row lg:justify-between xl:justify-around gap-10 lg:gap-20 xl:gap-40 items-center md:justify-evenly">
        <div className="pt-10">
          <img
            src="/assets/home/desktop/pattern-circles.svg"
            alt=""
            className="absolute pointer-events-none lg:-top-8 xl:-top-9 left-0 -top-28 lg:-left-[88px] xl:-left-[65px] "
          />
          <img
            src="/assets/home/mobile/image-speaker-zx9.png"
            alt=""
            className="block pointer-events-none  md:hidden w-[172.25px] h-[207px] "
          />
          <img
            src="/assets/home/tablet/image-speaker-zx9.png"
            alt="speaker"
            className=" hidden pointer-events-none  md:block lg:hidden w-[197.21px] h-[237px] "
          />
          <img
            src="/assets/home/desktop/image-speaker-zx9.svg"
            alt=""
            className="absolute pointer-events-none  md:left-[247px] lg:left-[142.49px] xl:left-[182.49] md:top-[52px] lg:top-24 z-1 hidden lg:block"
          />
        </div>
        <div className="flex flex-col text-white w-[280px] md:w-[349px] h-[303px] text-center items-center justify-center lg:items-start lg:justify-start lg:text-left gap-4">
          <h3 className="font-bold text-[36px] leading-10 md:text-[56px] md:leading-[58px] tracking-[2px]  uppercase ">
            ZX9 <br /> SPEAKER
          </h3>
          <p className="opacity-75 text-[15px] leading-[25px] tracking-normal">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Link
            href="/product/zx9-speaker"
            className="w-40 mt-4 cursor-pointer h-12 flex items-center justify-center bg-black text-white text-xs"
          >
            SEE PRODUCT
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ZX9SpeakerSection;
