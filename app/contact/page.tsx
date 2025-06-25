'use client';
import React, { useState } from 'react';

const ContactPage = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        // You can integrate email sending or API here
    };

    return (
        <div className="min-h-screen w-full flex flex-col px-4 sm:px-10 py-16 sm:py-20 gap-8 items-center">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center">Contact Me</h1>
            <p className="text-lg text-center max-w-2xl mb-6">
                Feel free to reach out for collaborations, questions, or just to say hello!
            </p>
            <form
                onSubmit={handleSubmit}
                className="rounded-xl shadow-md p-8 flex flex-col gap-6 w-full max-w-lg"
            >
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="p-3 rounded border border-gray-300 focus:outline-none focus:border-[#2AD87E] text-lg"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="p-3 rounded border border-gray-300 focus:outline-none focus:border-[#2AD87E] text-lg"
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="p-3 rounded border border-gray-300 focus:outline-none focus:border-[#2AD87E] text-lg resize-none"
                />
                <button
                    type="submit"
                    className="bg-[#2AD87E] text-black font-semibold py-3 rounded hover:bg-[#24b96a] transition-all text-lg"
                >
                    Send Message
                </button>
                {submitted && (
                    <p className="text-green-600 text-center font-medium mt-2">
                        Thank you for reaching out! I will get back to you soon.
                    </p>
                )}
            </form>
        </div>
    );
};

export default ContactPage;
