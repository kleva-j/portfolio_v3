import { Codepen, Github, Linkedin, Rss, Twitter } from 'lucide-react';

const socials = [
  {
    label: 'Github',
    icon: Github,
    url: 'https://github.com/kleva-j',
  },
  {
    label: 'Linkedin',
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/michael-obasi-808806140/',
  },
  {
    label: 'Codepen',
    icon: Codepen,
    url: 'https://codepen.io/albertstein/',
  },
  {
    label: 'Twitter',
    icon: Twitter,
    url: 'http://twitter.com/kasmickleva',
  },
  {
    label: 'RSS',
    icon: Rss,
    url: '#',
  },
];

export const Socials = () => {
  return (
    <ul className="flex items-center justify-between md:flex-col max-md:max-w-[270px] max-md:w-full mx-auto max-md:mb-2.5 md:gap-y-4">
      {socials.map((item) => {
        const Icon = item.icon;
        return (
          <li
            key={item.label}
            className="text-[#a8b2d1] p-2 hover:text-teal-500 hover:-translate-y-[3px] transition-transform duration-300"
          >
            <a href={item.url}>
              <Icon size={21} />
            </a>
          </li>
        );
      })}
    </ul>
  );
};
