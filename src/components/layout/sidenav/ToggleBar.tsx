import type { IAppContext } from "@/components/context/AppContext";
import type { FC } from "react";

import { UseAppContext } from "@/components/context/AppContext";
import { motion } from "framer-motion";

export const ToggleBar: FC = () => {
  const { isOpen, toggleOpen } = UseAppContext() as IAppContext;

  return (
    <button
      type="button"
      onClick={toggleOpen}
      className="sm:hidden"
      aria-label="Toggle navigation menu"
    >
      <svg width="23" height="23" viewBox="0 0 23 23" aria-label="Toggle menu icon">
        <title>Toggle menu</title>
        <motion.path
          fill="transparent"
          strokeWidth="3"
          stroke="hsl(173, 80%, 40%)"
          animate={isOpen ? "open" : "closed"}
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <motion.path
          fill="transparent"
          strokeWidth="3"
          stroke="hsl(173, 80%, 40%)"
          animate={isOpen ? "open" : "closed"}
          strokeLinecap="round"
          d="M 2 9.423 L 20 9.423"
          transition={{ duration: 0.1 }}
          variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }}
        />
        <motion.path
          fill="transparent"
          strokeWidth="3"
          stroke="hsl(173, 80%, 40%)"
          animate={isOpen ? "open" : "closed"}
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </button>
  );
};
