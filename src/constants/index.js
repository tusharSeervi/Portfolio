import { cn, schooling, university, dataplay } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },

  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Schooling",
    company_name: "Secondary & Higher Secondary Education",
    icon: schooling,
    iconBg: "#accbe1",
    date: "2016 – 2020",
    points: [
      "Completed 10th Grade with 87.40% from M.S. Kawar International School, Pali (Rajasthan), building a strong academic foundation.",
      "Completed 12th Grade with 73.00% from Adarsh Central Senior Secondary School, Jodhpur (Rajasthan).",
      "Appeared for JEE Mains and secured an 89 percentile, strengthening problem-solving and logical thinking skills.",
    ],
  },
  {
    title: "B.Tech (CSE)",
    company_name: "Undergraduate Studies",
    icon: university,
    iconBg: "#b7e4c7",
    date: "July 2020 – March 2024",
    points: [
      "Completed B.Tech in Computer Science and Engineering with an overall score of 72.16%.",
      "Developed a Machine Learning project using Python and Jupyter Notebook, gaining hands-on experience in data analysis and model development.",
      "Completed virtual internships with CodeSoft, CodeClause, and Bharat Intern, focusing on real-world problem-solving and development tasks.",
      "Explored multiple domains including Web Development, Data Science, Cloud, AI, and Machine Learning to build a strong technical foundation.",
      "Served as Vice-Captain of the university basketball team, demonstrating leadership, teamwork, and discipline.",
    ],
  },
  {
    title: "Data Science Intern",
    company_name: "DATAPLAY",
    icon: dataplay,
    iconBg: "#a2d2ff",
    date: "March 2024 – June 2024",
    points: [
      "Analyzed datasets using SQL and Microsoft Excel to generate structured insights and reports.",
      "Designed and developed interactive Power BI dashboards (Zomato and Amazon), handling data integration, transformation, and visualization.",
      "Applied basic Tableau concepts for business intelligence and exploratory data visualization.",
      "Collaborated with cross-functional teams, strengthening communication and teamwork skills.",
    ],
  },
  {
    title: "Full-Stack Web Development Bootcamp",
    company_name: "Coding Ninjas",
    icon: cn,
    iconBg: "#a2d2ff",
    date: "Jan 2025 – Present",
    points: [
      "Hands-on training in full-stack web development using React, Node.js, Express, MongoDB, and SQL.",
      "Built multiple real-world projects implementing REST APIs, authentication, CRUD operations, and MVC architecture.",
      "Strengthened problem-solving skills through in-depth practice of Data Structures, Algorithms, and database design.",
      "Focused on writing clean, scalable, and production-ready code following industry best practices.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/tusharSeervi",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/tushar-choudhary-469629202/",
  },
];

export const projects = [
  {
    iconUrl: summiz,
    theme: "btn-back-black",
    name: "SENS-AI",
    description:
      "SENSAI is an AI-powered career coaching platform that provides personalized resume feedback, cover letter assistance, interview preparation, and actionable industry insights through a modern full-stack architecture.",
    link: "https://sensai-ey8x.vercel.app/",
  },

  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Streamify-Chat & VideoCalling",
    description:
      "Developed a scalable full-stack chat and video calling application featuring real-time messaging, 1-on-1 and group video calls, secure JWT-based authentication, and global state management, using modern technologies to deliver a high-performance, production-ready communication platform.",
    link: "https://streamify-8shr.onrender.com",
  },

  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Inventory Management System",
    description:
      "Developed a production-ready inventory management system using Node.js, Express.js, and MVC architecture, enabling efficient product CRUD operations with server-side rendering and a clean, scalable backend structure.",
    link: "https://inventary-managment-system.onrender.com",
  },

  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Crypto Tracker",
    description:
      "Developed a responsive crypto price tracking web application that displays real-time cryptocurrency data, allowing users to monitor prices, view detailed coin information, and manage favorite coins for quick access.",
    link: "https://crypto-tracker-drab-one.vercel.app/",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "HiLink Travel App",
    description:
      "Developed a modern and fully responsive travel website UI using Next.js, TypeScript, and Tailwind CSS, focusing on clean layouts, reusable components, and an engaging user experience across all devices.",
    link: "https://travel-app-coral-nu.vercel.app/",
  },
  {
    iconUrl: estate,
    theme: "btn-back-yellow",
    name: "DALLE-2 Clone",
    description:
      "Developed a full-stack MERN-based AI image generation application that converts text prompts into high-quality images, featuring a scalable REST API, community image sharing, and a responsive modern UI inspired by MidJourney and DALL·E.",
    link: "https://dalle-2-0-five.vercel.app/",
  },
];
