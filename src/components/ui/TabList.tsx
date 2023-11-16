import { motion } from 'framer-motion';

import { UseTabContext } from '@/components/Experience';
import { ITabContext } from '@/libs/types';
import { cn } from '@/libs/utils';

export const TabList = () => {
  const { tablist, selectedTab, setSelectedTab } = UseTabContext() as ITabContext;
  const { label } = selectedTab;

  return (
    <nav className="mb-[50px] max-sm:w-full overflow-x-auto no-scrollbar relative sm:min-w-max">
      <ul className="flex w-full sm:flex-col" aria-label="Job tabs" role="tablist">
        {tablist.map((item) => {
          const cName = item.label === label ? 'selected text-teal-500' : 'text-[#8892B0]';
          return (
            <li
              key={item.label}
              className={cn(
                'relative text-center sm:text-start sm:pl-[15px] cursor-pointer w-[128px] py-[10px] whitespace-nowrap capitalize font-mono text-[13px] hover:bg-[#112240] max-sm:border-b-2 sm:border-l-2 max-sm:border-b-[#233554] sm:border-l-[#233554] min-w-[128px] transition-colors',
                cName
              )}
              onClick={() => setSelectedTab(item)}
            >
              {label === item.label && (
                <motion.span
                  layoutId="underline"
                  className="absolute bottom-0 sm:top-0 left-0 block w-full sm:w-0.5 sm:h-full h-0.5 bg-teal-500"
                />
              )}
              {item.label}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
