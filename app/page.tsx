import React from 'react';
import Intro from '@/app/introduction/page';
import AboutMe from '@/app/about/page';
import MySkill from '@/app/skills/page';
import Education from '@/app/education/page';
import MyProject from '@/app/projects/page';
import Contact from '@/app/contact/page';

const page = () => {
    return (
        <>
            <Intro />
            <AboutMe />
            <MySkill />
            <Education />
            <MyProject />
            <Contact />
        </>
    )
}

export default page
