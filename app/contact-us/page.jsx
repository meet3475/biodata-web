// 'use client';
// import Loarder from '@/components/Loarder/Loarder'
// import Footer from '@/Layout/Footer/page'
// import Navbar from '@/Layout/Navbar/page'
// import Image from 'next/image'
// import Link from 'next/link'
// import React, { useEffect, useState } from 'react'
// import AOS from "aos";
// import "aos/dist/aos.css";

// const ContactUs = () => {
//     const [isLoading, setIsLoading] = useState(true)

//     useEffect(() => {
//         AOS.init({
//             duration: 2000,
//             once: false // Changed to false to allow repeated animations
//         });

//         // Refresh AOS when route changes
//         return () => {
//             AOS.refresh();
//         };
//     }, []);

//     // Add scroll event listener to refresh AOS
//     useEffect(() => {
//         const handleScroll = () => {
//             AOS.refresh();
//         };

//         window.addEventListener('scroll', handleScroll);

//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setIsLoading(false)
//         }, 2000) // 5 seconds

//         return () => clearTimeout(timer) // Clean up the timer
//     }, [])

//     if (isLoading) {
//         return <Loarder />
//     }

//     return (
//         <>
//             <Navbar />

//             <div className='bg-[#B92753]'>
//                 <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-[70px]'>
//                     <div className='text-center'>
//                         <h2 className='text-[42px] text-[#B92753] font-bold bg-white rounded-lg lg:shadow-2xl inline py-3 px-2 sm:px-5'>Contact Us</h2>
//                         <p className='text-white text-[14px] sm:text-[16px] mb-4 mt-8 sm:mb-3'>
//                             We would love to hear from you! For any questions or support, feel free to reach out to us at: support@weddingbiodata.app.
//                         </p>
//                     </div>
//                 </div>
//             </div>

//             <div className='bg-[white]'>
//                 <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-[20px]'>
//                     <div className='flex flex-col-reverse sm:flex-row gap-0 sm:gap-9'>
//                         <div className='w-full sm:w-[50%] flex  flex-col justify-center'>
//                             <h3 className='text-black font-bold text-[32px] mb-2 mt-8'>Keep in touch with us</h3>

//                             <p className='text-black text-[14px] sm:text-[16px] mb-4 sm:mb-6'>
//                                 Welcome to weddingbiodata.in! We're delighted to assist you. Whether you have inquiries about our services, need assistance, or want to provide feedback, our team is here to support you every step of the way.
//                             </p>
//                             <p className='text-black text-[14px] sm:text-[16px] mb-4 sm:mb-6'>
//                                 Please feel free to reach out to us via email at <Link className='text-[#181966] font-bold' href={"/"}>WeddingBiodata.com</Link> with any questions, concerns, or suggestions you may have. We value your input and are committed to providing prompt and helpful responses to ensure your satisfaction.
//                             </p>
//                             <p className='text-black text-[14px] sm:text-[16px] mb-4 sm:mb-6'>
//                                 We appreciate your interest in weddingbiodata.in and look forward to assisting you in any way we can. Your satisfaction is our priority, and we're dedicated to ensuring your experience with us is positive and enjoyable.
//                             </p>

//                             <div className='flex flex-col sm:flex-row'>
//                                 <div className='w-[40%]'>
//                                     <h4 className='text-[black] text-[20px] font-bold mb-2'>Address </h4>
//                                     <p className='text-black text-[14px] sm:text-[16px] mb-4 sm:mb-6'>
//                                         A-504, Abc Complex Main Road, Surat - 395008
//                                     </p>
//                                 </div>

//                                 <div className='w-[60%]'>
//                                     <h4 className='text-[black] text-[20px] font-bold mb-2'>Customer Support :-</h4>
//                                     <div>
//                                         <div className='flex mb-2'>
//                                             <Image src="/images/gmail.png" alt="Email" width={25} height={15} />
//                                             <p className='text-[black] text-[14px] sm:text-[16px] ml-2'> Email :- support@weddingbiodata.app</p>
//                                         </div>

//                                         <div className='flex mb-2'>
//                                             <Image src="/images/telephone.png" alt="Telephone" width={25} height={15} />
//                                             <p className='text-[black] text-[14px] sm:text-[16px] ml-2'> Phone  :- +91 9898959563</p>
//                                         </div>

//                                         <div className='flex mb-2'>
//                                             <Image src="/images/placeholder.png" alt="Placeholder" width={25} height={15} />
//                                             <p className='text-[black] text-[14px] sm:text-[16px] ml-2'> Address :- Main Road, Surat - 395008</p>
//                                         </div>

//                                         <div className='flex mb-2'>
//                                             <Image src="/images/clock.png" alt="Placeholder" width={25} height={15} />
//                                             <p className='text-[black] text-[14px] sm:text-[16px] ml-2'>Time :- Monday - Friday : 9 AM to 6 PM</p>
//                                         </div>

//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className='w-full sm:w-[50%] '>
//                             <h3 className='text-black font-bold text-[32px] mb-2 mt-8'>Send a message</h3>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <Footer />
//         </>
//     )
// }

// export default ContactUs


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
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log(formData);
        // You can add your form submission logic here
    };

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
                        <h2 className='text-[42px] text-[#B92753] font-bold bg-white rounded-lg lg:shadow-2xl inline py-3 px-2 sm:px-5'>Contact Us</h2>
                        <p className='text-white text-[14px] sm:text-[16px] mb-4 mt-8 sm:mb-3'>
                            We would love to hear from you! For any questions or support, feel free to reach out to us at: support@weddingbiodata.app.
                        </p>
                    </div>
                </div>
            </div>

            <div className='bg-[white]'>
                <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-[70px]'>
                    <div className='flex flex-col sm:flex-row gap-0 sm:gap-10'>
                        <div className='w-full sm:w-[50%] flex flex-col justify-center'>
                            <h3 className='text-black font-bold text-[32px] mb-2 mt-8'>Keep in touch with us</h3>

                            <p className='text-black text-[14px] sm:text-[16px] mb-4 sm:mb-6'>
                                Welcome to weddingbiodata.in! We're delighted to assist you. Whether you have inquiries about our services, need assistance, or want to provide feedback, our team is here to support you every step of the way.
                            </p>
                            <p className='text-black text-[14px] sm:text-[16px] mb-4 sm:mb-6'>
                                Please feel free to reach out to us via email at <Link className='text-[#181966] font-bold' href={"/"}>WeddingBiodata.com</Link> with any questions, concerns, or suggestions you may have. We value your input and are committed to providing prompt and helpful responses to ensure your satisfaction.
                            </p>
                          
                            <div className='flex flex-col sm:flex-row'>
                                <div className='w-full sm:w-[40%]'>
                                    <h4 className='text-[black] text-[20px] font-bold mb-2'>Address </h4>
                                    <p className='text-black text-[14px] sm:text-[16px] mb-4 sm:mb-6'>
                                        A-504, Abc Complex Main Road, Surat - 395008
                                    </p>
                                </div>

                                <div className='w-full sm:w-[60%]'>
                                    <h4 className='text-[black] text-[20px] font-bold mb-2'>Customer Support :-</h4>
                                    <div>
                                        <div className='flex mb-2'>
                                            <Image src="/images/gmail.png" alt="Email" width={25} height={15} />
                                            <p className='text-[black] text-[14px] sm:text-[16px] ml-2'> Email :- support@weddingbiodata.app</p>
                                        </div>

                                        <div className='flex mb-2'>
                                            <Image src="/images/telephone.png" alt="Telephone" width={25} height={15} />
                                            <p className='text-[black] text-[14px] sm:text-[16px] ml-2'> Phone  :- +91 9898959563</p>
                                        </div>

                                        <div className='flex mb-2'>
                                            <Image src="/images/placeholder.png" alt="Placeholder" width={25} height={15} />
                                            <p className='text-[black] text-[14px] sm:text-[16px] ml-2'> Address :- Main Road, Surat - 395008</p>
                                        </div>

                                        <div className='flex mb-2'>
                                            <Image src="/images/clock.png" alt="Placeholder" width={25} height={15} />
                                            <p className='text-[black] text-[14px] sm:text-[16px] ml-2'>Time :- Monday - Friday : 9 AM to 6 PM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='w-full sm:w-[50%]'>
                            <h3 className='text-black font-bold text-[32px] mb-2 mt-8'>Send a message</h3>

                            <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <div className="w-full sm:w-1/2">
                                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B92753]"
                                            required
                                        />
                                    </div>
                                    <div className="w-full sm:w-1/2">
                                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B92753]"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B92753]"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="4"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B92753]"
                                        required
                                    ></textarea>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="w-full bg-[#B92753] text-white py-2 px-4 rounded-md hover:bg-[#4649C0] transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#B92753] focus:ring-offset-2"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default ContactUs

