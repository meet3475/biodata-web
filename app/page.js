"use client"
import Footer from "@/Layout/Footer/page";
import Navbar from "@/Layout/Navbar/page";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const design = [
  "/images/biodata-bg-1.jpg",
  "/images/biodata-bg-2.jpg",
  "/images/biodata-bg-3.jpg",
  "/images/biodata-bg-4.jpg",
  "/images/biodata-bg-5.jpg",
  "/images/biodata-bg-6.jpg",
  "/images/biodata-bg-7.jpg",
  "/images/biodata-bg-8.jpg",
  "/images/biodata-bg-9.jpg",
  "/images/biodata-bg-10.jpg",
]


export default function Home() {



  return (
    <>
      <Navbar />

      {/* hero section start */}
      <div className="pos-r">
        <div className="Aurora__OuterWrapper-sc-8038013e-0 iMaElx pos-a">
          <div className="Aurora__Wrapper-sc-8038013e-1 iWvFML full-width">
            <div className="one" />
            <div className="two" />
            <div className="three" />
            <div className="four" />
          </div>
        </div>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between top-[-230px]">
        <div className="w-full md:w-[40%] order-2 md:order-1">
          <h1 className="text-3xl md:text-[48px] font-bold mb-4 md:mb-8 text-center md:text-left hero-title">
            The Ultimate Marriage Biodata Maker
          </h1>
          <p className="text-base md:text-[18px] mb-4 md:mb-8 text-center md:text-left hero-text">
            Create beautiful biodata for marriage with just a few clicks! Easy to use,
            fully customizable, elegantly designed marriage biodata formats
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="py-2 px-4 md:px-10 bg-[#9E2665] text-white text-base md:text-[18px] font-medium rounded-md hover:bg-[#4649C0]">
              Create Biodata
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden w-full md:w-[60%] order-1 md:order-2 mb-4 md:mb-0">
          <div className="cursor-pointer transition-transform duration-500 ease-in-out hover:scale-105 hover:translate-y-[-10px]">
            <Image
              src="/images/hero.png"
              alt="Hero"
              width={1000}
              height={500}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
      {/* hero section end */}


      <div className="bg-[#B92753]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-[60px] mt-[-150px]">
          <h2 className="text-[30px] sm:text-[45px] text-[white] font-bold mb-5">Popular Marriage Biodata Designs</h2>
          <h6 className="text-[16px] sm:text-[20px] text-[white] mb-5">Take a look at our most downloaded marriage biodata templates! You'll find popular layouts, stylish designs, and creative content ideas to inspire your own biodata. Discover what works best and make yours stand out!</h6>
          <h6 className="text-[16px] sm:text-[20px] text-[white] mb-[60px]">Select your favourite biodata design to get started</h6>
          <div>
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              className="mySwiper"
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              breakpoints={{
                310: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                540: {
                  slidesPerView: 2,
                  spaceBetween: 15,
                },
                940: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1600: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
            >
              {
                design.map((item) => (
                  <SwiperSlide>
                    <div className="rounded-[20px] overflow-hidden relative still-data">
                      <Image
                        src={item}
                        alt="Template"
                        width={1000}
                        height={500}
                      />
                      <div className="back-effect">
                        <button className="select-btn">Select Template</button>
                      </div>
                    </div>


                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
        </div>
      </div>




      <Footer />
    </>
  )
}
