import React from 'react';
import Navbar from '@/components/navbar/navbar';
import Intro from '@/app/introduction/page';
import AboutMe from '@/app/about/page';
import MySkill from '@/app/skills/page';
import MyProject from '@/app/projects/page';
import Thanks from '@/app/thanks/page';

const page = () => {
    return (
        <>
            <Navbar />
            <Intro />
            <AboutMe />
            <MySkill />
            <MyProject />
            < Thanks />
        </>
    )
}

export default page
