"use client"
import React, { useState } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const navigation = [
    { name: 'Home', href: '/', current: false },
    { name: 'About', href: '/about-us', current: false },
    { name: 'Contact', href: '/contact-us', current: false },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

const Navbar = ({ scrollToBiodataForm }) => {


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
                              

                                <button className="py-1 sm:py-2 px-2 sm:px-4 bg-[#9E2665] text-white text-[14px] sm:text-[16px] font-medium rounded-md hover:bg-[#4649C0]"
                                onClick={scrollToBiodataForm}
                                >
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
                   
                </>
            )}
        </Disclosure>
    );
};

export default Navbar;
