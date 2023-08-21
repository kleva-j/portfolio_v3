export const siteConfig = {
  title: 'Portfolio v3',
  description: 'My personal portfolio',
  navlinks: [
    { title: 'about', href: '/portfolio_v3/#about', label: 'About' },
    { title: 'experience', href: '/portfolio_v3/#jobs', label: 'Experience' },
    { title: 'work', href: '/portfolio_v3/#work', label: 'Work' },
    { title: 'contact', href: '/portfolio_v3/#contact', label: 'Contact' },
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
          'Worked on a brilliant medical education platform developed using the Nextjs Framework and WordPress where I:',
          'Worked in an Agile-driven environment to effectively maintain project timelines and utilize available resources.',
          'Designed and maintained streamlined, reusable and reliable code for use within the internal product repositories.',
          'Designed and updated layouts to meet usability and performance requirements such as fast-loading pages.',
          'Drafted design timeline specifications to create accurate project deadlines and set budgetary metrics.',
        ],
      },
      'Law Pavilion': {
        index: 1,
        label: 'law pavilion',
        role: 'Front-End Angular Developer',
        companyName: 'Law Pavilion',
        date: { from: 'July', to: 'January 2021' },
        description: [
          'Worked on a robust Solutions application developed with the Angular Framework where I:',
          'Architected major parts of the app to enhance the performance and load time of the application.',
          'Developed reusable presentational and functional components used throughout the application.',
          'Achieved lazy-loading of multiple components, separation of heavy computations to a worker instance.',
        ],
      },
      Hourly: {
        index: 2,
        label: 'hourly',
        role: 'Full-Stack Software Engineer',
        companyName: 'Hourly Technologies',
        date: { from: 'November', to: 'March 2020' },
        description: [
          'Collaborated with teammates to develop highly efficient full-stack applications with React.js and Redux on the front-end, Node.js on the back-end and a React Native mobile application, where I:',
          'Architected major parts of the front-end and back-end application to be more flexible, extensible and testable while implementing numerous features on these applications.',
          'Facilitated the team’s adoption of the Scrum methodology by educating about and onboarding the practice and serving as Scrum master.',
          'Architected and implemented the application state machine on the front-end Admin platform.',
        ],
      },
      Andela: {
        index: 3,
        label: 'andela',
        role: 'Full-Stack Software Engineer',
        companyName: 'Andela',
        date: { from: 'Febuary', to: 'October 2019' },
        description: [
          'Deliver high-quality, robust production code for a diverse array of projects for clients.',
          'Assisted in architecting software solutions using third-party application program interfaces, services and software libraries.',
          'Actively sought and assessed new technology solutions to challenges identified by clients.',
          'Engaged in ongoing training and professional development as directed by the Company.',
        ],
      },
    },
  },
};
