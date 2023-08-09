import { motion } from 'framer-motion';

import { About } from '@/components/About';
import { Experience } from '@/components/Experience';
import { Hero } from '@/components/Hero';
import { Footer } from '@/components/layout/Footer';

export const MainContent = () => {
  return (
    <motion.section>
      <main className="max-w-[1600px] min-h-screen mx-auto px-6 sm:px-[50px] md:px-[100px] lg:px-[150px] items-center justify-center bg-[#0a182e] [counter-reset:section]">
        <Hero />
        <About />
        <Experience />
      </main>
      <Footer />
    </motion.section>
  );
};
