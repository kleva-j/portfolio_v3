import { UseTabContext } from '@/components/Experience';
import { ITabContext } from '@/lib/types';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export const TabList = () => {
  const { tablist, selectedTab, setSelectedTab } = UseTabContext() as ITabContext;
  const { label, index } = selectedTab;

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
              {item.label}
            </li>
          );
        })}
      </ul>
      <motion.div
        animate={{ x: `${index * 128}px` }}
        className="sm:hidden h-0.5 bg-teal-600 rounded w-[128px] absolute bottom-0"
      />
      <motion.div
        animate={{ y: `${index * 40}px` }}
        className="hidden sm:block h-[40px] bg-teal-600 rounded w-0.5 absolute left-0 top-0"
      />
    </nav>
  );
};
