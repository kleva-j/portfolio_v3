import { useCycle } from 'framer-motion';
import { motion } from 'framer-motion';
import { createContext, useContext } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Experience } from '@/components/Experience';
import { ErrorFallback } from '@/components/fallback';
import { Hero } from '@/components/Hero';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { SideNav } from '@/components/layout/sidenav';
import { LeftFloatBar } from '@/components/LeftFloatBar';
import { RightFloatBar } from '@/components/RightFloatBar';
import { Works } from '@/components/Works';

export interface IAppContext {
  isOpen: boolean;
  toggleOpen: () => void;
}

const AppContext = createContext<IAppContext | null>(null);

export function UseAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) throw new Error('UseTAppContext must be used within a ContextProvider');
  return context;
}

function App() {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <ErrorBoundary fallback={<ErrorFallback />}>
      <AppContext.Provider value={{ toggleOpen, isOpen }}>
        <Header />
        <SideNav toggleOpen={toggleOpen} isOpen={isOpen} />
        <motion.section className={isOpen ? 'max-sm:blur-sm max-sm:brightness-75' : ''}>
          <main className="max-w-[1600px] min-h-screen mx-auto px-6 sm:px-[50px] md:px-[100px] lg:px-[150px] items-center justify-center bg-[#0a182e] [counter-reset:section]">
            <Hero />
            <About />
            <Experience />
            <Works />
            <Contact />
          </main>
          <Footer />
        </motion.section>
      </AppContext.Provider>
      <LeftFloatBar />
      <RightFloatBar />
    </ErrorBoundary>
  );
}

export default App;
