'use client';
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';


const SERVICE_ID = 'service_w1coc3w';
const TEMPLATE_ID = 'template_8jt94wi';
const USER_ID = 'F984DL34nP5dw7KhF';

const ContactPage = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        title: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        emailjs.send(
            SERVICE_ID,
            TEMPLATE_ID,
            {
                from_name: form.name,
                from_email: form.email,
                title: form.title,
                message: form.message,
            },
            USER_ID
        )
        .then(() => {
            setSubmitted(true);
            setForm({ name: '', email: '', title: '', message: '' });
        })
        .catch(() => setError('Failed to send message. Please try again later.'));
    };

    return (
        <div className="min-h-screen w-full flex flex-col px-4 sm:px-10 py-16 sm:py-20 gap-8 items-center">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center">Contact</h1>
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
                <input
                    type="text"
                    name="title"
                    placeholder="Email Title"
                    value={form.title}
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
                {error && (
                    <p className="text-red-600 text-center font-medium mt-2">
                        {error}
                    </p>
                )}
            </form>
        </div>
    );
};

export default ContactPage;
