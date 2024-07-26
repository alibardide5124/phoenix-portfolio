import React from "react";
import { motion } from "framer-motion";

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipText = ({ children }) => {
  return (
    <motion.p
      initial="initial"
      whileHover="hover"
      className="relative block overflow-hidden whitespace-nowrap text-md font-black items-center flex text-[$(color)]"
      style={{
        lineHeight: 0.85
      }}
    >
      <div className="flex flex-row">
        {children.split("").map((char, index) => {
          return (
            <motion.span
              variants={{
                initial: { y: 0 },
                hover: { y: "-110%" },
              }}
              transition={{
                delay: STAGGER * index,
                ease: "easeInOut",
                duration: DURATION,
              }}
              className="inline-block"
              key={index}
            >
              {char}
            </motion.span>
          );
        })}
      </div>
      <div className="absolute inset-0 flex flex-row">
        {children.split("").map((char, index) => {
          return (
            <motion.span
              variants={{
                initial: { y: "110%" },
                hover: { y: 0 },
              }}
              transition={{
                delay: STAGGER * index,
                ease: "easeInOut",
                duration: DURATION,
              }}
              className="inline-block"
              key={index}
            >
              {char}
            </motion.span>
          );
        })}
      </div>
    </motion.p>
  );
};

export default FlipText;
