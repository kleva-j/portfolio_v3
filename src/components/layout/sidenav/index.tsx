import { motion, useCycle } from 'framer-motion';
import { type FC } from 'react';

import { siteConfig } from '@/libs/config/siteConfig';
import { useElementSize } from '@/libs/hooks';

import { MenuItem } from './MenuItems';
import { ToggleBar } from './ToggleBar';

const { navlinks } = siteConfig;

export const SideNav: FC = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [containerRef, { height }] = useElementSize();

  return (
    <motion.div
      animate={isOpen ? 'open' : 'closed'}
      variants={{
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: '-100%' },
      }}
      custom={height}
      ref={containerRef}
      className="md:hidden"
    >
      <motion.div
        className="bg-red-400"
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
            clipPath: 'circle(30px at 40px 40px)',
            transition: {
              delay: 0.5,
              type: 'spring',
              stiffness: 400,
              damping: 40,
            },
          },
        }}
      />

      <motion.ul
        variants={{
          open: {
            transition: { staggerChildren: 0.07, delayChildren: 0.2 },
          },
          closed: {
            transition: { staggerChildren: 0.05, staggerDirection: -1 },
          },
        }}
        className="[counter-reset:section]"
      >
        {navlinks.map((item) => (
          <MenuItem key={item.title} {...item} />
        ))}
      </motion.ul>
      <ToggleBar toggleOpen={toggleOpen} />
    </motion.div>
  );
};
