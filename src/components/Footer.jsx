import React from "react";

function Footer() {
    return (
        <div className="flex py-5 justify-center w-full">
            <p className="text-sm opacity-50">
                &copy; {new Date().getFullYear} Made with &#10084; by Ali Bardide.
            </p>
        </div>
    )
}

export default Footer;