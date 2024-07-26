import React, { useRef } from "react";
import timeline from "../data/timeline";
import {
  AnimatePresence,
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import Reveal from "./utils/Reveal";

function Timeline() {
  return (
    <div className="flex flex-col w-full justify-center items-center my-20">
      <div className="flex flex-col w-full md:w-9/12 justify-center mx-4">
        <div className="flex flex-row w-full items-center justify-between">
          <Reveal>
            <p className="font-black text-4xl">
              Experiece
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
        {timeline.map((item, index) => (
          <div key={index} className="mx-4 w-9.12">
            <TimelineItem
              year={item.year}
              title={item.title}
              duration={item.duration}
              details={item.details}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function TimelineItem({ year, title, duration, details }) {
  const targetRef = useRef(null);
  const isInView = useInView(targetRef, {
    once: true,
    margin: "0px 0px -15% 0px",
    amount: "all",
  });

  return (
    <motion.div
      layout
      ref={targetRef}
      className="relative flex items-center justify-center rounded-md border-dashed border-2 border-[#212121] dark:border-[#FAFAFA] w-full my-6 min-h-48"
    >
      <AnimatePresence>
        {isInView && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="p-4">
              <div className="left flex flex-row gap-2 items-center">
                <Reveal>
                  <p className="rounded-md font-bold bg-primary text-primary-content text-4xl p-1">
                    {year}
                  </p>
                </Reveal>
                <Reveal>
                  <p className="text-2xl font-bold">{title}</p>
                </Reveal>
              </div>
              <Reveal>
                <p className="ms-6 mt-2 text-md">{details}</p>
              </Reveal>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {!isInView && <motion.p className="absolute text-4xl">?</motion.p>}
      </AnimatePresence>
    </motion.div>
  );
}

export default Timeline;
