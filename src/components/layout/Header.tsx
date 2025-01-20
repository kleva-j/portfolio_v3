"use client";

import { type FC, useRef } from 'react';

import { ToggleBar } from '@/components/layout/sidenav/ToggleBar';
import { Navbar } from '@/components/layout/Navbar';
import { motion, useInView } from 'framer-motion';
import { Logo } from '@/components/ui/Logo';

export const Header: FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const isInView = useInView(ref);

  return (
    <>
      <div ref={ref} className="h-px" />
      <motion.header
        className={`flex items-center w-full fixed top-0 px-[25px] md:px-[40px] lg:px-[50px] select-auto bg-[#0a182ed9] z-20 bg-opacity-40 transition-[height] duration-500 ease-out ${isInView ? 'h-[100px]' : 'h-[70px] backdrop-blur-md drop-shadow-lg'
          } `}
      >
        <nav className="flex justify-between items-center w-full">
          <Logo />
          <Navbar />
          <ToggleBar />
        </nav>
      </motion.header>
    </>
  );
};
