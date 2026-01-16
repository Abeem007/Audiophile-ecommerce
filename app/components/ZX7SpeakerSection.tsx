import React from "react";
import Link from "next/link";

const ZX7SpeakerSection = () => {
  return (
    <section className="py-4 md:py-5 lg:pt-10 lg:pb-10 m-5  lg:px-10 relative flex justify-center items-center rounded-lg ">
      <div className=" flex items-center  lg:justify-start  ">
        <div className=" flex flex-col absolute z-1 justify-start  gap-5 pl-5 lg:pl-20">
          <h3 className="text-[28px] tracking-[2px] font-bold text-nowrap">
            ZX7 SPEAKER
          </h3>

          <Link
            href="/product/zx7-speaker"
            className="w-40 h-12 flex items-center justify-center text-xs border  "
          >
            SEE PRODUCT
          </Link>
        </div>
        <div className="w-[327px] md:w-[689px] lg:w-full">
          <img
            src="/assets/home/mobile/image-speaker-zx7.jpg"
            alt="mobile-ZX7Speaker-image"
            className="block md:hidden rounded-lg"
          />
          <img
            src="/assets/home/tablet/image-speaker-zx7.jpg"
            alt="tablet-ZX7Speaker-image"
            className="hidden md:block lg:hidden rounded-lg"
          />
          <img
            src="/assets/home/desktop/image-speaker-zx7.jpg"
            alt="desktop-ZX7Speaker-image"
            className="hidden lg:block rounded-lg "
          />
        </div>
      </div>
    </section>
  );
};

export default ZX7SpeakerSection;
