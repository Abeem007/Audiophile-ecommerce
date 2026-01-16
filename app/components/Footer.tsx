import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="bg-[#101010] lg:px-0 xl:px-5">
      <div className="w-[101px] h-1 bg-[#D87D4A] mx-auto md:ml-10 lg:ml-20  " />
      <div className="py-8 md:px-10 md:py-5 lg:px-20 lg:py-10">
        <div className="flex flex-col items-center justify-center  md:justify-start  md:place-items-stretch  gap-4 text-white">
          <div className="flex flex-col lg:flex-row justify-between gap-6 md:gap-5 lg:gap-0">
            <img
              src="/assets/logo.svg"
              alt="logo"
              className="w-[143px] h-[25px]"
            />
            <nav className="flex flex-col items-center justify-center mt-4 md:mt-0  gap-5 md:flex-row md:justify-start md:items-start md:gap-9 lg:gap-6 text-white font-bold text-[13px]">
              <Link href="/" className="uppercase hover:text-[#D87D4A]">
                HOME
              </Link>
              <Link
                href="/headphones"
                className="uppercase hover:text-[#D87D4A]"
              >
                HEADPHONES
              </Link>
              <Link href="/speakers" className="uppercase hover:text-[#D87D4A]">
                SPEAKERS
              </Link>
              <Link
                href="/earphones"
                className="uppercase hover:text-[#D87D4A]"
              >
                EARPHONES
              </Link>
            </nav>
          </div>
          <div className="flex justify-between">
            <p className="text-center opacity-50 mt-4 md:pt-0 font-medium text-[15px] tracking-normal leading-[25px] w-[327px] -[150px] md:text-left md:w-[689px] md:-[75px] lg:w-[540px] lg:h-[100px]">
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we're open 7 days a week.
            </p>
            <ul className="hidden lg:flex gap-3 items-end ">
              <Link href="/facebook">
                <img
                  src="/assets/shared/desktop/icon-facebook.svg"
                  alt="facebook-link"
                  className="hover:bg-[#D87D4A] hover:scale-110"
                />
              </Link>
              <Link href="/twitter">
                <img
                  src="/assets/shared/desktop/icon-twitter.svg"
                  alt="twitter-link"
                  className="hover:bg-[#D87D4A] hover:scale-110"
                />
              </Link>
              <Link href="/instagram">
                <img
                  src="/assets/shared/desktop/icon-instagram.svg"
                  alt="instagram-link"
                  className="hover:bg-[#D87D4A] hover:scale-110"
                />
              </Link>
            </ul>
          </div>
          <p className="opacity-50 text-[15px] tracking-normal leading-[25px] font-bold hidden lg:block ">
            Copyright 2021. All Rights Reserved
          </p>
          <div className="flex flex-col items-center py-3 gap-8 md:p-0 md:gap-0 justify-center md:flex-row md:justify-between  lg:hidden">
            <p className="opacity-50 text-[15px] tracking-normal leading-[25px] font-bold">
              Copyright 2021. All Rights Reserved
            </p>
            <ul className="flex  lg:hidden gap-3 items-end ">
              <Link href="/facebook">
                <img
                  src="/assets/shared/desktop/icon-facebook.svg"
                  alt="facebook-link"
                  className="hover:fill-[#D87D4A] hover:scale-110"
                />
              </Link>
              <Link href="/twitter">
                <img
                  src="/assets/shared/desktop/icon-twitter.svg"
                  alt="twitter-link"
                  className="hover:fill-[#D87D4A] hover:scale-110"
                />
              </Link>
              <Link href="/instagram">
                <img
                  src="/assets/shared/desktop/icon-instagram.svg"
                  alt="instagram-link"
                  className="hover:fill-[#D87D4A] hover:scale-110"
                />
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
