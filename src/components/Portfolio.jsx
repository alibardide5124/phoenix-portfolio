import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import portfolio from "../data/portfolio";
import Reveal from "./utils/Reveal";
import StarIcon from "./utils/StarIcon";
import ForkIcon from "./utils/ForkIcon";

function Portfolio({ onClickProject }) {
  return (
    <div className="w-full md:w-9/12 p-8 md:p-0 items-center mx-auto justify-center text-center">
      <div className="flex flex-row items-center justify-between">
        <Reveal>
          <p className="font-black text-4xl">
            Projects
            <span
              className="text-primary text-6xl"
              style={{ lineHeight: 0.35 }}
            >
              .
            </span>
          </p>
        </Reveal>
        <div className="grow h-px ml-6 bg-gray-500" />
      </div>
      <div className="flex flex-col tems-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {portfolio.map((project, index) => (
            <div key={index}>
              <PortfolioItem
                title={project.title}
                year={project.year}
                imageUrl={project.imageUrl}
                github={project.github}
                repo={project.repo}
                skills={project.skills}
                summary={project.summary}
                onClickItem={() => { onClickProject(project) }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PortfolioItem({ title, year, imageUrl, github, repo, skills, summary, onClickItem }) {
  const githubIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      className="transition ease-in-out fill-copy size-6 group-hover:fill-black"
      viewBox="0 0 24 24"
    >
      <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
    </svg>
  );

  const imageVariant = {
    initial: { rotate: 0, scale: 1 },
    animate: { rotate: 2, scale: 1.1 },
  };
  return (
    <motion.div
      initial={{
        y: "20%",
        opacity: "0",
      }}
      whileInView={{
        y: "0",
        opacity: "1",
      }}
      viewport={{
        amount: "some",
        once: true,
      }}
      className="flex flex-col justify-start w-full p-2"

    >
      <motion.div
        initial="initial"
        whileHover="animate"
        className="hidden md:block relative overflow-hidden aspect-[16/9] my-4 mx-2 w-full rounded-md bg-border cursor-pointer"
        onClick={onClickItem}
      >
        <motion.div variants={imageVariant} className="px-10 absolute start-0 pt-10 y-20 rounded-md object-cover overflow-hidden">
          <img
            src={imageUrl}
          />
        </motion.div>
        <div className="flex flex-col absolute bottom-0 start-0 m-2 gap-1">
          <ProjectMetaData repo={repo} />
          <p className="bg-white drop-shadow-lg text-black text-md rounded-md px-2 py-1">&copy; {year}</p>
        </div>
      </motion.div>
      <div
        initial="initial"
        whileHover="animate"
        className="md:hidden relative overflow-hidden aspect-[16/9] my-4 mx-2 w-full cursor-pointer"
        onClick={onClickItem}
      >
        <motion.div variants={imageVariant} className="px-10 pt-10 y-20 rounded-md object-cover overflow-hidden">
          <img
            src={imageUrl}
          />
        </motion.div>
        <div className="flex flex-col absolute bottom-0 start-0 m-2 gap-1">
          <ProjectMetaData repo={repo} />
          <p className="bg-white drop-shadow-md text-black text-md rounded-md px-2 py-1">&copy; {year}</p>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between">
        <Reveal>
          <p className="font-black text-md truncate ">{title}</p>
        </Reveal>
        <div className="grow h-px mx-2 bg-gray-500" />
        <Reveal>
          <a href={github} target="_blank" rel="noopener noreferrer" className="flex flex-row  group transition ease-in-out rounded-md items-center justify-center p-1 border-2 border-white hover:bg-white cursor-pointer">
            {githubIcon} <p className="ps-1 transition ease-in-out group-hover:text-black text-md font-medium">GitHub</p>
          </a>
        </Reveal>
      </div>
      <Reveal>
        <div className="flex flex-wrap px-2  gap-2 overflow-visible">
          {skills.map((item, index) => (
            <div key={index} className="rounded-md p-2 bg-border">
              <p className="text-xs">{item}</p>
            </div>
          ))}
        </div>
      </Reveal>
      <Reveal>
        <p className="text-md text-start">
          {summary}.{" "}
          <span className="text-copy-lighter cursor-pointer" onClick={onClickItem}>
            Learn More &gt;
          </span>
        </p>
      </Reveal>
    </motion.div>
  );
}

function ProjectMetaData({ year, repo }) {
  const [repoData, setRepoData] = useState({});

  useEffect(() => {
    fetch(`https://api.github.com/repos/alibardide5124/${repo}`)
      .then(response => response.json())
      .then(data => setRepoData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, [repo]);

  return (
    <div className="flex flex-column gap-1" >
      <p className="bg-white drop-shadow-lg text-black text-md rounded-md px-2 py-1"><StarIcon className="size-5 stroke-black fill-black"/> {repoData.stargazers_count}</p>
      <p className="bg-white drop-shadow-lg text-black text-md rounded-md px-2 py-1"><ForkIcon className="size-5 fill-black" /> {repoData.forks_count}</p>
    </div>
  );

};

export default Portfolio;
