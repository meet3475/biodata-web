"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { Tooltip } from 'react-tooltip';


const Footer = () => {
    return (

        <div className='bg-[#7b7cdb]'>
            <div className='mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8 flex flex-wrap md:grid md:grid-cols-2 lg:flex lg:justify-between gap-6'>

                <div className='w-full md:w-[75%] lg:w-[30%]'>
                    <Image
                        src="/images/logo.png"
                        alt="Logo"
                        width={150}
                        height={50}
                        className="w-[80px] h-[50px] sm:w-[65px] sm:h-[40px]"
                    />
                    <p className='text-white hover:font-medium'>
                        Welcome to our online matrimonial biodata maker! We are a team of dedicated professionals with a passion for making the process of creating a biodata simple, easy and enjoyable.
                    </p>
                </div>

                <div className='w-full md:w-[45%] lg:w-[20%]'>
                    <h2 className='text-white  hover:font-medium text-[24px]'>Company</h2>
                    <ul>
                        <Link href={"/"} className='block text-white hover:text-[#AD346B] hover:font-medium'>Home</Link>
                        <Link href={"/about-us"} className='block text-white hover:text-[#AD346B] hover:font-medium'>About Us</Link>
                    </ul>
                </div>

                <div className='w-full md:w-[45%] lg:w-[20%]'>
                    <h2 className='text-white hover:font-medium  text-[24px]'>Customer Service</h2>
                    <ul>
                        <Link href={"/contact-us"} className='block text-white hover:text-[#AD346B] hover:font-medium'>Contact Us</Link>
                    </ul>
                </div>

                <div className='w-full md:w-[45%] lg:w-[20%]'>
                    <h2 className='text-white hover:font-medium text-[24px]'>Contact With Us</h2>
                    <p className='text-white hover:text-[#AD346B] hover:font-medium my-2'>
                        Follow us on :-
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <Link href="#"><Image src="/images/youtube.png" alt="YouTube" width={25} height={20} className='mx-1' data-tooltip-id="social-tooltip" data-tooltip-content="YouTube" /></Link>
                        <Link href="#"><Image src="/images/twitter.png" alt="Twitter" width={25} height={20} className='mx-1' data-tooltip-id="social-tooltip" data-tooltip-content="Twitter" /></Link>
                        <Link href="#"><Image src="/images/facebook.png" alt="Facebook" width={25} height={20} className='mx-1' data-tooltip-id="social-tooltip" data-tooltip-content="Facebook" /></Link>
                        <Link href="#"><Image src="/images/gmail.png" alt="Email" width={25} height={20} className='mx-1' data-tooltip-id="social-tooltip" data-tooltip-content="Email" /></Link>
                        <Link href="#"><Image src="/images/instagram.png" alt="Instagram" width={25} height={20} className='mx-1' data-tooltip-id="social-tooltip" data-tooltip-content="Instagram" /></Link>
                    </div>
                </div>
                <Tooltip id="social-tooltip" place="bottom" effect="solid" />
            </div>
        </div>

    )
}

export default Footer;