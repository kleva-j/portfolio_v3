"use client";

import { SectionWrapper } from '@/components/hoc/SectionWrapper';
import { TabContent } from '@/components/ui/TabContent';
import { siteConfig } from '@/lib/config/siteConfig';
import { TabList } from '@/components/ui/TabList';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const { experiences } = siteConfig.content;

const tablist = Object.values(experiences);

export const Experience = SectionWrapper(
  () => {
    const [selectedTab, setSelectedTab] = useState(tablist[0]);

    return (
      <div>
        <h2 className="relative flex items-center before:relative [counter-increment:section] before:[content:'0'counter(section)'.'] before:text-teal-500 before:mr-[5px] mt-[10px] mb-[40px] whitespace-nowrap text-2xl before:font-mono font-semibold text-[#ccd6f6] after:content-[''] after:ml-[10px] after:w-full after:max-w-[300px] after:h-px after:relative after:block after:bg-[#233554]">
          Where I&rsquo;ve Worked
        </h2>
        <div className="flex flex-col sm:flex-row">
          <>
            <TabList list={tablist} selectedTab={selectedTab} render={(className, item) => (
              <li
                key={`${item.label}-${item.description}`}
                className={cn(
                  'relative text-center sm:text-start sm:pl-[15px] cursor-pointer w-[128px] py-[10px] whitespace-nowrap capitalize font-mono text-[13px] hover:bg-[#112240] max-sm:border-b-2 sm:border-l-2 max-sm:border-b-[#233554] sm:border-l-[#233554] min-w-[128px] transition-colors',
                  className
                )}
                onClick={() => setSelectedTab(item)}
              >
                {item.label}
              </li>
            )} />
            <TabContent selectedTab={selectedTab} />
          </>
        </div>
      </div>
    );
  },
  'jobs',
  'mx-auto py-[60px] sm:py-[80px] md:py-[100px] w-full max-w-[700px]'
);
