'use client';
import Loarder from '@/components/Loarder/Loarder';
import Footer from '@/Layout/Footer/page'
import Navbar from '@/Layout/Navbar/page'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import Image from 'next/image';

const AboutUs = () => {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: false // Changed to false to allow repeated animations
        });

        // Refresh AOS when route changes
        return () => {
            AOS.refresh();
        };
    }, []);

    // Add scroll event listener to refresh AOS
    useEffect(() => {
        const handleScroll = () => {
            AOS.refresh();
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 2000) // 5 seconds

        return () => clearTimeout(timer) // Clean up the timer
    }, [])

    if (isLoading) {
        return <Loarder />
    }


    return (
        <>
            <Navbar />

            <div className='bg-[#B92753]'>
                <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-[70px]'>
                    <div className='text-center'>
                        <h2 className='text-[42px] text-[#B92753] font-bold bg-white rounded-lg lg:shadow-2xl inline py-3 px-2 sm:px-5'>About Us</h2>
                        <p className='text-white text-[14px] sm:text-[16px] mb-4 mt-8 sm:mb-3'>
                            Welcome to weddingbiodata.com your one-stop solution for crafting the perfect marriage biodata! Finding the right life partner is an exciting journey, and we are here to make it easier for you with our innovative marriage biodata maker.
                        </p>
                    </div>


                </div>
            </div>

            <div className='bg-[white]'>
                <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-[20px]'>
                    <div className='flex flex-col-reverse sm:flex-row gap-0 sm:gap-9'>
                        <div className='w-full sm:w-[60%] flex  flex-col justify-center'>
                            <h3 className='text-black font-bold text-[32px] mb-2 mt-8'>Our Vision</h3>
                            <p className='text-black text-[14px] sm:text-[16px] mb-4 sm:mb-3' >
                                At weddingbiodata.com we envision revolutionizing the way individuals express their unique personalities and preferences. Our goal is to provide a seamless and enjoyable biodata creation experience, making the journey to finding a life partner enriching and stress-free.
                            </p>
                        </div>

                        <div className='w-full sm:w-[30%] '>
                            <div className='w-[90%] h-[300px]'>
                                <Image
                                    src="/images/vision.png"
                                    width={500}
                                    height={1000}
                                    alt="vision"
                                    className="w-[100%] h-[100%] cover"
                                    data-aos="zoom-in"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-[#B92753]'>
                <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-[40px]'>
                    <div className='flex flex-col sm:flex-row gap-0 sm:gap-9'>
                        <div className='w-full sm:w-[30%] flex items-center'>
                            <div className='w-[90%] h-[300px]'>
                                <Image
                                    src="/images/whatset.png"
                                    width={500}
                                    height={1000}
                                    alt="whatset"
                                    className="w-[100%] h-[100%] cover"
                                    data-aos="zoom-in"
                                />
                            </div>
                        </div>

                        <div className='w-full sm:w-[60%]'>
                            <h3 className='text-[white] font-bold text-[32px] mb-8 mt-8'>What Sets Us Apart</h3>

                            <h4 className='text-[#fdfdfd] text-[20px] font-semibold mb-2'> User-Friendly Interface : </h4>
                            <p className='text-white text-[14px] sm:text-[15px] mb-4 sm:mb-6'>
                                Our marriage biodata maker features an intuitive and user-friendly interface, ensuring that you can create a personalized biodata effortlessly.
                            </p>

                            <h4 className='text-[#fdfdfd] text-[20px] font-bold mb-2'> Customization Options : </h4>
                            <p className='text-white text-[14px] sm:text-[15px] mb-4 sm:mb-6'>
                                We understand that every individual is unique. Thats why we offer a wide range of customization options, allowing you to tailor your biodata to reflect your personality and preferences accurately.
                            </p>

                            <h4 className='text-[#fdfdfd] text-[20px] font-bold mb-2'> Professional Templates : </h4>
                            <p className='text-white text-[14px] sm:text-[15px] mb-4 sm:mb-6'>
                                Choose from a selection of professionally designed templates that strike the perfect balance between aesthetics and information presentation.
                            </p>

                            <h4 className='text-[#fdfdfd] text-[20px] font-bold mb-2'> Privacy and Security : </h4>
                            <p className='text-white text-[14px] sm:text-[15px] mb-4 sm:mb-6'>
                                Your datas privacy and security are our top priorities. Rest assured that your information is in safe hands, and we adhere to the highest standards of data protection.
                            </p>


                        </div>


                    </div>
                </div>
            </div>

            <div className='bg-[white]'>
                <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-[70px]'>
                    <div className='flex flex-col-reverse sm:flex-row gap-0 sm:gap-9'>
                        <div className='w-full sm:w-[60%]'>
                            <h3 className='text-black font-bold text-[32px] mb-8 mt-8'>How It Works</h3>

                            <h4 className='text-[black] text-[20px] font-bold mb-2'> 1. Choose a Template : </h4>
                            <p className='text-black text-[14px] sm:text-[16px] mb-4 sm:mb-6'>
                                Choose a Template: Select a template that resonates with your style and preferences.
                            </p>

                            <h4 className='text-[black] text-[20px] font-bold mb-2'> 2. Personalize Your Biodata : </h4>
                            <p className='text-black text-[14px] sm:text-[16px] mb-4 sm:mb-6'>
                                Fill in the details that matter to you. Share your hobbies, interests, and aspirations to let your personality shine.
                            </p>

                            <h4 className='text-[black] text-[20px] font-bold mb-2'> 3. Download and Share : </h4>
                            <p className='text-black text-[14px] sm:text-[16px] mb-4 sm:mb-6'>
                                Once you are satisfied with your marriage biodata, download it in your preferred format and confidently share it with potential matches.
                            </p>

                        </div>

                        <div className='w-full sm:w-[30%] flex items-center'>
                            <div className='w-[90%] h-[300px]'>
                                <Image
                                    src="/images/howwork.png"
                                    width={500}
                                    height={1000}
                                    alt="howwork"
                                    className="w-[100%] h-[100%] cover"
                                    data-aos="zoom-in"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>

    )
}

export default AboutUs