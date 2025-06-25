'use client';
import React, { useEffect, useRef, useState } from 'react';

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

    const paragraphText = `Enthusiastic and dedicated student actively pursuing expertise in Computer Vision. Currently undertaking a degree in BSC.IT-Cloud Engineering. Adept at applying theoretical knowledge to practical challenges in image processing, pattern recognition, and machine learning. Proven ability to work collaboratively in multidisciplinary teams. Eager to contribute to innovative projects and leverage emerging technologies in the realm of Computer Vision.`;

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
        <div className="min-h-screen w-full flex flex-col px-4 sm:px-10 py-16 sm:py-20 gap-6">
            <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-center">About Me</h1>

            <div ref={paragraphRef}>
                <TypedParagraph text={paragraphText} triggerTyping={startTyping} />
            </div>

            <div className="mt-4">
                <a
                    href="/Aarjaw-CV.pdf"
                    download="Aarjaw-Adhikari-CV.pdf"
                    className="text-lg sm:text-2xl border-2 border-[#2AD87E] w-fit p-2 cursor-pointer hover:text-black hover:bg-[#2AD87E] transition-all duration-300"
                >
                    Download CV
                </a>
            </div>
        </div>
    );
};

export default Page;
