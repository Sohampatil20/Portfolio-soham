import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>ABOUT.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-white text-[20px] max-w-3xl leading-[30px]'
      >
       I am an AI & Full-Stack Developer currently working with React,
  TypeScript, ASP.NET Core, SQL, backend APIs, dashboards, authentication
  flows, database models, and AI-assisted workflows. I build practical
  software products end to end — from UI and API development to database
  design, AI integration, deployment, and production debugging. I&apos;m also
  actively diving deeper into DevOps, cloud deployment, CI/CD, Docker,
  monitoring, and production infrastructure to build more reliable and
  scalable systems.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
