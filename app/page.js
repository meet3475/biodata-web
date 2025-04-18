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
import { useEffect, useRef, useState } from "react";
import Loarder from "@/components/Loarder/Loarder";
import { useSearchParams } from "next/navigation";
import DataLoader from "@/components/Loarder/DataLoader";


const design = [
  {
    id: "1",
    image: "/images/biodata-bg-1.jpg"
  },
  {
    id: "2",
    image: "/images/biodata-bg-2.jpg"
  },
  {
    id: "3",
    image: "/images/biodata-bg-3.jpg"
  },
  {
    id: "4",
    image: "/images/biodata-bg-4.jpg"
  },
  {
    id: "5",
    image: "/images/biodata-bg-5.jpg"
  },
  {
    id: "6",
    image: "/images/biodata-bg-6.jpg"
  },
  {
    id: "7",
    image: "/images/biodata-bg-7.jpg"
  },
  {
    id: "8",
    image: "/images/biodata-bg-8.jpg"
  },
  {
    id: "9",
    image: "/images/biodata-bg-9.jpg"
  },
  {
    id: "10",
    image: "/images/biodata-bg-10.jpg"
  }
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

  const templatesRef = useRef(null);
  const biodataFormRef = useRef(null);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (you can remove this in production)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);


  const [designSliderLoading, setDesignSliderLoading] = useState(true);
  const [reviewSliderLoading, setReviewSliderLoading] = useState(true);

  useEffect(() => {
    const designTimer = setTimeout(() => setDesignSliderLoading(false), 3000);
    const reviewTimer = setTimeout(() => setReviewSliderLoading(false), 3000);

    return () => {
      clearTimeout(designTimer);
      clearTimeout(reviewTimer);
    };
  }, []);

  if (isLoading) {
    return <Loarder />;
  }

  // Function to scroll to templates section
  const scrollToTemplates = () => {
    if (templatesRef.current) {
      templatesRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Add this scroll function
  const scrollToBiodataForm = () => {
    if (biodataFormRef.current) {
      biodataFormRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };




  return (
    <>

      {/* navbar section start */}
      <Navbar scrollToBiodataForm={scrollToBiodataForm} />
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
            <button className="py-2 px-4 md:px-10 bg-[#9E2665] text-white text-base md:text-[18px] font-medium rounded-md hover:bg-[#4649C0]"
              onClick={scrollToBiodataForm}
            >
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
      <div ref={templatesRef} className="bg-[#B92753]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-[60px] mt-[-150px]">
          <h2 className="text-[30px] sm:text-[45px] text-[white]  font-bold mb-5">Popular Marriage Biodata Designs</h2>
          <h6 className="text-[16px] sm:text-[20px] text-[white] mb-5">Take a look at our most downloaded marriage biodata templates! You all find popular layouts, stylish designs, and creative content ideas to inspire your own biodata. Discover what works best and make yours stand out!</h6>
          <h6 className="text-[16px] sm:text-[20px] text-[white] mb-[60px]">Select your favourite biodata design to get started</h6>
          <div>
            {
              designSliderLoading ? (
                <DataLoader />
              ) : (
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
                    450: {
                      slidesPerView: 1.3,
                      spaceBetween: 15,
                    },
                    585: {
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
                    design.map((item, index) => (
                      <SwiperSlide key={index}>
                        <div className="rounded-[20px] overflow-hidden relative still-data">
                          <div className="w-[425px] h-[550px]">
                            <img
                              src={item.image}
                              alt="Template"
                              className="temp-img"
                            />
                          </div>

                          <div className="back-effect">
                            <button className="select-btn"
                              onClick={() => {
                                // Set selected template in sessionStorage
                                sessionStorage.setItem('selectedTemplate', item.image);

                                // Dispatch a custom event to notify BiodataForm component
                                const event = new CustomEvent('templateSelected', {
                                  detail: { template: item.image }
                                });
                                window.dispatchEvent(event);

                                // Scroll to biodata form section
                                scrollToBiodataForm();
                              }}
                            >Select Template</button>
                          </div>
                        </div>


                      </SwiperSlide>
                    ))
                  }
                </Swiper>
              )
            }
          </div>
        </div>
      </div>
      {/* templates slider section end */}

      {/* create biodata section start */}
      <div ref={biodataFormRef} id="create-biodata">
        <BiodataForm scrollToTemplates={scrollToTemplates} />
      </div>
      {/* create biodata section end */}

      {/* How to Create biodata section start */}
      <div className="bg-[#B92753]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-[80px]">
          <div className="text-center">
            <h2 className="text-[28px] sm:text-[45px] text-[#B92753] font-bold mb-3 bg-white rounded-lg lg:shadow-2xl block lg:inline py-3 px-2 sm:px-5">How to Create Free Marriage Biodata?</h2>
          </div>
          <div className="flex flex-col items-center lg:items-stretch lg:flex-row mt-14 sm:gap-14">
            <div className="w-[300px] md:w-[500px] h-[450px] mb-5 sm:mb-0">
              <img
                src="/images/biodata.png"
                alt="biodata"
                className="rounded-lg w-[100%] h-[100%]"
              />
            </div>

            <div className="bg-[white] py-8 px-8 rounded-lg flex flex-col justify-center">
              <h4 className="font-bold text-[22px]">Step 1. Choose the Free Template</h4>
              <p className="mt-3 mb-7">Click on the <span className="font-semibold">Choose Your Template</span> at Now choose the  <span className="font-semibold">Free template</span> from our Popular Marriage Biodata Designs.</p>

              <h4 className="font-bold text-[22px]">Step 2. Fill all your details in the language of your choice</h4>
              <p className="mt-3 mb-7">Click on the <span className="font-semibold">Create Biodata</span> Button. In the biodata form, select the language in which you want to create your biodata. Add your <span className="font-semibold">Profile Photho</span> and fill in your <span className="font-semibold">personal, family, and contact</span> details.</p>

              <h4 className="font-bold text-[22px]">Step 3. Download Free Marriage Biodata</h4>
              <p className="mt-3 mb-7">Click on the <span className="font-semibold"> Generate Biodata</span> button. You will be directed to the Privews page. <span className="font-semibold">Download</span> your biodata by clicking on the Download Biodata button.</p>
            </div>
          </div>
        </div>
      </div>
      {/* How to Create biodata section end */}

      {/* reviews section start */}
      <div className="bg-[white]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-[60px]">
          <h2 className="text-[30px] sm:text-[48px] text-[#181966] font-bold mb-5 text-center mx-0 md:mx-24">What Our Happy Users Say About Our Marriage Biodata Format</h2>
          <h6 className="text-[16px] sm:text-[20px] text-[#181966] mb-[60px] text-center mx-0 md:mx-24">Our goal at My Biodata for Marriage is to assist you in creating the ideal marriage biodata. Hear from some of our happy customers who have successfully used our biodata maker platform to find the right person.</h6>
          <div className="">
            {
              reviewSliderLoading ? (
                <DataLoader />
              ) : (
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
                    reviews.map((item, index) => (
                      <SwiperSlide key={index}>
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
              )
            }
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
