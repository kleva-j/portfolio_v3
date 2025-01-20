import type { TabItem } from "@/lib/types";
import type { JSX } from "react";

import { motion } from "framer-motion";

export interface TabListProps {
  render: (className: string, item: TabItem) => JSX.Element;
  selectedTab: TabItem;
  list: TabItem[];
}

export const TabList = ({ render, selectedTab, list }: TabListProps) => {
  const { label, index } = selectedTab;

  return (
    <nav className="mb-[50px] max-sm:w-full overflow-x-auto no-scrollbar relative sm:min-w-max">
      <ul
        className="flex w-full sm:flex-col"
        aria-label="Job tabs"
        role="tablist"
      >
        {list.map((item) =>
          render(
            item.label === label ? "selected text-teal-500" : "text-[#8892B0]",
            item,
          ),
        )}
      </ul>
      <motion.div
        animate={{ x: `${index * 128}px` }}
        className="sm:hidden h-0.5 bg-teal-600 rounded w-[128px] absolute bottom-0"
      />
      <motion.div
        animate={{ y: `${index * 40}px` }}
        className="hidden sm:block h-[40px] bg-teal-600 rounded w-0.5 absolute left-0 top-0"
      />
    </nav>
  );
};
