import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.1, 0.6)}
      className="w-full min-w-0"
    >
      <Tilt
        options={{
          max: 20,
          scale: 1,
          speed: 400,
        }}
        className="w-full h-full"
      >
        <div className="bg-tertiary p-4 sm:p-5 rounded-2xl w-full h-full overflow-hidden">
          
          {/* PROJECT IMAGE */}
          <div
            className="
              relative
              w-full
              h-[180px]
              sm:h-[220px]
              rounded-2xl
              bg-[#0d0d16]
              border
              border-white/10
              flex
              items-center
              justify-center
              overflow-hidden
            "
          >
            <img
              src={image}
              alt={name}
              className="
                w-[85px]
                h-[85px]
                sm:w-[105px]
                sm:h-[105px]
                object-contain
              "
            />

            {/* LINK BUTTON */}
            <button
              type="button"
              onClick={() =>
                window.open(
                  source_code_link,
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              className="
                absolute
                top-3
                right-3
                black-gradient
                w-10
                h-10
                rounded-full
                flex
                justify-center
                items-center
                cursor-pointer
              "
            >
              <img
                src={github}
                alt="open project"
                className="w-1/2 h-1/2 object-contain"
              />
            </button>

            <p className="absolute bottom-4 left-4 text-secondary text-[10px] sm:text-[11px] uppercase tracking-[0.2em]">
              Featured Project
            </p>
          </div>

          {/* CONTENT */}
          <div className="mt-5">
            <h3 className="text-white font-bold text-[20px] sm:text-[23px] break-words">
              {name}
            </h3>

            <p className="mt-2 text-secondary text-[13px] sm:text-[14px] leading-[21px] sm:leading-[22px] break-words">
              {description}
            </p>
          </div>

          {/* TAGS */}
          <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1">
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[12px] sm:text-[13px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>

          {/* BUTTON */}
          <button
            type="button"
            onClick={() =>
              window.open(
                source_code_link,
                "_blank",
                "noopener,noreferrer"
              )
            }
            className="
              mt-5
              w-full
              py-3
              rounded-xl
              bg-black-100
              border
              border-white/10
              text-white
              text-[13px]
              font-semibold
              hover:border-[#915EFF]
              transition-all
            "
          >
            View Project ↗
          </button>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Selected work
        </p>

        <h2 className={styles.sectionHeadText}>
          Projects.
        </h2>
      </motion.div>

      <div className="w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="
            mt-3
            text-secondary
            text-[15px]
            sm:text-[17px]
            max-w-3xl
            leading-[25px]
            sm:leading-[28px]
          "
        >
          A selection of full-stack, AI, cloud, and production
          projects I have designed, built, and deployed.
        </motion.p>
      </div>

      {/* RESPONSIVE PROJECT GRID */}
      <div
        className="
          mt-10
          sm:mt-14
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          gap-6
          sm:gap-7
          w-full
          min-w-0
        "
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={`${project.name}-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
