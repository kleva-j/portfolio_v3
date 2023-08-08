import { motion } from 'framer-motion';

import { UseTabContext } from '@/components/Experience';
import { ITabContext } from '@/libs/types';

export const TabContent = () => {
  const { selectedTab } = UseTabContext() as ITabContext;
  const { role, date, label, companyName, description } = selectedTab;

  return (
    <main className="overflow-hidden flex gap-x-2 flex-col sm:ml-5">
      <motion.div
        key={label}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, type: 'tween' }}
        className="min-h-max"
        role="tabpanel"
      >
        <h3 className="mb-0.5 text-xl leading-snug font-medium text-[#ccd6f6] space-x-2">
          <span>{role}</span>
          <span className="text-teal-500 font-semibold cursor-pointer">&nbsp;@&nbsp;{companyName}</span>
        </h3>
        <p className="font-mono mb-6 text-[#8892B0] text-[13px]">
          {date.from} - {date.to}
        </p>
        <ul>
          {description.map((text, index) => (
            <li
              key={index}
              className="relative pl-[30px] pb-2.5 text-[#8892B0] before:[content:'▹'] before:absolute before:left-0 before:text-teal-500"
            >
              {text}
            </li>
          ))}
        </ul>
      </motion.div>
    </main>
  );
};
