import { motion } from 'framer-motion';

import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Experience } from '@/components/Experience';
import { Hero } from '@/components/Hero';
import { Footer } from '@/components/layout/Footer';
import { Works } from '@/components/Works';

export const MainContent = () => {
  return (
    <motion.section>
      <main className="max-w-[1600px] min-h-screen mx-auto px-6 sm:px-[50px] md:px-[100px] lg:px-[150px] items-center justify-center bg-[#0a182e] [counter-reset:section]">
        <Hero />
        <About />
        <Experience />
        <Works />
        <Contact />
      </main>
      <Footer />
    </motion.section>
  );
};
