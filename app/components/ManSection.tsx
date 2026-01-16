import React from 'react'

const ManSection = () => {
  return (
    <section className="flex items-center justify-center py-20 md:py-20 md:px-8 lg:px-16 xl:px-24">
      <div className="flex flex-col-reverse lg:flex-row items-center lg:justify-between  w-full lg:max-w-[1110px] gap-14 lg:space-x-16 lg:gap-0 ">
       
        <div className="  text-black flex  flex-col justify-center items-center lg:items-start gap-7 text-center lg:text-left w-[327px] md:w-[573px]  lg:w-[445px] xl:max-w-[445px]">
          {" "}
          <h2 className="font-bold text-[28px]  lg:text-[36px] md:text-[40px] leading-11 uppercase tracking-[1px] md:tracking-[1.43px]  ">
            Bringing you the <br className='hidden xl:block'/> <span className="text-[#D87D4A]">best</span>{" "}
            {""}
            audio gear
          </h2>
          <p className="opacity-50 text-[15px] tracking-normal leading-[25px] ">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      
        <div className="lg:w-[540px]">
          <img
            src="/assets/shared/mobile/image-best-gear.jpg"
            alt="man-image"
            className="block md:hidden w-[327px] h-[300px] rounded-lg"
          />
          <img
            src="/assets/shared/tablet/image-best-gear.jpg"
            alt="man-image"
            className="hidden md:block lg:hidden w-[689px] rounded-lg"
          />
          <img
            src="/assets/shared/desktop/image-best-gear.jpg"
            alt="man-image"
            className="rounded-lg hidden lg:block w-full  "
          />
        </div>
      </div>
    </section>
  );
}

export default ManSection