/* eslint-disable @next/next/no-img-element */
"use client";

import type { Project } from '@/lib/types';
import type { FC } from 'react';

import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

export const FeaturedCard: FC<Project> = (props) => {
  const { title, tagline, banner_img, github_url, url } = props;

  return (
    <motion.li
      className="featuredCard relative grid gap-[10px] grid-cols-layout items-center group/item mb-[30px] sm:mb-[70px] md:mb-[100px] last:mb-0"
      animate="visible"
      initial={{ opacity: 0 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.25, duration: 1.9 }}
    >
      <div className="featuredContent relative text-left md:group-odd/item:text-right z-10">
        <span className="my-2.5 font-normal font-mono text-teal-400 text-[13px]">Featured Project</span>
        <h3 className="mb-2.5 md:mb-5 text-[#ccd6f6] text-[20px] md:text-[25px] font-semibold md:text-[#e6f1ff] leading-[1.1] hover:text-teal-400 transition-colors duration-300">
          <a
            href="#"
            className="after:content-[''] after:block md:after:hidden after:absolute after:z-0 after:w-full after:h-full after:top-0 after:left-0"
          >
            {title}
          </a>
        </h3>
        <div className="relative rounded-sm text-[#a8b2d1] text-base py-5 md:p-[25px] bg-transparent md:bg-[#112240]">
          <p>{tagline}</p>
        </div>
        <ul className="flex flex-wrap justify-start text-[#a8b2d1] md:group-odd/item:justify-end my-2.5 md:mt-6">
          {['React', 'Tailwind', 'Express', 'Spotify API', 'Heroku'].map((item) => (
            <li key={item} className="font-mono text-[12px] mr-2.5 mb-[5px]">
              {item}
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-x-5 flex-wrap justify-start text-[#a8b2d1] md:group-odd/item:justify-end my-2.5 md:mt-6">
          <a
            target="_blank"
            href={github_url}
            rel="noreferrer"
            className="transition-colors duration-300 hover:text-teal-400"
          >
            <Github />
          </a>
          <a target="_blank" href={url} rel="noreferrer" className="transition-colors duration-300 hover:text-teal-400">
            <ExternalLink />
          </a>
        </div>
      </div>
      <div className="col-span-full h-full opacity-25 md:relative row-span-full group-odd/item:col-span-full md:col-[6_/_-1] z-[1] md:group-odd/item:col-[1_/_8]">
        <a
          href="#"
          className="bg-teal-400 h-full w-full before:content-[''] before:block before:absolute before:z-[3] before:w-full before:h-full before:inset-0 before:bg-[#0a192f] before:mix-blend-screen"
        >
          <div className="max-w-auto object-cover grayscale contrast-100 brightness-50 mix-blend-multiply md:brightness-90 w-auto h-full align-middle overflow-hidden relative">
            <div className="max-w-[700px] block w-full h-full" />
            <img
              src={banner_img}
              alt="project banner"
              className="aspect-video object-cover transition-opacity duration-500 ease-linear absolute inset-0 h-full max-w-none m-0 w-full"
            />
          </div>
        </a>
      </div>
    </motion.li>
  );
};
