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
    description: "This platform made the entire process of creating my biodata so much easier. The Hindu biodata template was exactly what I needed, and I could add all the important details. It was hassle-free and professional, and I'm grateful for this marriage biodata maker online.",
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
                            <Image
                              src={item.image}
                              width={500}
                              height={1000}
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
              <Image
                src="/images/biodata.png"
                alt="biodata"
                width={1000}
                height={500}
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

      {/* What is Marriage Biodata section start */}
      <div className="bg-[white]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-[80px]">
          <div className="text-left">
            <h2 className="text-[28px] sm:text-[45px] text-[#B92753] font-bold mb-3">What is Marriage Biodata?</h2>
            <p className="text-[14px] sm:text-[16px] text-[#707070]">Many cultures have arranged marriages. A marriage biodata is a quick and clear way to introduce yourself to potential partners and their families. A good online biodata can help you make a strong first impression and increase your chances of finding a suitable match.</p>

            <h3 className="text-[20px] sm:text-[30px] my-[30px] text-[#B92753] font-bold">Importance of Biodata in Matrimonial Search</h3>

            <h4 className="text-[#4649c0] text-[16px] sm:text-[20px] font-bold mt-6">1. A Personal Snapshot :-</h4>
            <p className="text-[#707070] text-[14px] sm:text-[16px] my-1">Your marriage biodata format showcases a snapshot of your life, encapsulating your morals, education, career, and family values. It is the marriage resume that speaks volumes before the first hello.</p>

            <h4 className="text-[#4649c0] text-[16px] sm:text-[20px] font-bold mt-6">2. Cultural Relevance :-</h4>
            <p className="text-[#707070]  text-[14px] sm:text-[16px] my-1">In cultures where arranged marriages are prevalent, matrimonial biodata holds immense significance. The biodata for marriage proposal contains details that reflect one's social and cultural background, which is essential for traditional matchmaking.</p>

            <h4 className="text-[#4649c0] text-[16px] sm:text-[20px] font-bold mt-6">3. Matchmaking Made Easy :-</h4>
            <p className="text-[#707070] text-[14px] sm:text-[16px] my-1">With our online biodata maker for marriage, creating a matrimonial profile is hassle-free. The bio data for marriage format is designed to cover all aspects that are important for finding the right match.</p>

            <h4 className="text-[#4649c0] text-[16px] sm:text-[20px] font-bold mt-6">4. Time-Saving Tool :-</h4>
            <p className="text-[#707070] text-[14px] sm:text-[16px] my-1">Our free online biodata maker for marriage streamlines the process of creating a marriage profile. It is a time-efficient way to prepare biodata for marriage without compromising on the quality or details.</p>

            <h4 className="text-[#4649c0] text-[16px] sm:text-[20px] font-bold mt-6">5. Wide Range of Choices :-</h4>
            <p className="text-[#707070] text-[14px] sm:text-[16px] my-1">Whether you choose a simple shadi biodata format or an elaborate marriage biodata design, our free biodata maker offers a variety of templates to suit your needs.</p>

            <h4 className="text-[#4649c0] text-[16px] sm:text-[20px] font-bold mt-6">6. Accessibility :-</h4>
            <p className="text-[#707070] text-[14px] sm:text-[16px] my-1">Whether you choose a simple shadi biodata format or an elaborate marriage biodata design, our free biodata maker offers a variety of templates to suit your needs.</p>

            <h4 className="text-[#4649c0] text-[16px] sm:text-[20px] font-bold mt-6">7. First Step to a Lifelong Journey :-</h4>
            <p className="text-[#707070] text-[14px] sm:text-[16px] my-1">Whether you choose a simple shadi biodata format or an elaborate marriage biodata design, our free biodata maker offers a variety of templates to suit your needs.</p>
          </div>

        </div>
      </div>
      {/* What is Marriage Biodata section end */}

      {/* Essential features biodata section start */}
      <div className="bg-[#B92753]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-[80px]">
          <div className="text-center">
            <h2 className="text-[30px] sm:text-[45px] text-[white] font-bold">Essential Features Of Our Biodata Maker</h2>
          </div>
          <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-10 mt-20">

            <div className="bg-[white] w-[300px] sm:w-[380px] py-8 px-8 rounded-lg shadow-xl flex flex-col items-center">
              <div className="w-[50px] h-[50px] bg-[#f5b2c6] rounded-[50%] flex justify-center items-center">
                <svg width={28} height={28} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.98.827C2.007.827.41 2.397.41 4.333v24.544c0 1.937 1.597 3.506 3.57 3.506h24.99c1.973 0 3.57-1.569 3.57-3.506V4.333c0-1.937-1.599-3.506-3.57-3.506H3.98ZM27.185 7.84c.457 0 .913.17 1.262.513a1.73 1.73 0 0 1 0 2.48L14.952 24.086a1.8 1.8 0 0 1-1.263.514c-.473 0-.928-.184-1.262-.514l-6.164-6.054a1.73 1.73 0 0 1 0-2.479 1.806 1.806 0 0 1 2.525 0l4.901 4.814L25.923 8.353a1.796 1.796 0 0 1 1.262-.513Zm8.926 0v21.037c0 3.873-3.197 7.013-7.14 7.013H7.55c0 1.937 1.597 3.506 3.57 3.506h24.99c1.973 0 3.57-1.57 3.57-3.506V11.346c0-1.937-1.599-3.506-3.57-3.506Z" fill="#B92753" /></svg>

              </div>
              <h3 className="text-[20px] sm:text-[24px] font-bold my-2">Easy to use</h3>
              <p className="text-[#707070]">No Sign up / Registration required. Enter your details, choose template and voila!! Your biodata in PDF format is ready.</p>
            </div>

            <div className="bg-[white] w-[300px] sm:w-[380px] py-8 px-8 rounded-lg shadow-xl flex flex-col items-center">
              <div className="w-[50px] h-[50px] bg-[#f5b2c6] rounded-[50%] flex justify-center items-center">
                <svg width={28} height={28} viewBox="0 0 45 43" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M29.564 8.358 31.044 0H12.763l1.48 8.358h15.32Zm-8.787 16.57a2.741 2.741 0 0 1-1.685-2.524c0-1.523 1.26-2.76 2.811-2.76 1.55 0 2.811 1.238 2.811 2.76a2.741 2.741 0 0 1-1.685 2.524v11.21l9.77-16.598-4.934-8.977h-11.93l-4.928 8.976 9.778 16.605V24.93h-.008Z" fill="var(--medium-vermilion)" /><path d="M42.078 24.085h1.72a.408.408 0 0 0 .411-.404v-5.117a.407.407 0 0 0-.41-.404h-5.211c-.227 0-.41.18-.41.404v5.117c0 .223.183.404.41.404h1.21c-1.253 7.078-6.973 12.697-14.188 13.928v-1.176a.407.407 0 0 0-.41-.403h-5.212c-.226 0-.41.18-.41.403v1.182c-7.222-1.244-12.943-6.856-14.196-13.934h1.21a.408.408 0 0 0 .412-.404v-5.117a.407.407 0 0 0-.411-.404H1.375c-.227 0-.41.18-.41.404v5.117c0 .223.183.404.41.404h1.72c.963 6.167 4.928 11.403 10.38 14.206h-6.69c-.539-1.315-2.019-2.17-3.619-1.753a2.962 2.962 0 0 0-2.088 2.052c-.61 2.252 1.437 4.262 3.73 3.664a2.94 2.94 0 0 0 1.983-1.752h12.78v1.453c0 .223.184.403.41.403h5.211c.227 0 .41-.18.41-.403v-1.453H38.39c.539 1.314 2.018 2.17 3.618 1.752a2.962 2.962 0 0 0 2.09-2.051c.608-2.253-1.438-4.263-3.732-3.665a2.94 2.94 0 0 0-1.983 1.753h-6.69c5.451-2.81 9.416-8.039 10.386-14.206Z" fill="#B92753" /></svg>

              </div>
              <h3 className="text-[20px] sm:text-[24px] font-bold my-2">Customization made simple</h3>
              <p className="text-[#707070]">You have full control of what you want in your marriage biodata. You can add new fields and delete or rename the existing fields.</p>
            </div>

            <div className="bg-[white] w-[300px] sm:w-[380px] py-8 px-8 rounded-lg shadow-xl flex flex-col items-center">
              <div className="w-[50px] h-[50px] bg-[#f5b2c6] rounded-[50%] flex justify-center items-center">
                <svg width={28} height={28} viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.333 9.143c0-4.58 3.782-8.294 8.445-8.294h24.395c4.664 0 8.445 3.714 8.445 8.294v23.96c0 4.58-3.781 8.293-8.445 8.293H8.778c-4.663 0-8.445-3.714-8.445-8.294V9.142Zm6.396 2.01a.708.708 0 0 0 0 1.353 5.036 5.036 0 0 1 3.237 3.18c.22.652 1.16.652 1.377 0a5.036 5.036 0 0 1 3.237-3.18.708.708 0 0 0 0-1.353 5.036 5.036 0 0 1-3.237-3.179c-.22-.652-1.16-.652-1.377 0a5.032 5.032 0 0 1-3.237 3.18Zm21.085-1.105c-.259-.774-1.376-.774-1.635 0l-1.212 3.623a5.967 5.967 0 0 1-3.837 3.77l-3.69 1.19a.84.84 0 0 0 0 1.605l3.69 1.19a5.967 5.967 0 0 1 3.837 3.77l1.212 3.623c.26.774 1.376.774 1.635 0l1.214-3.623a5.962 5.962 0 0 1 3.838-3.77l3.689-1.19a.84.84 0 0 0 0-1.605l-3.69-1.193a5.962 5.962 0 0 1-3.837-3.769l-1.214-3.621ZM14.912 25.253c-.259-.774-1.375-.774-1.634 0l-.148.444a5.962 5.962 0 0 1-3.838 3.769l-.452.145a.84.84 0 0 0 0 1.606l.452.145a5.962 5.962 0 0 1 3.838 3.77l.148.444c.259.774 1.375.774 1.634 0l.149-.445a5.967 5.967 0 0 1 3.837-3.769l.453-.145a.84.84 0 0 0 0-1.605l-.453-.146a5.967 5.967 0 0 1-3.837-3.77l-.149-.443Z" fill="#B92753" /></svg>

              </div>
              <h3 className="text-[20px] sm:text-[24px] font-bold my-2">Great Looking Templates</h3>
              <p className="text-[#707070]">We have designed these templates which are unique, clean and perfect for a matrimonial biodata.</p>
            </div>

          </div>
        </div>
      </div>
      {/* Essential features biodata section end */}

      {/*Why Choose MyBiodataforMarriage section start */}
      <div className="bg-[white]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-[80px]">
          <div className="text-left">
            <h2 className="text-[28px] sm:text-[45px] text-[#B92753] font-bold mb-3">Why Choose Wedding Biodata?</h2>
            <p className="text-[14px] sm:text-[18px] text-[#707070] mb-6">At My Biodata for Marriage, we understand that your matrimonial biodata for a wedding is a key part of your journey to finding a life partner. Heres why you should trust us:</p>

            <h5 className="text-[14px] sm:text-[16px] text-[#4649c0] ml-10 mb-2">
             * Easy-to-Use Platform: Our Marriage Bio data Maker is designed for simplicity, allowing anyone to create a customized biodata without any hassle.
            </h5>

            <h5 className="text-[14px] sm:text-[16px] text-[#4649c0] ml-10 mb-2">
              * Wide Variety of Templates: We offer a range of Customizable Biodata Templates and Marriage Biodata Formats suitable for every need.
            </h5>

            <h5 className="text-[14px] sm:text-[16px] text-[#4649c0] ml-10 mb-2">
              * Personalized Designs: Choose from a selection of stylish and professional Biodata designs that fit your personality and preferences.
            </h5>

            <h5 className="text-[14px] sm:text-[16px] text-[#4649c0] ml-10 mb-2">
              * Instant Download: Get your personalized Bio-data ready for download in PDF format or any other file format that suits your needs.
            </h5>

            <p className="text-[14px] sm:text-[18px] text-[#707070] mt-6 mb-3">
              Start your journey towards finding the perfect partner today with My Biodata for Marriage. Create a Perfect Marriage Biodata that truly reflects who you are.
            </p>

            <p className="text-[14px] sm:text-[18px] text-[#707070]">
            By following these simple steps, you all have a professionally designed, personalized Marriage Biodata that is sure to impress. Whether you are looking for a Marriage Biodata Sample for reference or a customized biodata, our platform makes it easier than ever to create a marriage biodata tailored just for you.
            </p>
          </div>

        </div>
      </div>
      {/*Why Choose MyBiodataforMarriage section end */}

      {/* reviews section start */}
      <div className="bg-[#B92753]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-[60px]">
          <h2 className="text-[30px] sm:text-[48px] text-[white] font-bold mb-5 text-center mx-0 md:mx-24">What Our Happy Users Say About Our Marriage Biodata Format</h2>
          <h6 className="text-[16px] sm:text-[20px] text-[white] mb-[60px] text-center mx-0 md:mx-24">Our goal at My Biodata for Marriage is to assist you in creating the ideal marriage biodata. Hear from some of our happy customers who have successfully used our biodata maker platform to find the right person.</h6>
          <div>
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
