import React from "react";
import Title from "./Title";

function Contact() {
    return (
        <div className="flex flex-col mb-10 mx-auto">
            <div className="flex justify-center items-center">
                <form action="https://getform.io/f/paoxgwvb" method="post" className="flex flex-col w-full md:w-7/12">
                    <Title>Contact</Title>
                    <input type="text" name="name"  placeholder="Name" className="transition ease-in-out p-2 bg-transparent border-2 focus:border-blue-500 rounded-md focus:outline-none hover:border-blue-300" />
                    <input type="text" name="email"  placeholder="Email" className="transition ease-in-out my-2 p-2 bg-transparent border-2 focus:border-blue-500 rounded-md focus:outline-none hover:border-blue-300" />
                    <textarea name="message" placeholder="Messsage" rows="10" className="transition ease-in-out p-2 mb-4 border-2 focus:border-blue-500 bg-transparent rounded-md focus:outline-none hover:border-blue-300"/>
                    <button type="submit" className="text-center justify-end inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-blue-500 drop-shadow-md hover:stroke-white transition ease-in-out hover:bg-violet-500 hover:scale-110 mx-auto">Work With Me</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;