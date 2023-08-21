import { motion } from 'framer-motion';
import { ExternalLink, Folder } from 'lucide-react';
import { FC } from 'react';

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/Card';
import { Work } from '@/libs/types';

export const ProjectList: FC<{ works: Work[] }> = ({ works }) => (
  <motion.section
    className="py-[100px]"
    animate="visible"
    initial={{ opacity: 0 }}
    viewport={{ once: true }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.25, duration: 1.9 }}
  >
    <h2 className="mb-2.5 font-semibold leading-[1.1] text-3xl text-[#ccd6f6] text-center">
      Other Noteworthy Projects
    </h2>
    <ul className="grid grid-cols-autofill_sm lg:grid-cols-autofill gap-6 mt-[50px]">
      {works.slice(3).map((item) => (
        <Card key={item.title} className="group hover:-translate-y-1.5 hover:shadow-xl transition duration-300">
          <CardHeader className="flex-row p-0 justify-between mb-[35px] z-10">
            <Folder size={40} strokeWidth={1.8} absoluteStrokeWidth className="text-teal-400" />
            <a href={item.url} target="_blank" rel="noreferrer">
              <ExternalLink size={20} className="transition-colors duration-300 hover:text-teal-400" />
            </a>
          </CardHeader>
          <CardContent className="mb-[20px]">
            <h3 className="text-[20px] mb-2.5 leading-[1.1] font-semibold">
              <a
                href="#"
                className="after:content-[''] after:block after:absolute after:z-0 after:w-full after:h-full after:top-0 after:left-0 group-hover:text-teal-400 transition-colors duration-300"
              >
                {item.title}
              </a>
            </h3>
            <div className="text-[#a8b2d1] text-[14.5px]">
              <p>{item.tagline}</p>
            </div>
          </CardContent>
          <CardFooter className="mt-auto">
            <ul className="flex flex-wrap justify-start text-[#8892b0]">
              {['React', 'Tailwind', 'Express', 'Heroku', 'Spotify API'].map((item) => (
                <li key={item} className="font-mono text-[11.5px] leading-[1.75] mr-[15px] last:mr-0">
                  {item}
                </li>
              ))}
            </ul>
          </CardFooter>
        </Card>
      ))}
    </ul>
  </motion.section>
);
