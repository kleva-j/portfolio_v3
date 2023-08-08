import { motion } from 'framer-motion';

import { SectionWrapper } from '@/components/hoc/SectionWrapper';
import { siteConfig } from '@/libs/config/siteConfig';

const { about } = siteConfig.content;

export const About = SectionWrapper(
  () => {
    return (
      <motion.div
        animate="visible"
        initial={{ opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.25, duration: 1.9 }}
      >
        <h2 className="relative flex items-center before:relative [counter-increment:section] before:[content:'0'counter(section)'.'] before:text-teal-500 before:mr-[5px] mt-[10px] mb-[40px] whitespace-nowrap text-2xl before:font-mono font-semibold text-[#ccd6f6] after:content-[''] after:ml-[10px] after:w-full after:max-w-[300px] after:h-px after:relative after:block after:bg-[#233554]">
          About Me
        </h2>
        <div className="block md:grid md:grid-cols-[3fr_2fr] gap-[50px]">
          <div className="flex flex-col gap-4">
            {about.subTexts.map((text, i) => (
              <p className="text-[#8892b0] text-sm/6 md:text-base" key={i}>
                {text}
              </p>
            ))}
            <p className="text-[#8892b0] text-sm/6 md:text-base">
              Here are a few technologies I’ve been working with recently:
            </p>
            <ul className="grid grid-cols-[repeat(2,minmax(140px,200px))] gap-y-2">
              {about.technologies.map((tech) => (
                <li
                  className="relative text-[#8892b0] font-mono text-[13px] before:[content:'▹'] before:absolute before:left-0 pl-5 before:text-teal-500"
                  key={tech}
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative max-w-[300px] my-[50px] md:my-0 mx-auto md:ml-auto">
            <div className="border border-transparent rounded aspect-square sm:max-w-[300px] overflow-hidden">
              <figure>
                <img src="./michael.jpg" className="object-contain relative -top-[10px]" alt="profile pic" />
              </figure>
            </div>
          </div>
        </div>
      </motion.div>
    );
  },
  'about',
  'mx-auto py-[60px] sm:py-[80px] md:py-[100px] w-full max-w-[900px]'
);
