import React from "react";
import { clamp, motion } from "framer-motion";

const BackDrop = ({ children, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClick}
      className=" fixed top-0 left-0 z-50 overflow-scroll h-screen w-screen bg-background bg-opacity-30"
    >
      {children}
    </motion.div>
  );
};

const Modal = ({ project, handleClose }) => {
  const github = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      className="transition ease-in-out fill-copy size-6 group-hover:fill-primary-light"
      viewBox="0 0 24 24"
    >
      <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
    </svg>
  );

  return (
    <BackDrop onClick={handleClose}>
      <div className=" flex items-center justify-center w-full">
      <motion.div
        initial={{ y: "-20%", opacity: 0 }}
        animate={{ y: "0", opacity: 1 }}
        exit={{ y: "20%", opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        style={{ width: clamp("50%", "600px", "90%") }}
        className="flex flex-col mb-10 mt-10 rounded-md bg-foreground"
      >
        <img className="round-full w-full" src={project.imageUrl} />
        <h1 className="text-lg px-4 my-2">{project.title}</h1>
        <p className="text-xs px-4 text-copy-lighter">{project.skills}</p>
        <p className="text-xs px-4 mt-4" style={{ lineHeight: 2 }}>
          {project.description}
        </p>
        <p className="text-lg px-4 mt-6 font-black">
          Project Links
          <span className="text-primary text-2xl" style={{ lineHeight: 0.35 }}>
            .
          </span>
        </p>
        <a
          href={project.github}
          className="flex flex-row px-4 mt-2 group mb-8 items-center transition ease-in-out text-xs text-copy hover:text-primary-light gap-2"
        >
          {github} GitHub
        </a>
      </motion.div>
      </div>
    </BackDrop>
  );
};

export default Modal;
