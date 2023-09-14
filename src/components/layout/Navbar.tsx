import { LayoutGroup, motion } from 'framer-motion';
import type { FC } from 'react';

import { siteConfig } from '@/libs/config/siteConfig';
import { fadeIn } from '@/libs/utils/styles';

const { links } = siteConfig;
const { resume, navlinks } = links;

const len = navlinks.length;

export const Navbar: FC = () => {
  return (
    <LayoutGroup>
      <motion.ol
        initial="hidden"
        animate="visible"
        variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}
        transition={{ delay: 0.35 }}
        className="hidden sm:flex flex-wrap gap-x-6 [counter-reset:navitem] items-center"
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
            hover:text-teal-500 before:mr-1 transition-colors duration-300"
              href={href}
            >
              {label}
            </a>
          </motion.li>
        ))}
        <motion.div variants={fadeIn('down', 'spring', 0.08 * len, 1)} initial="hidden" animate="show" custom={len}>
          <a
            href={resume}
            target="_blank"
            rel="noreferrer"
            className="font-mono ml-4 text-teal-400 bg-transparent text-[15px] outline-none w-fit border-2 border-teal-400 rounded-lg leading-none py-2 px-4 font-medium hover:bg-transparent hover:text-teal-300/90 hover:border-teal-300/90"
          >
            Resume
          </a>
        </motion.div>
      </motion.ol>
    </LayoutGroup>
  );
};
