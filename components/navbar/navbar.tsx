import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMailUnread } from "react-icons/io";
import Link from 'next/link';



const navbar = () => {
    return (
        <>
            <nav className='flex h-[10vh] items-center justify-between px-7 text-xl'>
            <div className="logo"> <Link href={`#`}>PORTFOLIO</Link></div>
            <div className="contact flex flex-row items-center justify-between gap-4">
                <p className='invisible md:visible'>contacts</p>
                    <span>
                        <Link href="tel:+9779741831555" rel="noopener noreferrer"> <FaPhoneAlt />
</Link>
                </span>
                <span>
                    <Link href='mailto:aarjawadhikari12@gmail.com' rel="noopener noreferrer"><IoMdMailUnread /></Link>
                </span>
            </div>
            </nav>
        </>
    )
}

export default navbar
