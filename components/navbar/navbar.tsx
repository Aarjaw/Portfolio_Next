import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMailUnread } from "react-icons/io";
import Link from 'next/link';



const navbar = () => {
    return (
        <>
            <nav className='flex h-[10vh] items-center justify-between px-7 md:px-20 text-xl'>
            <div className="logo"> <Link href='/' className='md:hover:text-[#2AD87E] transition-all'>Aarjaw Adhikari <span className='text-[#2AD87E]'>.</span></Link></div>
            <div className="contact flex flex-row items-center justify-between gap-4">
                <p className='invisible md:visible'>contacts</p>
                    <span>
                        <Link href="tel:+9779741831555" rel="noopener noreferrer" className='md:hover:text-[#2AD87E]'> <FaPhoneAlt />
</Link>
                </span>
                <span>
                    <Link href='mailto:aarjawadhikari12@gmail.com' rel="noopener noreferrer" className='md:hover:text-[#2AD87E]'><IoMdMailUnread /></Link>
                </span>
            </div>
            </nav>
        </>
    )
}

export default navbar
