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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Mobile App Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Student 3RD year",
      icon: creator,
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
      name: "Redux Toolkit",
      icon: redux,
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
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
   
    {
      title: "Web Development",
      company_name: "Done",
      icon: shopify,
      iconBg: "#383E56",
      date: "2024",
      points: [
        "Understanding the fundamentals of HTML, CSS, and JavaScript to build interactive web pages.",
        "Exploring responsive design principles to ensure websites look great on all devices.",
        "Developing skills in debugging and optimizing web applications for performance and compatibility.",
        "Developing and maintaining web applications using React.js and other related technologies."
      
        
      ],
    },
   
    {
      title: "MERN Stack Development",
      company_name: "50% There",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: " Dec-2024",
      points: [
        "Built full-stack web applications using MongoDB, Express.js, React.js, and Node.js.",
        "Learned how to design and manage databases with MongoDB, including CRUD operations and aggregation.",
        "Understanded server-side development with Node.js and Express.js to build RESTful APIs.",
        "Learned how to integrate the front-end and back-end for seamless functionality.",
        "Gained insights into deploying applications on cloud platforms like Vercel, Firebase, Render",
      ],
    },
    
   
    
    {
      title: "System Design",
      company_name: "studying",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2025 - Present",
      points: [
        "Mastering the principles of designing scalable, reliable, and maintainable systems for high-traffic applications.",
        "Developing expertise in breaking down complex systems into modular components using microservices architecture.",
        "Implementing database design strategies, including normalization, denormalization, and distributed database systems like NoSQL and SQL.",
        "Understanding the importance of load balancing, caching strategies, and fault-tolerant systems to enhance performance and reliability.",
        "Evaluating trade-offs between consistency, availability, and partition tolerance (CAP theorem) when designing distributed systems.",
        
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
      name: "Fluent-flow",
      description:
        "A interactive and advanced language learning website and a Web App using NextJS and Typescript",
      tags: [
        {
          name: "NextJS",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind/Zustand",
          color: "green-text-gradient",
        },
        {
          name: "TypeScript",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://fluent-flow-production.vercel.app/",
    },
    {
      name: "AUTH page",
      description:
        "Auth page is best for any project,contains features like JWT Authentication cookie-parsing Profile creation Different themes Best and UI and Technolgies like MERN stack DaisyUI TailwindCSS",
      tags: [
        {
          name: "MERN",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
        {
          name: "React/Vite",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://mern-auth-henna.vercel.app",
    },
    // {
    //   name: "Trip Guide",
    //   description:
    //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    //   tags: [
    //     {
    //       name: "nextjs",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "supabase",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "css",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: tripguide,
    //   source_code_link: "https://github.com/",
    // },
  ];
  
  export { services, technologies, experiences, testimonials, projects };