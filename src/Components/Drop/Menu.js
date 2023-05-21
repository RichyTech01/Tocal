import { motion } from "framer-motion";
const Menu = () => {
    return ( 
        <motion.div
        initial={{opacity:0, y:-20}}
        animate={{opacity:1, y:0}}
        transition={{duration:0.3}}
         className="absolute left-0 right-0 bg-white">
            <motion.li
             initial={{opacity:0, y:-20}}
             animate={{opacity:1, y:0}}
             transition={{duration:0.5}}
             className="lg:hidden bg-white text-black flex flex-col space-y-9 h-[350px] items-center"> 
                <a href="" className="hover:underline visited:underline mt-8">Home</a>
                <a href="" className="hover:underline visited:mb-4">About</a>
                <a href="" className="hover:underline visited:mb-4">Our Service</a>
                <a href="" className="visited:mb-4 hover:underline">Become a Driver</a>
                <a href="" className="visited:mb-4 hover:underline">Contact</a>
           </motion.li>
    </motion.div>
     );
}
 
export default Menu;