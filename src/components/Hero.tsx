"use client";

import { siteConfig } from '@/lib/config/siteConfig';
import { motion } from 'framer-motion';
import { slideIn } from '@/lib/utils';

const { hero } = siteConfig.content;

export const Hero = () => (
  <motion.section
    className="h-screen min-h-screen flex flex-col w-full max-w-[1000px] mx-auto items-start justify-center"
    animate="visible"
    initial={{ opacity: 0 }}
    viewport={{ once: true }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.25, duration: 1.9 }}
  >
    <motion.h1
      initial="hidden"
      animate="show"
      variants={slideIn('up', 'spring', 0.02, 1.5)}
      className="font-mono text-base text-teal-500 -mt-[100px]"
    >
      {hero.title}
    </motion.h1>
    <motion.h2
      initial="hidden"
      animate="show"
      variants={slideIn('up', 'spring', 0.02 * 1, 1.5)}
      className="text-[40px] md:text-[70px] font-bold text-[#ccd6f6] tracking-tight mt-1"
    >
      {hero.headText[0]}
    </motion.h2>
    <motion.h3
      initial="hidden"
      animate="show"
      variants={slideIn('up', 'spring', 0.02 * 2, 1.5)}
      className="text-[40px] md:text-[70px] leading-none mb-4 md:mb-5 font-bold text-[#8892b0] tracking-tight"
    >
      {hero.headText[1]}
    </motion.h3>
    <motion.div
      initial="hidden"
      animate="show"
      variants={slideIn('up', 'spring', 0.02 * 3, 1.5)}
      className="text-[#8892b0] text-base max-w-[540px] mt-4"
    >
      {hero.subText}
    </motion.div>
  </motion.section>
);
