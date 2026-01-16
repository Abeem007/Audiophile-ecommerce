import React from "react";
import Link from "next/link";
const Category = [
  {
    id: 1,
    img: "/assets/shared/desktop/image-category-thumbnail-headphones.png",
    name: "Headphones",
    Link: "/headphones",
  },
  {
    id: 2,
    img: "/assets/shared/desktop/image-category-thumbnail-speakers.png",
    name: "Speakers",
    Link: "/speakers",
  },
  {
    id: 3,
    img: "/assets/shared/desktop/image-category-thumbnail-earphones.png",
    name: "Earphones",
    Link: "/earphones",
  },
];


const CategorySection = () => {
  return (
    <div className="justify-center items-center p-30 md:pt-30 md:pb-25 lg:py-30 lg:px-0 xl:px-39  xl:py-30 ">
      <div className="flex flex-col  md:flex-row justify-center items-center mx-auto  gap-18 md:gap-0 md:space-x-4  xl:space-x-7 w-full xl:max-w-[1110px] ">
        {Category.map((cat, index) => (
          <div
            key={cat.id}
            className=" flex flex-col items-center justify-center relative rounded-lg "
          >
            <img
              src={cat.img}
              alt="category-image"
              className="absolute z-5 w-[119.92px] h-36  md:w-[139.92px] md:h-[164px] lg:w-[192.95px] lg:h-[230px]  -top-11 md:-top-16 object-cover"
            />
            <div className="bg-[#F1F1F1] flex flex-col items-center justify-end text-black w-[327px] h-[165px] md:w-[223px] md:h-[165px] lg:w-[290px] lg:h-[204px] xl:w-[350px] xl:h-[204px] rounded-lg pb-3 lg:pb-6  gap-2 ">
              <p className="font-bold text-[15px] lg:text-[18px] tracking-[1.07px] lg:tracking-[1.29px] text-center uppercase">
                {cat.name}
              </p>
              <Link href={cat.Link}>
                <span className="flex gap-2 items-center ">
                  <p className="opacity-50 font-bold uppercase text-[13px]">
                    shop
                  </p>
                  <img
                    src="/assets/shared/desktop/icon-arrow-right.svg"
                    alt=""
                  />
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
