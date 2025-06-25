import React from 'react';
import Navbar from '@/components/navbar/navbar';
import Intro from '@/app/introduction/page';
import AboutMe from '@/app/about/page';
import MySkill from '@/app/skills/page';
import MyProject from '@/app/projects/page';
import Contact from '@/app/contact/page';
import Footer from '@/components/footer/footer';

const page = () => {
    return (
        <>
            <Navbar />
            <Intro />
            <AboutMe />
            <MySkill />
            <MyProject />
            <Contact />
            <Footer />
        </>
    )
}

export default page
