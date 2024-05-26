import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import fd from "@/public/fd.png";
import da from "@/public/da.png";
import bs from "@/public/bs.png";
import eb from "@/public/eb.png";
import dd from "@/public/dd.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Master of Science in Computer Science",
    location: "Syracuse University, NY",
    description:
      "I graduated with a CGPA of 3.86/4. My coursework includes Natural Language Processing, Artificial Intelligence, Data Science, Social Media and Data Mining, Android Programming, Data Structures and Algorithms, Computer Architecture",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2024",
  },
  {
    title: ".NET Developer",
    location: "NCR Corporation, Hyderabad, India",
    description:
      "Involved in developing a concurrent, version controlled restaurant management desktop application and web API using .NET framework, C#, ASP.Net MVC, SQL Server, Linq entity framework and Visual Studio. Increased the application's throughput by 30% by optimizing stored procedures by utilizing joins and subqueries involving multiple tables, performed regular database upgrades. Gathered requirements from stakeholders and designed DevExpress UI components including grids, charts, reports, and navigation controls using data binding mechanisms of C# entity framework. Improved decision-making by providing customizable dashboards with key performance indicators (KPIs), resulting in a 20% increase in revenue and operational efficiency. Provided technical leadership and mentoring to junior developers, fostering strong communication skills and continuous learning within the agile development team.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Software Developer",
    location: "NCR Corporation, Hyderabad, India",
    description:
      'Employed C++ and Microsoft Foundation Class Library to develop a robust restaurant point of sale application, streamlining operations and enhancing customer service. Implemented multiple UI screens utilizing MFC controls such as dialogs, buttons, menus, and list view, tailored to meet specific business requirements. Ensured seamless adaptation to updated business requirements, notably implementing features like multi-employee tip management. Addressed customer-end bugs, focusing on resolving issues related to configuration settings and null pointer exceptions swiftly and effectively. Delivered 100% of project milestones on time and within budget, fostering strong partnerships with cross functional teams and ensuring alignment with business objectives.',
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2021",
  },
] as const;

export const projectsData = [
  {
    title: "Book Selling React Website",
    description:
      "Utilized React router, Reducers, Hooks, Redux Persist, JWT tokens to develop a book selling application. Provided book suggestions by employing TensorFlow neural network trained on TF-IDF vectors of book descriptions.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: bs,
    githubLink: "https://github.com/NehaReddy77/VirtualVerse",
  },
  {
    title: "Event Ticketing Website",
    description:
      "Developed an Angular and TypeScript app for entering and displaying events with a Node.js backend and MongoDB. The backend handles CRUD operations. A Flask endpoint with a BERT model classifies events by title. The Angular app sends new event titles to Flask, retrieves the classification, and displays it.",
    tags: ["Angular", "NodeJS", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: eb,
    githubLink: "https://github.com/NehaReddy77/Event-Ticketing-Website",
  },
  
  {
    title: "Driver Drowsiness Detection",
    description:
      "Devised a real time system that sounds an alarm if it detects the driver to be drowsy based on eye closure and yawn rate. Employed OpenCV for facial detection and trained a Convolutional Neural Network (CNN) model to accurately identify instances of closed eyes and yawning in drivers, achieving an impressive accuracy rate of 98%.",
    tags: ["OpneCV", "Keras"],
    imageUrl: dd,
    githubLink: "https://github.com/NehaReddy77/Driver_Drowsiness_Detection",
    },
  {
    title: "Taxi Data Analytics",
    description:
    "Performed ETL on taxi trip record data by leveraging GCP VM Instance and loaded data into Google Big Query. Displayed dashboards demonstrating key performance indicators to analyze customer behavior, peak hours, traffic route optimization.",
    tags: ["Pandas", "GCP", "Big Query", "Maze Pipelines"],
    imageUrl: da,
    githubLink: "https://lookerstudio.google.com/reporting/2a3f946e-d4f6-4b87-af04-c344dc9824c4/page/mhAgD",
  },
  {
    title: "Food Donor Android App",
    description:
    "Designed an app seamlessly connecting food donors and recipients through dynamic location-based connectivity and seamless notification integration.",
    tags:["Kotlin", "Firebase", "Hilt and Dagger Dependency Injection"],
    imageUrl: fd,
    githubLink: "https://github.com/NehaReddy77/Food-Donor-Android-App",
  }
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
