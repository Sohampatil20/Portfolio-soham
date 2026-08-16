import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import herobg from "../assets/herobg.png";

const Hero = () => {
  return (
    <section
      className="relative w-full h-screen mx-auto overflow-hidden"
      style={{
        backgroundColor: "#050816",
      }}
    >
      {/* Background image */}
      <img
        src={herobg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        style={{
          zIndex: 0,
        }}
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(5,8,22,0.88), rgba(5,8,22,0.45), rgba(5,8,22,0.78))",
          zIndex: 1,
        }}
      />

      {/* Hero text */}
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
        style={{
          zIndex: 4,
        }}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white drop-shadow-lg`}>
            Hi, I&apos;m <span className="text-[#915EFF]">Soham</span>
          </h1>

          <p className={`${styles.heroSubText} mt-2 text-white-100 drop-shadow-md`}>
            AI & Full-Stack Developer building <br className="sm:block hidden" />
            web apps, backend APIs, and AI workflows
          </p>
        </div>
      </div>

      {/* 3D model */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 3,
          pointerEvents: "none",
        }}
      >
        <ComputersCanvas />
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center"
        style={{
          zIndex: 5,
        }}
      >
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
