"use client";

import { AppContextProvider } from '@/components/context/AppContext';
import { RightFloatBar } from '@/components/RightFloatBar';
import { LeftFloatBar } from '@/components/LeftFloatBar';
import { MainSection } from '@/components/MainSection';
import { SideNav } from '@/components/layout/sidenav';
import { Header } from '@/components/layout/Header';

export default function HomePage() {
  return (
    <AppContextProvider>
      <Header />
      <SideNav />
      <MainSection />
      <RightFloatBar />
      <LeftFloatBar />
    </AppContextProvider>
  )
}
