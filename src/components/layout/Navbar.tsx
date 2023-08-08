import { motion } from 'framer-motion';
import type { FC } from 'react';

import { siteConfig } from '@/libs/config/siteConfig';
import { fadeIn } from '@/libs/utils/styles';

const { navlinks } = siteConfig;

export const Navbar: FC = () => {
  return (
    <motion.ol
      initial="hidden"
      animate="visible"
      variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}
      transition={{ delay: 0.35 }}
      className="flex flex-wrap gap-x-6 [counter-reset:navitem]"
    >
      {navlinks.map(({ label, href, title }, index) => (
        <motion.li
          key={title}
          variants={fadeIn('down', 'spring', 0.08 * index, 1)}
          initial="hidden"
          animate="show"
          custom={index}
        >
          <a
            className="[counter-increment:navitem] before:[content:'0'counter(navitem)'.'] cursor-pointer font-mono text-[13px] text-[#ccd6f6] before:text-teal-500
            hover:text-teal-500 before:mr-1"
            href={href}
          >
            {label}
          </a>
        </motion.li>
      ))}
    </motion.ol>
  );
};
