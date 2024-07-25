import React from "react";
import Reveal from "./utils/Reveal";
import SpotlightButtonWrapper from "./SpotlightButton";
import SpotlightButton from "./SpotlightButton";
import FlipText from "./FlipText";
import Social from "./Social";

function Intro() {
  return (
    <div className="overflow-hidden md:overflow-visible relative flex flex-col h-auto w-auto w-full h-screen pt-12 justify-center items-center">
      <div className="self-center max-h-lg w-full">
        <div className="relative">
          <div className="absolute  left-[45%] w-72 h-72 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-darken dark:mix-blend-lighten filter blur-xl opacity-50 animate-blob"></div>
          <div className="absolute  right-[45%] w-72 h-72 bg-yellow-300 dark:bg-yellow-900 rounded-full mix-blend-darken dark:mix-blend-lighten filter blur-xl opacity-50 animate-blob animation-delay-2000"></div>
          <div className="absolute left-[50%] w-72 h-72 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-darken dark:mix-blend-lighten filter blur-xl opacity-50 animate-blob animation-delay-4000"></div>
        </div>
      </div>
      <figure className="flex flex-col mx-auto w-11/12 bg-opacity-40 rounded-lg p-8 md:w-9/12 lg:w-6/12 mb-8 items-start md:mr-84">
        <div className="pt-6 text-center lg:text-left space-y-4 items-center">
          <Reveal>
            <p className="flex flex-wrap text-6xl items-center gap-4 font-black">
              Hey, I'm
              <span
                className="text-secondary items-center flex flex-row"
                style={{ lineHeight: 0.85 }}
              >
                <FlipText>Ali</FlipText>.
              </span>
            </p>
          </Reveal>
          <figcaption className="font-medium gap-1">
            <Reveal>
              <div className="text-xl text-black dark:text-white">
                <p>
                  I'm a{" "}
                  <span className="text-primary font-bold">
                    Mobile Developer
                  </span>
                </p>
              </div>
            </Reveal>
            <Reveal>
              <p className="text-start">
                a Computer Science student with over three years of experience
                as a freelance developer. Specialized in Android and Laravel
                development, and as always I'm enthusiastic about expanding my
                knowledge. I've worked on various application and contributed to
                open-source projects.
              </p>
            </Reveal>
          </figcaption>
        </div>
        <div className="left mt-4 ">
          <Reveal>
            <div className="min-w-[200px]">
              <a href="mailto:alibardide5124@gmail.com">
                <SpotlightButton>Contact Me</SpotlightButton>
              </a>
            </div>
          </Reveal>
        </div>
      </figure>
    </div>
  );
}

export default Intro;
