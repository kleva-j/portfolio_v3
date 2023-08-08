export const siteConfig = {
  title: 'Portfolio v3',
  description: 'My personal portfolio',
  navlinks: [
    { title: 'about', href: '/#about', label: 'About' },
    { title: 'experience', href: '/#jobs', label: 'Experience' },
    { title: 'work', href: '/#work', label: 'Work' },
    { title: 'contact', href: '/#contact', label: 'Contact' },
  ],
  content: {
    hero: {
      title: 'Hi, my name is',
      headText: ['Michael Obasi', 'I build things for the web.'],
      subText:
        "I'm a software developer with a passion for building robust and scalable applications. Proficient in multiple programming languages and frameworks, with a keen eye for detail and a drive for continuous learning.",
    },
    about: {
      subTexts: [
        'Hello! My name is Michael and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!',
        'Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.',
        'I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.',
      ],
      technologies: ['TypeScript', 'React', 'Redux.js', 'Next.js', 'CSS/SASS/LESS', 'Tailwind', 'Git/Github', 'Figma'],
    },
  },
};
