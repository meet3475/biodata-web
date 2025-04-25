"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const Loarder = () => {
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

    return (
        <div className='bg-black h-screen w-full flex flex-col justify-center items-center'>
            <span className="loader2 fill">
                <Image
                    src="/images/logo.png"
                    alt="Logo"
                    width={100}
                    height={100}
                    className="w-[90px] h-[90px] sm:w-[120px] sm:h-[120px] flex justify-self-center"
                    data-aos="zoom-in"
                />
                {/* Wedding Biodata */}
            </span>
        </div>
    )
}

export default Loarder