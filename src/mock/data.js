import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Ge Li', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Personal Website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, I am ',
  name: 'Ge Li',
  subtitle: "I'm the Front-end/ML/Software developer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profiles.jpg',
  paragraphOne: 'I am a sophomore studying at UC-Berkeley majoring in Computer Science. My interested domain is software engineering and machine Learning.',
  paragraphTwo: '',
  paragraphThree: 'Here is my email if you want to contact me: geli2001@berkeley.edu',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
