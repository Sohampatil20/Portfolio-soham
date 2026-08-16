import React from "react";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Technologies I work with</p>

        <h2 className={styles.sectionHeadText}>
          Tech Stack.
        </h2>
      </motion.div>

      <div className="mt-12 flex flex-row flex-wrap justify-center gap-8">
        {technologies.map((technology, index) => (
          <motion.div
            key={technology.name}
            variants={fadeIn("up", "spring", index * 0.05, 0.5)}
            className="
              group
              w-[110px]
              h-[120px]
              bg-tertiary
              rounded-2xl
              flex
              flex-col
              justify-center
              items-center
              gap-3
              border
              border-white/10
              hover:border-[#915EFF]/70
              hover:-translate-y-2
              transition-all
              duration-300
              shadow-card
            "
          >
            <div className="w-[58px] h-[58px] flex justify-center items-center">
              <img
                src={technology.icon}
                alt={technology.name}
                className="
                  w-full
                  h-full
                  object-contain
                  group-hover:scale-110
                  transition-transform
                  duration-300
                "
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
            </div>

            <p className="text-white text-[11px] font-medium text-center px-2">
              {technology.name}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
