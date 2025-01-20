"use client";

import type { IAppContext } from "@/components/context/AppContext";

import { UseAppContext } from "@/components/context/AppContext";
import { Experience } from '@/components/Experience';
import { Footer } from '@/components/layout/Footer';
import { Contact } from '@/components/Contact';
import { Works } from '@/components/Works';
import { About } from '@/components/About';
import { Hero } from '@/components/Hero';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";

export function MainSection() {
  const { isOpen } = UseAppContext() as IAppContext;

  return (
    <motion.section className={cn({ 'max-sm:blur-sm max-sm:brightness-75': isOpen })}>
      <main className="max-w-[1600px] min-h-screen mx-auto px-6 sm:px-[50px] md:px-[100px] lg:px-[150px] items-center justify-center bg-[#0a182e] [counter-reset:section]">
        <Hero />
        <About />
        <Experience />
        <Works />
        <Contact />
      </main>
      <Footer />
    </motion.section>
  )
}
