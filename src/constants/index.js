import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";
import pepcoding from '../assets/company/pepcoding.png'
import limpias from '../assets/company/limpias.jpg'
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "project",
    title: "Project",
  }
];

const services = [
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  }
];

const technologies = [
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
 
  {
    name: "React JS",
    icon: reactjs,
  },
  
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "HTML 5",
    icon: html,
   
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  
 
];

const experiences = [
  {
    title: "Software Developer Intern",
    company_name: "Pepcoding",
    icon: pepcoding,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Web development, automation, web scraping, database, OOP, datastructures and algorithms, ReactJS have all been covered in the training.Developed 4 easy-to-use web applications, used ReactJS to develop a scalable web application; reduced load time by 50%."
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "Limpias",
    icon: limpias,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developed the corporate website, linked the database with the user information section. Increased the code efficiency by 20%. Tech Stack: HTML, CSS, Bootstrap, JavaScript, MongoDB",
    ],
  },
 
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "NotesPanda",
    description:
      "An app that provides user the ability to write notes and save it on the cloud.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "RESTful API",
        color: "pink-text-gradient",
      },
      {
        name: "Express",
        color: "blue-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Tushar1619/NotesPandaBackend",
  },
  {
    name: "Code Editor",
    description:
     "A front-end development environment made for developers to write and test the code. Supports HTML, CSS and JavaScript with a live preview. A time out of 1000 ms is set to prevent frequent updating of the DOM.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "CodeMirror2",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Tushar1619/CodeEditor",
  },
  {
    name: "News Panda",
    description:
      "A news website, giving real time news in less than 100 words. Dark and Light mode for better user experience. 15% faster than other news websites.Fully responsive works on all screen sizes.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "News Api",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Tushar1619/News-Panda",
  },
];

export { services, technologies, experiences, testimonials, projects };
