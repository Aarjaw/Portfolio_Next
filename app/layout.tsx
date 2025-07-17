import type { Metadata } from "next";
import { Orbitron, Rajdhani, Share_Tech_Mono } from 'next/font/google';
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/navbar/navbar';
import Footer from '@/components/footer/footer';

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-orbitron' })
const rajdhani = Rajdhani({ subsets: ['latin'], weight: '400', variable: '--font-rajdhani' })
const shareTechMono = Share_Tech_Mono({ subsets: ['latin'], weight: '400', variable: '--font-sharetech' })

export const metadata: Metadata = {
    title: "Aarjaw Adhikari | Portfolio",
    description: "Portfolio of Aarjaw Adhikari – a full stack web developer skilled in React, Next.js, Django, and more",
    keywords: "Aarjaw Adhikari, web developer, portfolio, full stack, React, Next.js, Django",
    authors: [{ name: "Aarjaw Adhikari", url: "https://aarjawadhikari.com" }],
    creator: "Aarjaw Adhikari",
    robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${orbitron.variable} ${rajdhani.variable} ${shareTechMono.variable}`}
          >
              <Navbar />
              {children}
              <Footer />
      </body>
    </html>
  );
}
