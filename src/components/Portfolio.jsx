import React from "react";
import portfolio from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";

function Portfolio() {
    const github = (
        <svg 
        xmlns="http://www.w3.org/2000/svg" 
        x="0px" 
        y="0px" 
        class="fill-stone-200 dark:fill-stone-800 w-6 h-6 cursor-pointer"
        viewBox="0 0 24 24">
            <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
        </svg>
    )
    const googlePlay = (
        <svg 
        xmlns="http://www.w3.org/2000/svg" 
        x="0px" 
        y="0px" 
        class="fill-stone-200 w-6 h-6 cursor-pointer"
        viewBox="0 0 24 24">
            <path d="M 5.4160156 2.328125 L 13.296875 10.535156 L 15.626953 8.109375 C 11.611953 5.838375 6.3020156 2.834125 5.4160156 2.328125 z M 3.140625 2.8476562 C 3.055625 3.0456562 3 3.2629063 3 3.5039062 L 3 20.591797 C 3 20.788797 3.044375 20.970625 3.109375 21.140625 L 11.910156 11.978516 L 3.140625 2.8476562 z M 17.423828 9.1269531 L 14.683594 11.978516 L 17.402344 14.810547 C 19.071344 13.865547 20.226562 13.210937 20.226562 13.210938 C 20.725562 12.907937 21.005047 12.441594 20.998047 11.933594 C 20.991047 11.438594 20.702609 10.981938 20.224609 10.710938 C 20.159609 10.673937 19.031828 10.035953 17.423828 9.1269531 z M 13.296875 13.423828 L 5.4746094 21.566406 C 6.8216094 20.800406 11.797469 17.982172 15.605469 15.826172 L 13.296875 13.423828 z" />
        </svg>
    )
    return (
        <div className="w-full items-center justify-center text-center">
            <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {portfolio.map(project => (
                    <PortfolioItem
                        imgUrl={project.imgUrl}
                        title={project.title}
                        stack={project.stack}
                        link={project.link}
                    />
                ))}
            </div>
            </div>
            <h3 className="mt-6 md:mt-12 mx-4 text-lg md:text-xl font-bold">Intrested to see more projects? Check out my GitHub</h3>
            <div className="flex flex-col md:flex-row mt-5 md:mt-8 items-center justify-center">
                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                    <div className="transition ease-in-out hover:scale-110 flex flex-row rounded-md px-4 py-2 bg-stone-800 hover:bg-stone-700 dark:bg-stone-200 dark:hover:bg-stone-300 items-center justify-around inline-block  cursor-pointer w-auto">
                        {github}
                        <h5 className="px-2 text-stone-200 dark:text-stone-800">Github</h5>
                    </div>
                    {/* <div className="transition ease-in-out hover:scale-110 flex flex-row rounded-md px-4 py-2 bg-green-800 hover:bg-green-700 items-center justify-around inline-block  cursor-pointer w-auto">
                        {googlePlay}
                        <h5 className="px-2 text-stone-200">Google Play</h5>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Portfolio;