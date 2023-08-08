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
    experiences: {
      Aduro: {
        index: 0,
        label: 'aduro',
        role: 'Full-Stack Software Engineer',
        companyName: 'Aduro Creative',
        date: { from: 'April', to: 'Febuary 2021' },
        description: [
          "Engineered and improved major features of Starry's customer-facing Android web app using ES6, Handlebars, Backbone, Marionette, and CSS",
          'Proposed and implemented scalable solutions to issues identified with cloud services and applications responsible for communicating with the Starry Station internet router',
          'Collaborated with designers and other developers to ensure thoughtful and consistent user experiences across Starry’s iOS and Android mobile apps',
        ],
      },
      'Law Pavilion': {
        index: 1,
        label: 'law pavilion',
        role: 'Front-End Angular Developer',
        companyName: 'Law Pavilion',
        date: { from: 'July', to: 'January 2021' },
        description: [
          'Collaborated with other student designers and engineers on pro-bono projects to create new brands, design systems, and websites for organizations in the community',
          'Built and delivered technical solutions according to stakeholder business requirements',
        ],
      },
      Hourly: {
        index: 2,
        label: 'hourly',
        role: 'Full-Stack Software Engineer',
        companyName: 'Hourly Technologies',
        date: { from: 'November', to: 'March 2020' },
        description: [
          'Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more',
          'Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements',
          'Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders',
          'Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship',
        ],
      },
      Andela: {
        index: 3,
        label: 'andela',
        role: 'Full-Stack Software Engineer',
        companyName: 'Andela',
        date: { from: 'Febuary', to: 'October 2019' },
        description: [
          'Developed and styled interactive web applications for Apple Music using Ember and SCSS',
          'Built and shipped the Apple Music Extension for Facebook Messenger leveraging third-party and internal API integrations',
          "Architected and implemented the user interface of Apple Music's embeddable web player widget for in-browser user authorization and full song playback",
          'Contributed extensively to the creation of MusicKit JS, a public-facing JavaScript SDK for embedding Apple Music players into web applications',
        ],
      },
    },
  },
};
