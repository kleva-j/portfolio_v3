"use client";

import { type ChangeEvent, type FormEvent, useRef, useState } from 'react';

import { SectionWrapper } from '@/components/hoc/SectionWrapper';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';

import emailjs from '@emailjs/browser';

const formEntry = { email: '', name: '', message: '' };

export const Contact = SectionWrapper(
  () => {
    const [form, setForm] = useState(formEntry);
    const [loading, setLoading] = useState(false);

    const formRef = useRef(null);

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = target;
      setForm({ ...form, [name]: value });
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setLoading(true);

      emailjs
        .send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
          {
            from_name: form.name,
            to_name: 'Michael',
            from_email: form.email,
            to_email: 'kasmickleva@gmail.com',
            message: form.message,
          },
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
        )
        .then(
          () => {
            alert('Thank you. I will get back to you as soon as possible.');
            setForm(formEntry);
          },
          () => alert('Ahh, something went wrong. Please try again.')
        )
        .finally(() => setLoading(false));
    };

    return (
      <motion.div>
        <h2 className="relative font-mono text-sm justify-center text-teal-400 flex before:relative [counter-increment:section] before:[content:'0'counter(section)'.'] before:text-teal-500 mb-5">
          Get in touch
        </h2>
        <h2 className="text-center text-[40px] md:text-[60px] leading-none font-bold text-[#ccd6f6]">Contact.</h2>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 p-6 rounded bg-card text-card-foreground flex flex-col gap-8 shadow-lg"
        >
          <label htmlFor="name" className="flex flex-col">
            <span className="font-medium mb-3">Your Name</span>
            <input
              id="name"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="py-2.5 px-6 placeholder:text-[#8892b0] rounded-lg outline-none border-none font-normal bg-[#0a182e6f]"
            />
          </label>
          <label htmlFor="email" className="flex flex-col">
            <span className="font-medium mb-3">Your Email</span>
            <input
              id="email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="py-2.5 px-6 placeholder:text-[#8892b0] rounded-lg outline-none border-none font-normal bg-[#0a182e6f]"
            />
          </label>
          <label htmlFor="message" className="flex flex-col">
            <span className="font-medium mb-3">Your Message</span>
            <textarea
              id="message"
              rows={5}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Type in your message"
              className="py-4 px-6 placeholder:text-[#8892b0] rounded-lg outline-none border-none font-normal bg-[#0a182e6f] resize-none"
            />
          </label>

          <Button
            type="submit"
            className="font-mono ml-auto text-teal-400 bg-transparent text-base outline-none w-fit border-2 border-teal-400 rounded-lg leading-none py-3 px-5 font-medium hover:bg-transparent hover:text-teal-400"
          >
            {loading ? 'Sending...' : 'Send'}
          </Button>
        </form>
      </motion.div>
    );
  },
  'contact',
  'mx-auto py-[60px] sm:py-[80px] md:py-[100px] w-full max-w-[400px]'
);
