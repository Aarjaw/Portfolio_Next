'use client';
import React, { useEffect, useRef, useState } from 'react';
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const TypedParagraph = ({
    text,
    speed = 20,
    pause = 3000,
    triggerTyping = false,
}: {
    text: string;
    speed?: number;
    pause?: number;
    triggerTyping: boolean;
}) => {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        if (!triggerTyping) return;

        let timeout: NodeJS.Timeout;

        if (!isDeleting && index < text.length) {
            timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + text.charAt(index));
                setIndex((prev) => prev + 1);
            }, speed);
        } else if (!isDeleting && index === text.length) {
            timeout = setTimeout(() => setIsDeleting(true), pause);
        } else if (isDeleting && index > 0) {
            timeout = setTimeout(() => {
                setDisplayedText((prev) => prev.slice(0, -1));
                setIndex((prev) => prev - 1);
            }, speed / 2);
        } else if (isDeleting && index === 0) {
            setIsDeleting(false);
        }

        return () => clearTimeout(timeout);
    }, [index, isDeleting, text, speed, pause, triggerTyping]);

    return (
        <p className="text-base sm:text-2xl text-justify whitespace-pre-wrap leading-relaxed min-h-[320px] sm:min-h-[250px]">
            {displayedText}
        </p>
    );
};

const Page = () => {
    const paragraphRef = useRef<HTMLDivElement | null>(null);
    const [startTyping, setStartTyping] = useState(false);

    const paragraphText = `Enthusiastic and dedicated student with a strong focus on Computer Vision, currently pursuing a BSc in IT with a specialization in Cloud Engineering. Skilled in applying theoretical concepts to real-world challenges in image processing, pattern recognition, and machine learning. Experienced in collaborating within multidisciplinary teams and contributing effectively. Passionate about leveraging emerging technologies and eager to contribute to innovative projects in the field of Computer Vision.`;

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStartTyping(true);
                }
            },
            { threshold: 0.4 }
        );

        if (paragraphRef.current) {
            observer.observe(paragraphRef.current);
        }

        return () => {
            if (paragraphRef.current) {
                observer.unobserve(paragraphRef.current);
            }
        };
    }, []);

    return (
        <div className="min-h-screen w-full flex flex-col md:px-16 px-10 py-16 sm:py-20 gap-6">
            <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-center">About</h1>

            <div ref={paragraphRef}>
                <TypedParagraph text={paragraphText} triggerTyping={startTyping} />
            </div>

            <div className="mt-4 flex items-center gap-4">
                <a
                    href="/Aarjaw-CV.pdf"
                    download="Aarjaw-Adhikari-CV.pdf"
                    className="text-lg md:text-2xl border-2 border-[#2AD87E] w-fit p-2 cursor-pointer hover:text-black hover:bg-[#2AD87E] transition-all duration-300"
                >
                    Download CV
                </a>
                <div className="flex gap-3">
                    <a
                        href="https://instagram.com/aarjawadhikari"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-[#2AD87E] text-black hover:bg-[#1ea965] transition"
                        aria-label="Instagram"
                    >
                        <FaInstagram size={22} />
                    </a>
                    <a
                        href="https://facebook.com/aarjaw.adhikari.2025"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-[#2AD87E] text-black hover:bg-[#1ea965] transition"
                        aria-label="Facebook"
                    >
                        <FaFacebookF size={22} />
                    </a>
                    <a
                        href="https://linkedin.com/in/aarjaw-adhikari-3ba481289"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-[#2AD87E] text-black hover:bg-[#1ea965] transition"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedinIn size={22} />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Page;
