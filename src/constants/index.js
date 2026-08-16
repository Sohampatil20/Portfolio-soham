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
    title: ".NET Backend Development",
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
    name: "HTML 5",
    icon: html,
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express JS",
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
    name: "Groq / OpenAI / Gemini",
    icon: creator,
  },
  {
    name: "LangGraph / LangChain",
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
      "Building a full-stack product using React, TypeScript, ASP.NET Core, SQL, backend APIs, dashboards, authentication flows, and AI-assisted workflows.",
      "Owning end-to-end development across UI components, backend APIs, database models, authentication, dashboards, and production bug fixes.",
      "Working with .NET backend services, SQL-based data models, role-based workflows, and production-ready frontend interfaces.",
      "Actively diving deeper into DevOps, cloud deployment, CI/CD, Docker, monitoring, and production infrastructure.",
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
      "Implemented escrow hold-release logic, role-based access control, transaction verification workflows, and payment integration flows.",
      "Developing production-ready user flows for clients, freelancers, payments, disputes, and admin review processes.",
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
      "Built AI Job Helper, an AI-powered job assistance platform for resume analysis, ATS optimization, skill-gap recommendations, and job-search support.",
      "Worked on AI/ML concepts, preprocessing, experimentation, model integration, and real-world AI case studies.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Soham consistently builds practical software products that combine full-stack development, AI workflows, and real-world problem solving.",
    name: "Project Review",
    designation: "Full-Stack AI Work",
    company: "Portfolio",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    testimonial:
      "His work shows strong hands-on experience across React, TypeScript, .NET, SQL, Supabase, cloud deployment, and AI-assisted systems.",
    name: "Technical Review",
    designation: "AI & Backend Systems",
    company: "Portfolio",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    testimonial:
      "Soham focuses on shipping complete products, not just demos — from UI and APIs to deployment, storage, authentication, and AI integration.",
    name: "Product Review",
    designation: "Software Projects",
    company: "Portfolio",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
  },
];

const projects = [
  {
    name: "Sohamfolio",
    description:
      "AI-powered portfolio builder that converts uploaded PDF resumes into editable, themed, and publishable personal portfolio websites using Next.js, Groq, Clerk, Supabase, and Vercel.",
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
      "A multi-agent RAG platform with document ingestion, chunking, Hugging Face embeddings, FAISS vector search, LangGraph orchestration, LLM inference, and SQLite-backed conversational memory.",
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
      "IEEE-published AWS cloud cost optimization and monitoring system using CloudWatch metrics, Cost Explorer API, FastAPI, Boto3, and a Flutter-based analytics dashboard.",
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
      "AI-powered job assistance platform for resume analysis, ATS optimization, skill-gap recommendations, and job-search support using Google Gemini API and Streamlit deployment.",
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
      "Secure freelancer escrow payments platform with hold-release payment logic, RBAC, transaction verification workflows, Supabase backend, and Razorpay payment integration.",
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
