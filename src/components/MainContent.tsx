import { motion } from 'framer-motion';

import { About } from '@/components/About';
import { Hero } from '@/components/Hero';
import { Footer } from '@/components/layout/Footer';

export const MainContent = () => {
  return (
    <motion.section>
      <main className="flex flex-col items-center justify-center bg-[#0a182e]">
        <Hero />
        <About />
      </main>
      <Footer />
    </motion.section>
  );
};
