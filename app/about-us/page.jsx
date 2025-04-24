'use client';
import Loarder from '@/components/Loarder/Loarder';
import Footer from '@/Layout/Footer/page'
import Navbar from '@/Layout/Navbar/page'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

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
                    <div>
                        <h2 className='text-white text-[42px] font-bold mb-5'>About Us</h2>
                        <p className='text-white text-[14px] sm:text-[16px] mb-4 sm:mb-3'>
                            Welcome to weddingbiodata.com your one-stop solution for crafting the perfect marriage biodata! Finding the right life partner is an exciting journey, and we are here to make it easier for you with our innovative marriage biodata maker.
                        </p>

                        <h3 className='text-white text-[30px] mb-2 mt-8' data-aos="zoom-in">Our Vision</h3>
                        <p className='text-white text-[14px] sm:text-[16px] mb-4 sm:mb-3' data-aos="fade-up">
                            At weddingbiodata.com we envision revolutionizing the way individuals express their unique personalities and preferences. Our goal is to provide a seamless and enjoyable biodata creation experience, making the journey to finding a life partner enriching and stress-free.
                        </p>

                        <h4 className='text-white text-[25px] mb-2 mt-8' data-aos="zoom-in">What Sets Us Apart</h4>

                        <p className='text-white text-[14px] sm:text-[16px] mb-4 sm:mb-3' data-aos="fade-up">
                            <span className='text-[#fdfdfd] font-bold'> * User-Friendly Interface : </span> Our marriage biodata maker features an intuitive and user-friendly interface, ensuring that you can create a personalized biodata effortlessly.
                        </p>

                        <p className='text-white text-[14px] sm:text-[16px] mb-4 sm:mb-3' data-aos="fade-up">
                            <span className='text-[#fdfdfd] font-bold'> * Customization Options : </span> We understand that every individual is unique. Thats why we offer a wide range of customization options, allowing you to tailor your biodata to reflect your personality and preferences accurately.
                        </p>

                        <p className='text-white text-[14px] sm:text-[16px] mb-4 sm:mb-3' data-aos="fade-up">
                            <span className='text-[#fdfdfd] font-bold'> * Professional Templates : </span> Choose from a selection of professionally designed templates that strike the perfect balance between aesthetics and information presentation.
                        </p>

                        <p className='text-white text-[14px] sm:text-[16px] mb-4 sm:mb-3' data-aos="fade-up">
                            <span className='text-[#fdfdfd] font-bold'> * Privacy and Security : </span>  Your datas privacy and security are our top priorities. Rest assured that your information is in safe hands, and we adhere to the highest standards of data protection.
                        </p>


                        <h3 className='text-white text-[30px] mb-2 mt-8' data-aos="zoom-in">How It Works</h3>
                        <p className='text-white text-[14px] sm:text-[16px] mb-4 sm:mb-3' data-aos="fade-up">
                            <span className='text-[#fdfdfd] font-bold'> 1. Choose a Template : </span> Choose a Template: Select a template that resonates with your style and preferences.
                        </p>

                        <p className='text-white text-[14px] sm:text-[16px] mb-4 sm:mb-3' data-aos="fade-up">
                            <span className='text-[#fdfdfd] font-bold'> 1. Personalize Your Biodata : </span>Fill in the details that matter to you. Share your hobbies, interests, and aspirations to let your personality shine.
                        </p>


                        <p className='text-white text-[14px] sm:text-[16px] mb-4 sm:mb-3' data-aos="fade-up">
                            <span className='text-[#fdfdfd] font-bold'> 1. Download and Share : </span> Once you are satisfied with your marriage biodata, download it in your preferred format and confidently share it with potential matches.
                        </p>


                        <h3 className='text-white text-[30px] mb-2 mt-8' data-aos="zoom-in">Contact Us</h3>
                        <p className='text-white text-[14px] sm:text-[16px] mb-4 sm:mb-3' data-aos="fade-up">
                            Have questions or need assistance? Our dedicated support team is here to help! Feel free to <Link className='text-[#181966] font-bold' href={"/contact-us"}>Contact us</Link> with any inquiries or feedback.
                        </p>

                        <p className='text-white text-[14px] sm:text-[16px] mb-4 sm:mb-3' data-aos="fade-up">
                            Thank you for choosing <Link className='text-[#181966] font-bold' href={"/"}>WeddingBiodata.com</Link> where your journey to find the perfect life partner begins with a uniquely crafted marriage biodata. Happy matching!
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </>

    )
}

export default AboutUs