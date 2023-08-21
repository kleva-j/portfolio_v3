import { motion } from 'framer-motion';
import { type FC } from 'react';

import { siteConfig } from '@/libs/config/siteConfig';
import { useElementSize } from '@/libs/hooks';

const { navlinks } = siteConfig;

interface SideNavProps {
  toggleOpen: () => void;
  isOpen: boolean;
}

export const SideNav: FC<SideNavProps> = ({ isOpen, toggleOpen }) => {
  const [containerRef, { height, width }] = useElementSize();

  return (
    <motion.div
      animate={isOpen ? 'open' : 'closed'}
      variants={{
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: '100%' },
      }}
      custom={height}
      ref={containerRef}
      className="sm:hidden h-[100vh] fixed top-0 right-0 z-10 w-3/4 shadow-xl"
    >
      <aside className="w-full h-full relative px-5">
        <motion.ul
          animate={isOpen ? 'open' : 'closed'}
          variants={{
            open: {
              transition: { staggerChildren: 0.07, delayChildren: 0.2 },
            },
            closed: {
              transition: { staggerChildren: 0.05, staggerDirection: -1 },
            },
          }}
          className="[counter-reset:section] z-10 absolute inset-1/4 flex flex-col gap-y-7 font-mono items-center text-center"
        >
          {navlinks.map(({ title, href, label }) => (
            <motion.li
              key={title}
              variants={{
                open: {
                  y: 0,
                  opacity: 1,
                  transition: { y: { stiffness: 1000, velocity: -100 } },
                },
                closed: {
                  y: 50,
                  opacity: 0,
                  transition: { y: { stiffness: 1000 } },
                },
              }}
              onClick={toggleOpen}
              className="[counter-increment:section] before:[content:'0'counter(section)'.'] before:text-teal-500 text-[#ccd6f6] text-sm flex flex-col gap-y-1.5 cursor-pointer hover:text-teal-400"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href={href}>{label}</a>
            </motion.li>
          ))}
        </motion.ul>
        <motion.div
          animate={isOpen ? 'open' : 'closed'}
          className="bg-[#112240] w-full h-full absolute top-0 right-0"
          variants={{
            open: (height = 1000) => ({
              clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
              transition: {
                type: 'spring',
                stiffness: 20,
                restDelta: 2,
              },
            }),
            closed: {
              clipPath: `circle(30px at ${width} 40px)`,
              transition: {
                delay: 0.5,
                type: 'spring',
                stiffness: 400,
                damping: 40,
              },
            },
          }}
        />
      </aside>
    </motion.div>
  );
};
