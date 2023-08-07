import { FC } from 'react';

import { Navbar } from '@/components/layout/Navbar';
import { Logo } from '@/components/ui/Logo';

export const Header: FC = () => {
  return (
    <header className="h-[100px] flex items-center w-full fixed top-0 px-[25px] md:p-[40px] lg:px-[50px] select-auto bg-[#0a182ed9] z-20 bg-opacity-40 backdrop-blur-md drop-shadow-md">
      <nav className="flex justify-between items-center w-full">
        <Logo />
        <Navbar />
      </nav>
    </header>
  );
};
