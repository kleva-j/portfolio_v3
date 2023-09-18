'use client';

import { createContext, useContext } from 'react';
import { useCycle, motion } from 'framer-motion';

import { RightFloatBar } from '@/components/RightFloatBar';
import { LeftFloatBar } from '@/components/LeftFloatBar';
import { SideNav } from '@/components/layout/sidenav';
import { Experience } from '@/components/Experience';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { Contact } from '@/components/Contact';
import { Works } from '@/components/Works';
import { About } from '@/components/About';
import { Hero } from '@/components/Hero';
import { Work } from '@/lib/types';

export interface IAppContext {
  toggleTheme: () => void;
  toggleOpen: () => void;
  isOpen: boolean;
  theme: string;
}

const AppContext = createContext<IAppContext | null>(null);

export function UseAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) throw new Error(`UseTAppContext must be used within a ContextProvider`);
  return context;
}

function App(props: { data: Work[] }) {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [theme, toggleTheme] = useCycle('light', 'dark');

  return (
    <AppContext.Provider value={{ toggleOpen, isOpen, theme, toggleTheme }}>
      <Header />
      <SideNav toggleOpen={toggleOpen} isOpen={isOpen} />
      <motion.section className={isOpen ? 'max-sm:blur-sm max-sm:brightness-75' : ''}>
        <main className="max-w-[1600px] min-h-screen mx-auto px-6 sm:px-[50px] md:px-[100px] lg:px-[150px] items-center justify-center bg-[#0a182e] [counter-reset:section]">
          <Hero />
          <About />
          <Experience />
          <Works projects={props.data} />
          <Contact />
        </main>
        <Footer />
      </motion.section>
      <RightFloatBar />
      <LeftFloatBar />
    </AppContext.Provider>
  );
}

export default App;
