import React from "react";
import { motion } from "framer-motion";
const Nav = () => {

    return ( 
        <motion.div 
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y:0 }}
            transition={{ duration: 0.8, ease:"easeInOut" }}
            className="mb-4 sm:mb-0 sticky top-0 z-50 bg-white w-full border-gray-100 py-3 px-1 md:p-8"
       >
        <nav className="nav-Container flex mx-auto justify-between ">
            <div className="flex items-center">
                <img src="/tocalLogo.png" className="first-Head-Logo" />
                <img src="/tocal.png" className="Second-Head-Logo ml-1"/>
            </div>
            <div className="flex items-center gap-3 ">
                <li className="hidden lg:block space-x-9 text-base font-normal "> 
                    <a href="" className="hover:underline visited:underline">Home</a>
                    <a href="" className="hover:underline visited:mb-4">About</a>
                    <a href="" className="hover:underline visited:mb-4">Our Service</a>
                    <a href="" className="visited:mb-4 hover:underline">Become a Driver</a>
                    <a href="" className="visited:mb-4 hover:underline">Contact</a>
                </li>
            <motion.div
              initial={{scale:0.9}}
              animate={{scale:0.9}}
                className="hidden lg:block transition duration-500 ease-in-out"
            >
                <a href="" className="Book-Flight-btn  flex items-center text-white font-meduim hover:bg-white hover:text-blue-600 transition ease-in-out duration-500 hover:shadow-lg">Book a Free Pilot <span className="ml-3 arrow top-0  transform -translate-x-1/2 transform-origin-center animate-arrow-animation">→</span></a>
            </motion.div>
            <button id="mobile-open-button" className="text-4xl lg:hidden focus:outline-none">
                &#9776;
            </button>
            </div>
        </nav>
        </motion.div>

     );
}
 
export default Nav;