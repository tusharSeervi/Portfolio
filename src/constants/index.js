import { cn, graduation, secondary, seniorSecondary } from "../assets/images";
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
    typescript
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
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
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
  
   
];

export const experiences = [
    {
        title: "10th Grade",
        company_name: "Secondary Education",
        icon: secondary,
        iconBg: "#accbe1",
        date: "March 2016 - April 2017",
        points: [
          "Scored 87.40% in 10th Grade from M.S. Kawar International School, Pali (Rajasthan) — marking the start of my tech journey.",        ],
    },
    {
        title: "12th Grade",
        company_name: "Higher Secondary Education",
        icon: seniorSecondary,
        iconBg: "#fbc3bc",
        date: "March 2019 - April 2020",
        points: [
            "Completed my Higher Secondary Education (12th Grade) with 73.00% from Adarsh Central Senior Secondary School, Jodhpur (Rajasthan).",
            "Also appeared for the JEE Mains exam and cleared it with an 89 percentile, which helped strengthen my foundation in problem-solving and logical thinking.",
        ],
    },
    {
        title: "B.Tech(CSE)",
        company_name: "Undergraduation",
        icon: graduation,
        iconBg: "#b7e4c7",
        date: "July 2020 - March 2024",
        points: [
            "B.Tech in Computer Science and Engineering — JECRC University, Jaipur (Rajasthan) — 72.16% (2024)",
            "Built two projects in Machine Learning, applying data-driven techniques to solve real-world problems.",
            "Served as the Vice-Captain of the college basketball team, showcasing leadership, teamwork, and discipline both on and off the court.",
            "Completed an internship at Dataplay, Jaipur, as a Data Analyst, gaining hands-on experience in data handling and visualization.",
            "Explored various fields of technology, gradually shifting focus toward Full-Stack Development and Software Engineering.",
        ],
    },
    {
        title: "Course",
        company_name: "Full-Stack Development",
        icon: cn,
        iconBg: "#a2d2ff",
        date: "June 2024 - Present",
        points: [
            "Learning and building projects using React, Node.js, Express, and MongoDB.",
            "Strengthened knowledge of Data Structures, Algorithms, and Database Management.",
            "Focused on writing clean, efficient, and scalable code for real-world applications."
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/tusharSeervi',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/tushar-choudhary-469629202/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Crypto Tracker',
        description: 'Developed a responsive crypto price tracking web application that displays real-time cryptocurrency data, allowing users to monitor prices, view detailed coin information, and manage favorite coins for quick access.',
        link: 'https://crypto-tracker-drab-one.vercel.app/',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Streamify-Chat & VideoCalling',
        description: 'Developed a scalable full-stack chat and video calling application featuring real-time messaging, 1-on-1 and group video calls, secure JWT-based authentication, and global state management, using modern technologies to deliver a high-performance, production-ready communication platform.',
        link: 'https://streamify-8shr.onrender.com',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'HiLink Travel App',
        description: 'Developed a modern and fully responsive travel website UI using Next.js, TypeScript, and Tailwind CSS, focusing on clean layouts, reusable components, and an engaging user experience across all devices.',
        link: 'https://travel-app-coral-nu.vercel.app/',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Inventory Management System',
        description: 'Developed a production-ready inventory management system using Node.js, Express.js, and MVC architecture, enabling efficient product CRUD operations with server-side rendering and a clean, scalable backend structure.',
        link: 'https://inventary-managment-system.onrender.com',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'TWO GOOD CO ',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://two-good-co-teal.vercel.app',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'DALLE-2 Clone',
        description: 'Developed a responsive landing page inspired by the Two Good Co website, focusing on clean UI design, smooth scrolling interactions, and modern frontend fundamentals using HTML, CSS, and JavaScript.',
        link: 'https://dalle-2-0-five.vercel.app/',
    }
];