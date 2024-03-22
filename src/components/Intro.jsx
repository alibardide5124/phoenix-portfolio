import React from "react";

function Intro() {
    return (
        // <div className="flex flex-col md:flex-row w-full md:w-7/12 bg-slate-100 dark:bg-slate-900 items-center justify-center flex-col text-center pt-6 pb-12">
        //     <img src="https://images.unsplash.com/photo-1710756115964-f949e92b97fb?q=80&w=1356&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="rounded-lg w-auto h-auto" />
        //     <div>
        //         <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Ali Bardide</h1>
        //         <p className="text-base md:text-xl mb-3 font-medium">Software Engineer & Mobile Developer</p>
        //         <p className="text-sm max-w-xl mb-6">This is my entire bio {' '} <a href="https://youtube.com/@AliBardide" target="_blank" className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600" rel="noreferrer noopener">YouTube Channel</a></p>
        //     </div>
        // </div>
        <div className="flex flex-col w-full h-auto mx-auto pt-12 justify-between items-center md:pt-[15%]">
        <figure class="flex flex-col md:flex-row bg-slate-100 rounded-md p-8 md:p-0 dark:bg-slate-800 w-full md:w-8/12 mb-8 items-center">
        <img class="w-9/12 h-auto md:w-48 md:h-auto md:rounded-md rounded-3xl mx-auto md:mx-0" src="https://images.unsplash.com/photo-1710756115964-f949e92b97fb?q=80&w=1356&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
            <p class="text-6xl font-medium">
                Ali Bardide
            </p>
            <figcaption class="font-medium">
            <div class="text-xl text-slate-800 dark:text-slate-200">
                Software Engineer & Mobile Developer
            </div>
            <div class="text-slate-700 dark:text-slate-400">
            Indie developer & content creator passionate about Android development!  See my projects on GitHub and learn more on my YouTube channel.
            </div>
            </figcaption>
        </div>
        </figure>
        </div>
    )
}

export default Intro;