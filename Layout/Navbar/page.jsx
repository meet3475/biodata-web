"use client"
import React, { useState } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const navigation = [
    { name: 'Home', href: '#', current: false },
    { name: 'About', href: '#', current: false },
    { name: 'Contact', href: '#', current: false },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    return (
        <Disclosure as="nav" className="bg-white shadow-md">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                   
                        <div className="flex justify-between h-16 items-center">
                        
                            <div className="flex items-center">
                                <Image
                                    src="/images/logo.png"
                                    alt="Logo"
                                    width={80}
                                    height={50}
                                    className="w-[80px] h-[50px] sm:w-[65px] sm:h-[40px]"
                                />
                                <span className="ml-2 text-lg font-bold text-[#9E2665] hover:text-[+] hidden sm:block">
                                    Wedding Biodata
                                </span>
                            </div>


                            <div className="hidden md:flex space-x-6">
                                {navigation.map((item) => (
                                    <a key={item.name} href={item.href} className={classNames(
                                        'text-[#9E2665] font-bold hover:bg-[#4649C0] hover:text-white px-3 py-2 rounded-md'
                                    )}>{item.name}</a>
                                ))}
                            </div>

                            <div className="flex items-center gap-4">
                                <button className="relative flex items-center" onClick={() => setDropdownOpen(!isDropdownOpen)}>
                                    <svg className="size-8" fill="currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Translate</title><path d="M21.056 12h-2a1 1 0 000 2v2H17.87a2.965 2.965 0 00.185-1 3 3 0 00-5.598-1.5 1 1 0 101.732 1 1 1 0 01.866-.5 1 1 0 010 2 1 1 0 000 2 1 1 0 110 2 1 1 0 01-.866-.5 1 1 0 10-1.732 1 3 3 0 005.598-1.5 2.965 2.965 0 00-.185-1h1.185v3a1 1 0 002 0v-7a1 1 0 100-2zm-11.97-.757a1 1 0 101.94-.486l-1.757-7.03a2.28 2.28 0 00-4.425 0l-1.758 7.03a1 1 0 101.94.486L5.585 9h2.94zM6.086 7l.697-2.787a.292.292 0 01.546 0L8.026 7zm7.97 0h1a1.001 1.001 0 011 1v1a1 1 0 002 0V8a3.003 3.003 0 00-3-3h-1a1 1 0 000 2zm-4 9h-1a1.001 1.001 0 01-1-1v-1a1 1 0 00-2 0v1a3.003 3.003 0 003 3h1a1 1 0 000-2z"></path></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg>
                                </button>

                                <button className="py-1 sm:py-2 px-2 sm:px-4 bg-[#9E2665] text-white text-[14px] sm:text-[16px] font-medium rounded-md hover:bg-[#4649C0]">
                                    Create Biodata
                                </button>
                            </div>

                            {/* Mobile Menu Button */}
                            <div className="md:hidden flex items-center">
                                <DisclosureButton className="p-2 bg-[#4649C0] text-white rounded-md hover:bg-[#9E2665]">
                                    {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
                                </DisclosureButton>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    <DisclosurePanel className="md:hidden">
                        <div className="space-y-1 px-2 pt-2 pb-3">
                            {navigation.map((item) => (
                                <DisclosureButton key={item.name} as="a" href={item.href} className="block text-[#9E2665] font-bold hover:bg-[#4649C0] hover:text-white px-3 py-2 rounded-md">
                                    {item.name}
                                </DisclosureButton>
                            ))}
                        </div>
                    </DisclosurePanel>

                    {/* Language Dropdown */}
                    {isDropdownOpen && (
                        <div className="absolute right-[22%] mt-2 w-48 bg-white shadow-lg rounded-md z-[999]">
                            <ul className="text-[#9E2665] font-medium">
                                {['English', 'हिंदी', 'मराठी', 'বাংলা', 'ગુજરાતી', 'தமிழ்', 'తెలుగు'].map((lang) => (
                                    <li key={lang} className="hover:bg-[#9E2665] hover:text-white px-4 py-2 cursor-pointer">
                                        {lang}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </>
            )}
        </Disclosure>
    );
};

export default Navbar;
