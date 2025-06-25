import React from 'react';
import Navbar from '@/components/navbar/navbar';
import Intro from '@/app/introduction/page';
import AboutMe from '@/app/about/page';
import MySkill from '@/app/skills/page';
import MyProject from '@/app/projects/page';
import Thanks from '@/app/thanks/page';
import Contact from '@/app/contact/page';

const page = () => {
    return (
        <>
            <Navbar />
            <Intro />
            <AboutMe />
            <MySkill />
            <MyProject />
            <Contact />
            < Thanks />
        </>
    )
}

export default page
