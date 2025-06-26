import React from 'react';
import Image from 'next/image';

const skills = [
    { name: 'React', icon: '/react.svg' },
    { name: 'Next.js', icon: '/next.svg' },
    { name: 'Django', icon: '/django.svg' },
    { name: 'Git', icon: '/git.svg' },
    { name: 'GitHub', icon: '/github.svg' },
    { name: 'JavaScript', icon: '/javascript.svg' },
    { name: 'Python', icon: '/python.svg' },

]

const SkillsPage = () => (
    <div className="min-h-screen flex flex-col items-center px-6 py-20">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8">Skills</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 w-full max-w-4xl">
            {skills.map((skill) => (
                <div
                    key={skill.name}
                    className="flex flex-col items-center bg-[#2AD87E] rounded-xl shadow-md p-6 hover:scale-105 transition-transform"
                >
                    {/* <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-4" /> */}
                    <Image src={skill.icon} alt={skill.name} width={12} height={12} className="w-12 h-12 mb-4"></Image>
                    <span className="text-lg font-semibold">{skill.name}</span>
                </div>
            ))}
        </div>
    </div>
)

export default SkillsPage
