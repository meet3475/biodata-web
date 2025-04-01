"use client"
import Footer from "@/Layout/Footer/page";
import Navbar from "@/Layout/Navbar/page";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import { FreeMode, Navigation } from 'swiper/modules';
import { BiSolidQuoteLeft } from "react-icons/bi";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';
import BiodataForm from "@/components/BiodataForm/BiodataForm";


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

const reviews = [
  {
    name: "Yukta Shukla",
    description: "I was looking for an easy and quick way to create and download marriage biodata. My Biodata for Marriage made it incredibly simple! The customizable marriage biodata templates were professional, and I could customize everything.",
    image: "/images/reviwes1.png"
  },
  {
    name: "Amit Singh",
    description: "I struggled with creating a biodata manually until I found My Biodata for Marriage. It saved me so much time, and the final product looked amazing. I received positive feedback from several families and found my partner in just a few months. Excellent platform!",
    image: "/images/reviwes2.png"
  },
  {
    name: "Santosh Mishra",
    description: "This platform made the entire process of creating my biodata so much easier. The Hindu biodata template was exactly what I needed, and I could add all the important details. It was hassle-free and professional, and I’m grateful for this marriage biodata maker online.",
    image: "/images/reviwes3.png"
  },
  {
    name: "Deepal Juyal",
    description: "Nice place with a huge variety of collections, would recommend people who are starting their own business to visit this place and start with the products they offer and this web is easy and quick way to create and download marriage biodata.",
    image: "/images/reviwes4.png"
  }

]


export default function Home() {

  return (
    <>

      {/* navbar section start */}
      <Navbar />
      {/* navbar section end */}

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

      {/* templates slider section start */}
      <div className="bg-[#B92753]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-[60px] mt-[-150px]">
          <h2 className="text-[30px] sm:text-[45px] text-[white]  font-bold mb-5">Popular Marriage Biodata Designs</h2>
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
                        className="temp-img"
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
      {/* templates slider section end */}

      {/* create biodata section start */}
      <BiodataForm />
      {/* create biodata section end */}

      {/* reviews section start */}
      <div className="bg-[#B92753]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-[60px]">
          <h2 className="text-[30px] sm:text-[45px] text-[white] font-bold mb-5 text-center mx-0 md:mx-24">What Our Happy Users Say About Our Marriage Biodata Format</h2>
          <h6 className="text-[16px] sm:text-[20px] text-[white] mb-[60px] text-center mx-0 md:mx-24">Our goal at My Biodata for Marriage is to assist you in creating the ideal marriage biodata. Hear from some of our happy customers who have successfully used our biodata maker platform to find the right person.</h6>
          <div className="">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              freeMode={true}
              navigation={true}
              modules={[FreeMode, Navigation]}
              className="mySwiper"
              breakpoints={{
                310: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                540: {
                  slidesPerView: 1.5,
                  spaceBetween: 15,
                },
                940: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 2.5,
                  spaceBetween: 30,
                },
                1600: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
            >
              {
                reviews.map((item) => (
                  <SwiperSlide>
                    <div className="bg-white shadow-lg rounded-xl p-6 sm:p-8 text-center max-w-md mx-auto border border-gray-200 [border-top:12px_solid_#4649C0] h-[350px]">
                      <div className="flex justify-center text-[#4649C0] text-4xl">
                        <BiSolidQuoteLeft />
                      </div>
                      <p className="text-gray-700 mt-4 text-[12px] sm:text-[14px]">
                        {item.description}
                      </p>
                      <div className="mt-5">
                        <Image
                          src={item.image}
                          alt="profile"
                          width={60}
                          height={60}
                          className="rounded-full mx-auto border-2 border-gray-300"
                        />
                      </div>
                      <h4 className="text-[16px] sm:text-[18px] font-semibold text-gray-900 mt-3">{item.name}</h4>
                    </div>
                  </SwiperSlide>
                ))
              }

            </Swiper>
          </div>
        </div>

      </div>
      {/* reviews section end */}

      {/* Footer section start */}
      <Footer />
      {/* Footer section end */}
    </>
  )
}
