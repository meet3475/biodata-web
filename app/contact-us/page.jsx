'use client';
import Loarder from '@/components/Loarder/Loarder'
import Footer from '@/Layout/Footer/page'
import Navbar from '@/Layout/Navbar/page'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const ContactUs = () => {
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

            <div className='bg-[#4649C0]'>
                <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-[120px]'>
                    <div>
                        <h2 className='text-white text-[42px] font-bold mb-5'>Contact Us</h2>
                        <h5 className='text-white text-[16px] sm:text-[20px] mb-15'>WeddingBiodata.App || Owned by Loard</h5>
                        <p className='text-white text-[14px] sm:text-[16px] mb-4 sm:mb-3' data-aos="fade-up">
                            Welcome to weddingbiodata.in! We're delighted to assist you. Whether you have inquiries about our services, need assistance, or want to provide feedback, our team is here to support you every step of the way.
                        </p>
                        <p className='text-white text-[14px] sm:text-[16px] mb-4 sm:mb-3' data-aos="fade-up">
                            Please feel free to reach out to us via email at <Link className='text-[#181966] font-bold' href={"/"}>WeddingBiodata.com</Link> with any questions, concerns, or suggestions you may have. We value your input and are committed to providing prompt and helpful responses to ensure your satisfaction.
                        </p>
                        <p className='text-white text-[14px] sm:text-[16px] mb-4 sm:mb-3' data-aos="fade-up">
                            We appreciate your interest in weddingbiodata.in and look forward to assisting you in any way we can. Your satisfaction is our priority, and we're dedicated to ensuring your experience with us is positive and enjoyable.
                        </p>
                    </div>

                    <div className='mt-15'>
                        <h3 className='text-white font-semibold text-[30px] mb-2'  data-aos="zoom-in">Customer Support :-</h3>
                        <div>
                            <div className='flex mb-2' data-aos="fade-up">
                                <Image src="/images/gmail.png" alt="Email" width={25} height={15} />
                                <p className='text-white text-[14px] sm:text-[16px] ml-2'> Email :- support@weddingbiodata.app</p>
                            </div>

                            <div className='flex mb-2' data-aos="fade-up">
                                <Image src="/images/telephone.png" alt="Telephone" width={25} height={15} />
                                <p className='text-white text-[14px] sm:text-[16px] ml-2'> Phone  :- +91 9898959563</p>
                            </div>

                            <div className='flex mb-2' data-aos="fade-up">
                                <Image src="/images/placeholder.png" alt="Placeholder" width={25} height={15} />
                                <p className='text-white text-[14px] sm:text-[16px] ml-2'> Address :- Main Road, Surat - 395008</p>
                            </div>

                            <div className='flex mb-2' data-aos="fade-up">
                                <Image src="/images/clock.png" alt="Placeholder" width={25} height={15} />
                                <p className='text-white text-[14px] sm:text-[16px] ml-2'>Time :- Monday - Friday : 9 AM to 6 PM</p>
                            </div>

                        </div>
                    </div>
                </div>


            </div>

            <Footer />
        </>
    )
}

export default ContactUs


