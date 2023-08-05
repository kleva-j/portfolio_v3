import { motion } from 'framer-motion';
import { FC } from 'react';

interface MenuItemsProps {
  title: string;
  label: string;
  href: string;
}

export const MenuItem: FC<MenuItemsProps> = ({ label, href }) => {
  return (
    <motion.li
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
      className="[counter-increment:section] marker:[content:counters(section,'.')]"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <a href={href}>{label}</a>
    </motion.li>
  );
};
