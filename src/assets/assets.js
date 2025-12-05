import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';

 import bookStoreProfile from '../assets/bookStoreProfile.png';
 import padmaAchar from '../assets/padmaAchar.png';
 import Calculator from '../assets/Calculator.png';
 import protfolio from '../assets/protfolio.png'
 import quiz from '../assets/quiz.png'
 import image from '../assets/image.png'
 import backend from '../assets/backend.png'






export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Innovative',
      description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
      color: 'text-purple'
    },
    {
      icon: FaPaintBrush,
      title: 'Design Oriented',
      description: 'Beautiful design and user experience are at the heart of everything I create.',
      color: 'text-pink'
    },
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'I write maintainable, efficient code following best practices and modern patterns.',
      color: 'text-blue'
    }
  ];



export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
    tags: ['React',  'Angular', 'TypeScript','Redux']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Creating robust server-side applications and RESTful APIs.',
    tags: ['Node.js', 'Express', ]
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and optimizing databases for performance and scalability.',
    tags: ['MongoDB', 'PostgreSQL', 'MySQL']
  },

 
  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description: 'Essential tools and technologies I use in my development workflow.',
    tags: ['Git & GitHub', 'Figma',]
  }
];



 export const projects = [
  {
    title: "Book Store Web App",
    description: "A web application for managing and purchasing books online with user authentication with dark/light mode support and free features.",
     image: bookStoreProfile,
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    icons: [FaReact, FaNodeJs, FaDatabase ],
    demo: "#",
    code: "https://github.com/binisha77/BookStore",
  },
  {
    title: "Padma Achar Website",
    description: " Achar e-commerce can review and order system with user reviews.",
     image: padmaAchar,
    tech: ["React", "Tailwind CSS",],
    icons: [FaReact],
    demo: "https://binisha77.github.io/padmaAachar/", 
    code: "https://github.com/binisha77/padmaAachar",
  },
  {
    title: "Movie Tutorial ",
    description:"Explore a vast library of movies, discover new favorites, and stay up-to-date with the latest releases. ",
      image: image,
    tech: ["React js"],
    icons: [FaReact],
    demo: "https://binisha77.github.io/MovieProject/",
    code: "https://github.com/binisha77/MovieProject",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase projects, skills, and blogs with darkt mode support.",
    image: protfolio,
    tech: ["React", "Tailwind CSS", "Framer Motion", "Markdown"],
    icons: [FaReact],
    demo: "#",
    code: "#",
  },
  {
    title: "MERN3projectServer",
    description: "A real-time server application using Socket.IO , product add to cart feature  payment integration with khalti, order status",
     image: backend,   
    tech: ["Socket.IO", "TypeScript", "Node.js", "postman","postgreSQL"],
    icons: [SiTypescript, FaNodeJs, FaDatabase ],
    demo: "#",
    code: "https://github.com/binisha77/MERN3_projectServer",
  },
  {
    title: "Quiz Application",
    description: "A Java-based Quiz Application that offers an interactive way to test knowledge with dynamic questions, instant feedback, and score tracking. Built as a foundation for an expandable learning platform with support for multiple question types and difficulty levels.",
      image: quiz,
    tech: ["Java"],
    icons: [],
    demo: "#",
    code: "https://github.com/binisha77/Quiz-Application",
  },
   {
    title: "Calculator",
    description: "A simple and responsive calculator built using HTML and CSS. Designed with a clean UI to perform basic arithmetic operations while focusing on layout styling, button design, and user-friendly interaction. A beginner-friendly project to practice front-end structure and styling",
     image: Calculator,
    tech: ["HTML", "CSS"],
    icons: [],
    demo: "https://book-store-4cdz-eieh3ps1r-binisha77s-projects.vercel.app",
    code: "https://github.com/binisha77/-codesoft/tree/main/calculator",
  }
];

  export const socialLinks = [
    {
      platform: 'GitHub',
      url: 'https://github.com/binisha77'
    },
    {
      platform: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sovita-khadka-1086b925a/'
    }
  ]
