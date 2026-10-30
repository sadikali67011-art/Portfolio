import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";
import {
  FaBriefcase,
  FaCarSide,
  FaCode,
  FaComments,
  FaDatabase,
  FaGraduationCap,
  FaLayerGroup,
  FaLightbulb,
  FaMobileAlt,
  FaProjectDiagram,
  FaSchool,
  FaServer,
  FaUsers,
} from "react-icons/fa";
import {
  SiCss3,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiVisualstudiocode,
} from "react-icons/si";

export const profileLink = "https://www.linkedin.com/in/sadik-ali-75a539294/";
export const repoLink = "https://github.com/sadikali67011-art";
export const callToAction = profileLink;

export const navLinks = [
  { id: "skills", title: "Skills & Experience" },
  { id: "education", title: "Education" },
  { id: "projects", title: "Projects" },
  { id: "certifications", title: "Certifications" },
  { id: "strengths", title: "Strengths & Hobbies" },
  { id: "contactMe", title: "Contact" },
];

export const educationList = [
  {
    id: "education-mca",
    icon: FaGraduationCap,
    title: "I.F.T.M. University, Moradabad",
    degree: "Master of Computer Applications (MCA)",
    duration: "2026 – 2028",
    content1: "",
  },
  {
    id: "education-1",
    icon: FaGraduationCap,
    title: "Teerthanker Mahaveer University, Moradabad",
    degree: "Bachelor of Computer Applications (BCA) — Mobile Application and Web Technology",
    duration: "2023 – 2026",
    content1: "",
  },
  {
    id: "education-2",
    icon: FaSchool,
    title: "M M S S V M I C, Madha, Sambhal",
    degree: "12th Standard — UP Board",
    duration: "2022",
    content1: "",
  },
  {
    id: "education-3",
    icon: FaSchool,
    title: "D S M Inter College",
    degree: "10th Standard — UP Board",
    duration: "2020",
    content1: "",
  },
];

export const skills = [
  {
    title: "Front-End",
    items: [
      { id: "frontend-1", icon: SiHtml5, name: "HTML5" },
      { id: "frontend-2", icon: SiCss3, name: "CSS3" },
      { id: "frontend-3", icon: SiJavascript, name: "JavaScript" },
      { id: "frontend-4", icon: SiReact, name: "React.js" },
      { id: "frontend-5", icon: FaMobileAlt, name: "Responsive Design" },
    ],
  },
  {
    title: "Back-End",
    items: [
      { id: "backend-1", icon: FaServer, name: "Node.js" },
      { id: "backend-2", icon: SiExpress, name: "Express.js" },
      { id: "backend-3", icon: FaBriefcase, name: "RESTful APIs" },
    ],
  },
  {
    title: "Languages & Databases",
    items: [
      { id: "language-1", icon: FaCode, name: "Java" },
      { id: "language-2", icon: SiPython, name: "Python" },
      { id: "language-3", icon: SiJavascript, name: "JavaScript" },
      { id: "language-4", icon: FaDatabase, name: "SQL" },
      { id: "language-5", icon: SiPostgresql, name: "PostgreSQL" },
    ],
  },
  {
    title: "Tools & Platforms",
    items: [
      { id: "tools-1", icon: SiGit, name: "Git" },
      { id: "tools-2", icon: SiGithub, name: "GitHub" },
      { id: "tools-3", icon: SiVisualstudiocode, name: "VS Code" },
      { id: "tools-4", icon: SiPostman, name: "Postman" },
    ],
  },
  {
    title: "Core Concepts",
    items: [
      { id: "concepts-1", icon: FaLayerGroup, name: "PERN Stack" },
      { id: "concepts-2", icon: FaDatabase, name: "DBMS" },
      { id: "concepts-3", icon: FaProjectDiagram, name: "OOP" },
      { id: "concepts-4", icon: FaBriefcase, name: "DSA Basics" },
    ],
  },
  {
    title: "Soft Skills",
    items: [
      { id: "soft-1", icon: FaUsers, name: "Teamwork" },
      { id: "soft-2", icon: FaComments, name: "Communication" },
      { id: "soft-3", icon: FaLightbulb, name: "Problem Solving" },
    ],
  },
];

export const experiences = [
  {
    organisation: "CETPA",
    positions: [
      {
        title: "Web Developer Intern",
        duration: "June 2025 – November 2025 (6 months)",
        content: [
          {
            text: "Worked as part of the development team building and maintaining web-based applications.",
          },
          {
            text: "Gained practical, industry-oriented experience across the full web development lifecycle.",
          },
        ],
      },
    ],
  },
];

export const projects = [
  {
    id: "project-motor-doctor",
    title: "Motor Doctor — Vehicle Service Website",
    icon: FaCarSide,
    content:
      "A full-stack platform for vehicle service and maintenance management, with responsive, user-friendly interfaces built using HTML, CSS, and JavaScript.",
    stack: [
      { id: "motor-html", icon: SiHtml5, name: "HTML5" },
      { id: "motor-css", icon: SiCss3, name: "CSS3" },
      { id: "motor-js", icon: SiJavascript, name: "JavaScript" },
    ],
  },
  {
    id: "project-hunt-job",
    title: "Hunt Job — Job Portal Website",
    icon: FaBriefcase,
    content:
      "A full-stack job portal connecting job seekers with employers, with job search, application, and profile management features.",
    stack: [
      { id: "hunt-react", icon: SiReact, name: "React.js" },
      { id: "hunt-node", icon: FaServer, name: "Node.js" },
      { id: "hunt-db", icon: FaDatabase, name: "Database" },
    ],
  },
];

export const extraCurricular = [
  {
    id: "cert-ibm-ai",
    title: "Artificial Intelligence for Intermediate",
    organisation: "IBM",
    duration: "2026",
  },
  {
    id: "cert-computers",
    title: "Introduction to Computers",
    organisation: "Spoken Tutorial, IIT Bombay",
    duration: "2024",
  },
  {
    id: "cert-java",
    title: "Java Programming",
    organisation: "NPTEL",
    duration: "2025",
  },
  {
    id: "cert-soft-skills",
    title: "Soft Skills for IT Professionals",
    organisation: "Great Learning Academy",
    duration: "2024",
  },
];

export const socialMedia = [
  {
    id: "linkedin",
    icon: AiFillLinkedin,
    link: profileLink,
    label: "LinkedIn",
  },
  {
    id: "github",
    icon: AiFillGithub,
    link: repoLink,
    label: "GitHub",
  },
  {
    id: "email",
    icon: AiFillMail,
    link: "mailto:sadikali7011@gmail.com",
    label: "Email",
  },
];

export const aboutMe = {
  name: "Sadik Ali",
  githubUsername: "sadikali7011-art",
  tagLine: "Software Developer",
  intro:
    "Software Developer and BCA student with hands-on experience building responsive front-end interfaces and functional back-end systems. Skilled in React.js, HTML, CSS, JavaScript, Node.js, Java, Python, and SQL.",
  careerObjective:
    "Motivated BCA student and Software Developer with hands-on experience building responsive front-end interfaces using React.js and functional back-end systems using HTML, CSS, JavaScript, Node.js, Java, Python, and SQL. Skilled in designing, developing, and deploying end-to-end web applications, with a strong foundation in PostgreSQL, version control, and problem-solving. Eager to contribute to innovative projects and deliver real value to the organization.",
  location: "Sambhal, Uttar Pradesh",
};

export const itemsToFetch = 20;
export const includedRepos = [];
