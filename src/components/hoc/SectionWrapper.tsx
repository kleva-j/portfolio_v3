import { motion } from 'framer-motion';

import { cn } from '@/libs/utils';

export const SectionWrapper = (Component: () => JSX.Element, idName?: string, className?: string) =>
  function Hoc() {
    return (
      <motion.section
        variants={{
          hidden: {},
          show: { transition: { delayChildren: 0 } },
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={cn('w-full py-[100px] max-w-4xl relative z-0 [counter-reset:section]', className)}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };
