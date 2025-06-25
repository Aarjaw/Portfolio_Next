'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

const Page = () => {
    const router = useRouter();

    const handleContact = () => {
        router.push('/contact');
    };

    return (
        <div className="min-h-screen w-full flex px-7 md:px-20 py-44 flex-col gap-8 md:gap-10 sm:px-8">
            <span className="text-4xl font-bold">Hello Everyone.</span>
            <span className="text-5xl font-extrabold">I&apos;m Aarjaw Adhikari</span>
            <span className="text-2xl border-y-2 border-[#2AD87E] w-fit p-2 font-semibold">Software Engineer</span>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <button
                    onClick={handleContact}
                    className="bg-[#2AD87E] text-black font-semibold text-xl px-10 py-4 rounded-lg hover:bg-[#24b96a] transition-all"
                >
                    Hire Me
                </button>
                <button
                    onClick={handleContact}
                    className="border-2 border-[#2AD87E] text-[#2AD87E] font-semibold text-xl px-10 py-4 rounded-lg hover:bg-[#2AD87E] hover:text-black transition-all"
                >
                    Let&apos;s Talk
                </button>
            </div>
        </div>
    );
};

export default Page;
