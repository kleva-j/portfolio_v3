import type { TabItem } from "@/lib/types";
import { motion } from "framer-motion";

export interface TabContentProps {
  selectedTab: TabItem;
}

export const TabContent = ({ selectedTab }: TabContentProps) => {
  const { label, role, companyName, date, description } = selectedTab;

  return (
    <main className="overflow-hidden flex gap-x-2 flex-col sm:ml-5">
      <motion.div
        key={label}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, type: "tween" }}
        className="min-h-max"
        role="tabpanel"
      >
        <h3 className="mb-0.5 text-xl leading-snug font-medium text-[#ccd6f6] space-x-2">
          <span>{role}</span>
          <span className="text-teal-500 font-semibold cursor-pointer">
            &nbsp;@&nbsp;{companyName}
          </span>
        </h3>
        <p className="font-mono mb-6 text-[#8892B0] text-[13px]">
          {date.from} - {date.to}
        </p>
        <ul>
          {description.map((text) => (
            <li
              key={text}
              className="relative pl-[30px] pb-2.5 text-[#8892B0] before:[content:'▹'] before:absolute before:left-0 before:text-teal-500 text-sm/6 md:text-base"
            >
              {text}
            </li>
          ))}
        </ul>
      </motion.div>
    </main>
  );
};
