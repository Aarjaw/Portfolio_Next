import React from 'react';

const education = [
    {
        degree: "BSc.IT - Cloud Engineering",
        institution: "Lord Buddha Education Foundation [LBEF]",
        year: "January 2024 – Present",
        description: "Pursuing a Bachelor’s degree focused on Cloud Engineering, Computer Vision, and modern software development practices.",
    },
    {
        degree: "High School (+2 Science)",
        institution: "NIST College",
        year: "August 2022 – May 2023",
        description: "Completed high school with a focus on science and mathematics, building a strong foundation for further studies in technology.",
    },
];

const EducationPage = () => (
    <div className="min-h-screen w-full flex flex-col items-center px-6 py-20">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8">Education</h1>
        <div className="flex flex-col gap-8 w-full max-w-3xl">
            {education.map((edu, idx) => (
                <div
                    key={idx}
                    className="bg-[#DCDAD4] rounded-xl shadow-md p-6 flex flex-col gap-2 hover:scale-105 transition-transform"
                >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <span className="text-xl font-semibold text-[#2AD87E]">{edu.degree}</span>
                        <span className="text-base text-gray-600">{edu.year}</span>
                    </div>
                    <span className="text-lg font-medium">{edu.institution}</span>
                    <p className="text-gray-700">{edu.description}</p>
                </div>
            ))}
        </div>
    </div>
);

export default EducationPage;
