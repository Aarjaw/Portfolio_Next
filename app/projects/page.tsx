import React from 'react';

const projects = [
    {
        title: 'Portfolio Website',
        description: 'A personal portfolio built with Next.js and Tailwind CSS to showcase my skills and projects.',
        link: 'https://aarjaw-portfolio.vercel.app',
        tech: ['Next.js', 'React', 'Tailwind CSS'],
    },
    {
        title: 'iCoder',
        description: 'A blog application built with Html, Bootstrap, and Javascript, to show my knowledge in libraries and frameworks.',
        link: 'https://aarjaw.github.io/project/',
        tech: ['Html', 'Javascript', 'Bootstrap'],
    },
    {
        title: 'GitHub Finder',
        description: 'A React app to search GitHub users and view their profiles and repositories.',
        link: '',
        tech: ['Next', 'GitHub API', 'Tailwind'],
    },
];

const ProjectsPage = () => (
    <div className="min-h-screen w-full flex flex-col px-4 sm:px-10 py-16 sm:py-20 gap-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">Projects</h1>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {projects.map((project) => (
                <div
                    key={project.title}
                    className="bg-[#DCDAD4] rounded-xl shadow-md p-6 flex flex-col justify-between hover:scale-105 transition-transform"
                >
                    <div>
                        <h2 className="text-xl text-[#2AD87E] font-semibold mb-2">{project.title}</h2>
                        <p className="text-gray-700 mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tech.map((tech) => (
                                <span
                                    key={tech}
                                    className="bg-[#2AD87E] text-black px-2 py-1 rounded text-xs font-medium"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto text-[#2AD87E] hover:underline font-semibold"
                    >
                        View Project &rarr;
                    </a>
                </div>
            ))}
        </div>
    </div>
);

export default ProjectsPage;
