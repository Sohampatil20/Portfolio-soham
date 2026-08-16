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
      variants={fadeIn(
        "up",
        "spring",
        index * 0.15,
        0.65
      )}
    >
      <Tilt
        options={{
          max: 25,
          scale: 1.02,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full"
      >
        {/* PROJECT IMAGE */}
        <div
          className="
            relative
            w-full
            h-[230px]
            rounded-2xl
            bg-[#0d0d16]
            border
            border-white/10
            flex
            justify-center
            items-center
            overflow-hidden
          "
        >
          <img
            src={image}
            alt={`${name} project`}
            className="
              w-[105px]
              h-[105px]
              object-contain
              opacity-90
              transition-all
              duration-300
              hover:scale-110
            "
          />

          {/* OPEN PROJECT */}
          <div className="absolute top-3 right-3">
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
                black-gradient
                w-11
                h-11
                rounded-full
                flex
                justify-center
                items-center
                cursor-pointer
                hover:scale-110
                transition-transform
              "
              aria-label={`Open ${name}`}
            >
              <img
                src={github}
                alt="open project"
                className="w-1/2 h-1/2 object-contain"
              />
            </button>
          </div>

          {/* PROJECT NAME OVER IMAGE */}
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-secondary text-[11px] uppercase tracking-[0.25em]">
              Featured Project
            </p>
          </div>
        </div>

        {/* TEXT */}
        <div className="mt-5">
          <h3 className="text-white font-bold text-[23px]">
            {name}
          </h3>

          <p className="mt-2 text-secondary text-[14px] leading-[22px]">
            {description}
          </p>
        </div>

        {/* TAGS */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[13px] ${tag.color}`}
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
            py-2.5
            rounded-xl
            bg-black-100
            border
            border-white/10
            text-white
            text-[13px]
            font-semibold
            hover:border-[#915EFF]
            hover:bg-[#211a40]
            transition-all
            duration-300
          "
        >
          View Project ↗
        </button>
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

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="
            mt-3
            text-secondary
            text-[17px]
            max-w-3xl
            leading-[28px]
          "
        >
          A selection of full-stack, AI, cloud, and
          production projects I have designed, built, and
          deployed.
        </motion.p>
      </div>

      <div className="mt-14 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
