import React from "react";

function PortfolioItem({ title, imgUrl, stack, link }) {
    return (
        <a href={link} target='_blank' rel="noopener noreferrer" className="transition ease-in-out hover:scale-105 flex flex-row md:flex-col bg-stone-100 dark:bg-stone-800 rounded-md items-center justify-between overflow-hidden drop-shadow-md">
            <img src={imgUrl} alt="portfolio" className="w-1/3 md:w-full h-36 md:h-48 object-cover rounded-md cursor-pointer"/>
            <div className="w-3/4 md:w-full p-4 justify-start items-start md:justify-center">
                <h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold">{title}</h3>
                <p className="flex flex-wrap gap-2 flex-row items-center justify-start md:justify-center text-xs md:text-sm">
                    {stack.map(item => (
                        <span className="dark:text-white inline-block px-2 py-1 font-medium bg-stone-200 dark:bg-stone-700 rounded-md">
                            {item}
                        </span>
                    ))}
                </p>
            </div>
            <div></div>
        </a>
    )
}

export default PortfolioItem;