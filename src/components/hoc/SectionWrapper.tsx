import { motion } from 'framer-motion';

export const SectionWrapper = (Component: () => JSX.Element, idName?: string) =>
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
        className="sm:px-16 px-6 sm:py-16 py-10 max-w-[90rem] mx-auto relative z-0"
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };
