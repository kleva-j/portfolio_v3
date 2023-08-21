import { createContext, useContext, useState } from 'react';

import { SectionWrapper } from '@/components/hoc/SectionWrapper';
import { TabContent } from '@/components/ui/TabContent';
import { TabList } from '@/components/ui/TabList';
import { siteConfig } from '@/libs/config/siteConfig';
import { ITabContext } from '@/libs/types';

const { experiences } = siteConfig.content;
const tablist = Object.values(experiences);

export const TabContext = createContext<ITabContext | null>(null);

export function UseTabContext() {
  const context = useContext(TabContext);
  if (context === undefined) throw new Error(`UseTabContext must be used within a ContextProvider`);
  return context;
}

export const Experience = SectionWrapper(
  () => {
    const [selectedTab, setSelectedTab] = useState(tablist[0]);

    return (
      <div>
        <h2 className="relative flex items-center before:relative [counter-increment:section] before:[content:'0'counter(section)'.'] before:text-teal-500 before:mr-[5px] mt-[10px] mb-[40px] whitespace-nowrap text-2xl before:font-mono font-semibold text-[#ccd6f6] after:content-[''] after:ml-[10px] after:w-full after:max-w-[300px] after:h-px after:relative after:block after:bg-[#233554]">
          Where I&rsquo;ve Worked
        </h2>
        <div className="flex flex-col sm:flex-row">
          <TabContext.Provider value={{ selectedTab, tablist, setSelectedTab }}>
            <TabList />
            <TabContent />
          </TabContext.Provider>
        </div>
      </div>
    );
  },
  'jobs',
  'mx-auto py-[60px] sm:py-[80px] md:py-[100px] w-full max-w-[700px]'
);
