import { RightFloatBar } from '@/components/RightFloatBar';
import { LeftFloatBar } from '@/components/LeftFloatBar';
import { MainSection } from '@/components/MainSection';
import { SideNav } from '@/components/layout/sidenav';
import { Header } from '@/components/layout/Header';
import { Fragment } from 'react';

export default function HomePage() {
  return (
    <Fragment>
      <Header />
      <SideNav />
      <MainSection />
      <RightFloatBar />
      <LeftFloatBar />
    </Fragment>
  )
}
