import React from "react";
import { clamp, motion } from "framer-motion";
import GitHubIcon from "./GitHubIcon";

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
  return (
    <BackDrop onClick={handleClose}>
      <div className=" flex items-center justify-center w-full min-h-screen min-w-screen items-center justify-center">
        <motion.div
          initial={{ y: "-20%", opacity: 0 }}
          animate={{ y: "0", opacity: 1 }}
          exit={{ y: "20%", opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          style={{ width: clamp("50%", "600px", "90%") }}
          className="flex flex-col mb-10 mt-10 mx-6 rounded-md bg-foreground "
        >
          <img className="w-full aspect-[16/9]" src={project.imageUrl} />
          <h1 className="text-lg px-4 my-2">{project.title}</h1>
          <p className="text-xs px-4 text-copy-lighter">{project.skills}</p>
          <p className="text-xs px-4 mt-4" style={{ lineHeight: 2 }}>
            {project.description}
          </p>
          <p className="text-lg px-4 mt-6 font-black">
            Project Links
            <span
              className="text-primary text-2xl"
              style={{ lineHeight: 0.35 }}
            >
              .
            </span>
          </p>
          <a
            href={project.github}
            className="flex flex-row px-4 mt-2 group mb-8 items-center transition ease-in-out text-xs text-copy hover:text-primary-light gap-2"
          >
            <GitHubIcon className="transition ease-in-out fill-copy size-6 group-hover:fill-primary-light" />{" "}
            GitHub
          </a>
        </motion.div>
      </div>
    </BackDrop>
  );
};

export default Modal;
