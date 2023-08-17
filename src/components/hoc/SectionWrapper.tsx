import { motion } from 'framer-motion';

import { cn } from '@/libs/utils';

export const SectionWrapper = (Component: () => JSX.Element, idName?: string, className?: string) =>
  function Hoc() {
    return (
      <motion.section
        animate="visible"
        initial={{ opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.25, duration: 1.9 }}
        className={cn('w-full py-[100px] max-w-4xl relative z-0', className)}
      >
        <span className="relative -top-14" id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };
