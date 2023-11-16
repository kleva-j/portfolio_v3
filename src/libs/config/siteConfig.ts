export const siteConfig = {
  title: 'Portfolio v3',
  description: 'My personal portfolio',
  links: {
    navlinks: [
      { title: 'about', href: '/portfolio_v3/#about', label: 'About' },
      { title: 'experience', href: '/portfolio_v3/#jobs', label: 'Experience' },
      { title: 'work', href: '/portfolio_v3/#work', label: 'Work' },
      { title: 'contact', href: '/portfolio_v3/#contact', label: 'Contact' },
    ],
    resume: 'https://docs.google.com/document/d/1EsygX33ZVzBAW6L1qMU773qcsVzCc5uRURDyb4U5yQE/edit?usp=sharing',
  },
  content: {
    hero: {
      title: 'Hi, my name is',
      headText: ['Michael Obasi', 'I build things for the web.'],
      subText:
        "I'm a software developer with a passion for building robust and scalable applications. Proficient in multiple programming languages and frameworks, with a keen eye for detail and a drive for continuous learning.",
    },
    about: {
      subTexts: [
        'Hello! My name is Michael and I enjoy creating things that live on the internet. My journey into the thrilling world of software development started out as a teenage curiosity and quickly turned into an exhilarating adventure. I remember the excitement of tinkering with my first lines of code, trying to understand how this digital magic worked.',
        `The moment I made my first program run successfully, displaying a scrolling marque text "I am a Jangilova" on the screen, I was hooked. It was like discovering a hidden superpower. As a teenager, I spent countless hours learning programming languages, watching online tutorials, and participating in coding challenges.`,
        "The joy of solving problems, building apps, and seeing my creations come to life was incredibly rewarding. What started as a hobby soon became a dream – to harness the power of technology to make a positive impact on the world. Now, as I continue this journey into software, I can't help but feel like I'm unlocking the secrets of the digital universe one line of code at a time, and the future is brimming with endless possibilities.",
      ],
      technologies: ['TypeScript', 'React', 'Redux.js', 'Next.js', 'CSS/SASS/LESS', 'Tailwind', 'Git/Github', 'Figma'],
    },
    experiences: {
      Aduro: {
        index: 0,
        label: 'aduro',
        role: 'Full-Stack Software Engineer',
        companyName: 'Aduro Creative',
        date: { from: 'April', to: 'Febuary 2022' },
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
