import { motion } from 'framer-motion';

import { SectionWrapper } from '@/components/hoc/SectionWrapper';
import { siteConfig } from '@/libs/config/siteConfig';

const { about } = siteConfig.content;

export const About = SectionWrapper(
  () => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        animate="visible"
        transition={{ delay: 0.25, duration: 1.9 }}
      >
        <h2 className="relative before:relative [counter-increment:section] before:[content:'0'counter(section)'.'] before:text-teal-500 before:mr-4 mt-[10px] mb-[40px] whitespace-nowrap text-2xl before:font-mono font-semibold text-[#ccd6f6] after:content-[''] after:ml-[13rem] after:w-[300px] after:h-px after:relative after:bottom-[15px] after:block after:bg-[#233554]">
          About Me
        </h2>
        <div className="grid grid-cols-[3fr_2fr]">
          <div className="flex flex-col gap-4">
            {about.subTexts.map((text, i) => (
              <p className="text-[#8892b0] text-base" key={i}>
                {text}
              </p>
            ))}
            <p className="text-[#8892b0] text-base">Here are a few technologies I’ve been working with recently:</p>
            <ul className="grid grid-cols-[repeat(2,minmax(140px,200px))] gap-y-2">
              {about.technologies.map((tech) => (
                <li
                  className="relative text-[#8892b0] font-mono text-[13px] before:[content:'▹'] before:absolute before:left-0 pl-5"
                  key={tech}
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative max-w-[300px] ml-auto">
            <div className="overflow-hidden max-h-[250px]">
              <img src="./michael.jpg" className="rounded w-[250px]" alt="profile pic" />
            </div>
          </div>
        </div>
      </motion.div>
    );
  },
  'about',
  'pt-[50px] w-full max-w-[900px]'
);
