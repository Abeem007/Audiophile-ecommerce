import { notFound } from "next/navigation";
import { products } from "@/app/lib/product";

import Link from "next/link";
import CategorySection from "@/app/components/CategorySection";
import ManSection from "@/app/components/ManSection";
import GoBackButton from "@/app/components/GoBackButton";
import ProductDetails from "../../components/ProductDetails";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return notFound();
  return (
    <section className="bg-white py-10 ">
      <div className=" mx-auto md:px-3 lg:px-6 xl:px-26 ">
        <GoBackButton />
      </div>

      <div>
        <div className="flex flex-col md:flex-row items-center justify-between md:justify-evenly bg-white pt-10  pb-10 md:pb-25 lg:pb-35  md:px-0 gap-10 md:gap-16 lg:gap-15  xl:gap-0">
          <img
            src={product.image.mobile}
            alt={product.name}
            className="block md:hidden rounded-lg  w-[327px] h-[327px] "
          />
          <img
            src={product.image.tablet}
            alt=""
            className="h-[480px] w-[281px] hidden md:block lg:hidden rounded-lg"
          />
          <img
            src={product.image.desktop}
            alt="headphone-product"
            className="xl:w-[540px] xl:h-[560px] lg:w-[450px] lg:h-full  hidden lg:block rounded-lg"
          />

         <ProductDetails product={product} />
        </div>
        <div className="flex flex-col lg:flex-row items-center  md:items-start justify-between lg:justify-evenly bg-white pt-10 pb-20 md:py-8 lg:py-10  px-10 gap-10 lg:gap-15  xl:gap-0 text-black">
          <div className="flex flex-col justify-start  gap-3 w-[327px] md:w-full lg:w-[635px]">
            <h2 className="text-[24px] md:text-[32px] font-bold tracking-[0.86px] md:tracking-[1.14px] uppercase leading-9 pb-4">
              FEATURES
            </h2>
            <p className="opacity-50 text-[15px] tracking-[0px] md:leading-[25px] whitespace-pre-wrap ">
              {product.features}
            </p>
          </div>
          <div className="w-full md:w-[549px] lg:w-[350px] flex flex-col justify-start  md:flex-row md:justify-between lg:flex-col lg:justify-start pt-10 md:pt-20 md:pb-10 lg:pt-0 lg:pb-0">
            {" "}
            <h2 className="uppercase font-bold text-[24px] md:text-[32px] leading-9 tracking-[0.86px] md:tracking-[1.14px]">
              in the box
            </h2>
            <ul>
              {product.includes.map((item, index) => (
                <li className="space-x-4 mb-3" key={index}>
                  <span
                    className="font-bold text-[15px] leading-[25px] tracking-[0px] text-[#D87D4A]
]"
                  >
                    {item.quantity}x
                  </span>{" "}
                  <span className="opacity-50 teaxt-[15px] leading-[25px] tracking-[0px]">
                    {item.item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="    bg-white pt-3 pb-10 md:py-10 lg:py-20 px-5  md:px-10 gap-5 lg:gap-8  w-full flex flex-col md:flex-row items-center justify-center">
          <div className="flex flex-col gap-5 lg:gap-8">
            <div>
              <img
                src={product.gallery.first.mobile}
                alt={product.name}
                className="rounded-lg block md:hidden"
              />
              <img
                src={product.gallery.first.tablet}
                alt={product.name}
                className="rounded-lg hidden md:block lg:hidden"
              />
              <img
                src={product.gallery.first.desktop}
                alt={product.name}
                className="rounded-lg hidden lg:block"
              />
            </div>
            <div>
              <img
                src={product.gallery.second.mobile}
                alt={product.name}
                className="rounded-lg block md:hidden"
              />
              <img
                src={product.gallery.second.tablet}
                alt={product.name}
                className="rounded-lg hidden md:block lg:hidden"
              />
              <img
                src={product.gallery.second.desktop}
                alt={product.name}
                className="rounded-lg hidden lg:block"
              />
            </div>
          </div>
          <div className="">
            <img
              src={product.gallery.third.mobile}
              alt={product.name}
              className="rounded-lg block md:hidden"
            />
            <img
              src={product.gallery.third.tablet}
              alt={product.name}
              className="rounded-lg hidden md:block lg:hidden"
            />
            <img
              src={product.gallery.third.desktop}
              alt={product.name}
              className="rounded-lg hidden lg:block"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center  ">
          <h2 className=" text-center font-bold text-[24px]  md:text-[32px] leading-9 tracking-[0.86px] md:tracking-[1.14px] uppercase text-black pt-8 pb-5 md:pt-18 md:pb-12 lg:py-8">
            YOU MAY ALSO LIKE
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-14 md:gap-5 xl:gap-7">
            {product.others?.map((other, index) => (
              <div
                key={index}
                className="flex flex-col w-[327px] h-[265px] md:w-[223px]  lg:w-[300px] md:h-[471px] xl:w-[350px] items-center justify-center gap-5"
              >
                <div className="w-[327px] h-[120px] md:w-[223px] md:h-[318px] lg:w-[300px] lg:h-[268px] xl:w-[350px] xl:h-[318px] rounded-lg bg-[#F1F1F1]">
                  <img
                    src={other.image.mobile}
                    alt={other.name}
                    className="  block md:hidden w-full h-full object-contain"
                  />
                  <img
                    src={other.image.tablet}
                    alt={other.name}
                    className="  hidden md:block lg:hidden w-full h-full object-contain"
                  />
                  <img
                    src={other.image.desktop}
                    alt={other.name}
                    className=" hidden lg:block w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col items-center justify-center gap-4 md:gap-0 pt-5">
                  <h3 className="font-bold text-[24px] tracking-[1.71px] text-center uppercase">
                    {other.name}
                  </h3>
                  <Link
                    href={`/product/${other.slug}`}
                    className="w-40 h-12 md:mt-4 xl:mt-6 flex justify-center items-center text-white text-[13px] font-bold bg-[#D87D4A] hover:bg-[#FBAF85]  tracking-[1px]"
                  >
                    SEE PRODUCT
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white  md:mt-15">
          <CategorySection />
        </div>
        <div className="bg-white -mt-25 md:-mt-12 ">
          <ManSection />
        </div>
      </div>
    </section>
  );
}
