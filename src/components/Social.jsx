import React from "react";
import FlipLink from "./FlipLink";
import GitHubIcon from "./utils/GitHubIcon";
import LinkedinIcon from "./utils/LinkedinIcon";
import YouTubeIcon from "./utils/YouTubeIcon";

const Social = () => {
  const iconsClass =
    "transition ease-in-out opacity-70 hover:opacity-100 hover:scale-110 fill-stone-900 dark:fill-stone-200 size-6 cursor-pointer";

  return (
    <div className="flex flex-row justify-center gap-2 md:gap-4 items-center">
      <div className="flex space-x-4 md:px-4">
        <div className="hidden md:block h-full mt-2 md:mt-0">
          <div className="flex flex-row items-center gap-2">
            <FlipLink href="https://github.com/alibardide5124">GITHUB</FlipLink>
            <FlipLink href="https://linkedin.com/in/alibardide">
              LINKEDIN
            </FlipLink>
            <FlipLink href="https://youtube.com/@AliBardide">YOUTUBE</FlipLink>
          </div>
        </div>
        <div className="md:hidden h-full flex flex-row items-center justify-center mt-2 md:mt-0 gap-2">
          <a href="https://github.com/alibardide5124"><GitHubIcon className={iconsClass} /></a>
          <a href="https://linkedin.com/in/alibardide"><LinkedinIcon className={iconsClass} /></a>
          <a href="https://youtube.com/@AliBardide"><YouTubeIcon className={iconsClass} /></a>
        </div>
      </div>
      <a
        href="https://cvresume.ir/r/DuXe7dbv-E_tRD8CZq7KGA"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm transition ease-in-out rounded-md items-center justify-center py-2 px-4 font-bold text-primary-content border-2 border-primary hover:bg-primary cursor-pointer"
      >
        My Resume
      </a>
    </div>
  );
};

export default Social;
