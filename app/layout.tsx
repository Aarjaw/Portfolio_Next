import type { Metadata } from "next";
import { Orbitron, Rajdhani, Share_Tech_Mono } from 'next/font/google'
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
  description: "Aarjaw Adhikari's personal portfolio showcasing skills, projects, and contact information.",
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
        {children}
      </body>
    </html>
  );
}
