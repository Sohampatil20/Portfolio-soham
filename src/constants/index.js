import {
  mobile,
  backend,
  creator,
  web,
  typescript,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  shopify,
  tesla,
  starbucks,
  carrent,
  jobit,
  tripguide,
} from "../assets";

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
];

const services = [
  {
    title: "AI & Full-Stack Developer",
    icon: web,
  },
  {
    title: ".NET & Backend APIs",
    icon: backend,
  },
  {
    title: "AI Agents & RAG Systems",
    icon: creator,
  },
  {
    title: "DevOps & Cloud Deployment",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React",
    icon: reactjs,
  },
  {
    name: "Next.js",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node.js",
    icon: nodejs,
  },
  {
    name: "Express.js",
    icon: nodejs,
  },
  {
    name: "ASP.NET Core",
    icon: backend,
  },
  {
    name: "SQL Server",
    icon: backend,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Supabase",
    icon: backend,
  },
  {
    name: "AI / LLMs",
    icon: creator,
  },
  {
    name: "RAG / Agents",
    icon: creator,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "AI & Full-Stack Developer",
    company_name: "InstaLogic",
    icon: shopify,
    iconBg: "#383E56",
    date: "Apr 2026 - Present",
    points: [
      "Building production features using React, TypeScript, ASP.NET Core, SQL, backend APIs, dashboards, authentication flows, and AI-assisted workflows.",
      "Owning end-to-end development across UI components, backend APIs, database models, role-based workflows, and production bug fixes.",
      "Currently diving deeper into DevOps, cloud deployment, CI/CD, Docker, monitoring, and production infrastructure.",
    ],
  },
  {
    title: "Founder / Full-Stack Developer",
    company_name: "Escrowwall",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "2025 - Present",
    points: [
      "Building a secure freelancer escrow payments platform using React, Node.js, Supabase, and Razorpay.",
      "Implemented escrow hold-release logic, RBAC, transaction verification workflows, and payment integration flows.",
    ],
  },
  {
    title: "AI Intern",
    company_name: "SAKEC-ACM Student Chapter",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Jun 2025 - Jul 2025",
    points: [
      "Completed a 2-month internship focused on applications of Artificial Intelligence.",
      "Built AI Job Helper, an AI-powered platform for resume analysis, ATS optimization, skill-gap recommendations, and job-search support.",
    ],
  },
];

const testimonials = [];

const projects = [
  {
    name: "Sohamfolio",
    description:
      "AI-powered portfolio builder that converts PDF resumes into editable, themed, and publishable personal portfolio websites using Next.js, Groq, Clerk, Supabase, and Vercel.",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "Groq",
        color: "green-text-gradient",
      },
      {
        name: "Supabase",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://ai-portfolio-builder-vert.vercel.app",
  },
  {
    name: "AI Research Assistant",
    description:
      "Multi-agent RAG platform with document ingestion, chunking, embeddings, FAISS vector search, LangGraph orchestration, LLM inference, and SQLite-backed conversational memory.",
    tags: [
      {
        name: "RAG",
        color: "blue-text-gradient",
      },
      {
        name: "LangGraph",
        color: "green-text-gradient",
      },
      {
        name: "FAISS",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://research-agent-rag-1.onrender.com",
  },
  {
    name: "Serverless Cloud Cost Optimizer",
    description:
      "IEEE-published AWS cloud cost optimization and monitoring system using CloudWatch metrics, Cost Explorer API, FastAPI, Boto3, and a Flutter dashboard.",
    tags: [
      {
        name: "AWS",
        color: "blue-text-gradient",
      },
      {
        name: "FastAPI",
        color: "green-text-gradient",
      },
      {
        name: "Flutter",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://doi.org/10.1109/ICNTE66387.2026.11437513",
  },
  {
    name: "AI Job Helper",
    description:
      "AI-powered job assistance platform for resume analysis, ATS optimization, skill-gap recommendations, and job-search support using Google Gemini API and Streamlit.",
    tags: [
      {
        name: "Gemini",
        color: "blue-text-gradient",
      },
      {
        name: "Streamlit",
        color: "green-text-gradient",
      },
      {
        name: "AI",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://ai-job-helper.onrender.com",
  },
  {
    name: "Escrowwall",
    description:
      "Secure freelancer escrow payments platform with hold-release payment logic, RBAC, transaction verification workflows, Supabase backend, and Razorpay integration.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Supabase",
        color: "green-text-gradient",
      },
      {
        name: "Razorpay",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://escrowwall.online",
  },
  {
    name: "Fluent-flow",
    description:
      "Interactive language learning web application built with Next.js and TypeScript, focused on responsive UI, learning flows, and modern frontend development.",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "TypeScript",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://fluent-flow-production.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
