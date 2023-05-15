import { motion } from "framer-motion";
const Hero = () => {
    return ( 
        <main className="mx-auto mt-10 sm:mt-24">
        <div className="First-HomePage-Article flex flex-col justify-center m-auto relative space-y-8 height-[100%]">
        <motion.h2
        initial={{opacity:0, y:100}}
        animate={{opacity:1, y:0}}
        transition={{duration:0.7, ease:'easeInOut'}}
         className="Making-hyperlocal font-bold mx-auto max-w-[744px] w-[95%] relative h-[100%] text-[40px] md:text-[48px] sm:max-w-[954px] sm:w-[90%] xs:max-w-[500px] xs:w-[98%] sm:mt-0 ">Making hyperlocal & last-mile deliveries cost-efficient and <span className="text-blue-600">electrifying</span>⚡️</motion.h2>
            
        <motion.p
         initial={{opacity:0, y:100}}
         animate={{opacity:1, y:0}}
         transition={{duration:0.8, ease:'easeInOut'}}
         className="At-Local-p text-base mx-auto font-light  max-w-[883px] w-[88%] relative isolate md:w-[80%] sm:w-[90%] ">At TOCAL, we specialise in hyperlocal and last-mile delivery services. Our platform offersa dedicated fleet of delivery executives equipped with EVs, providing fast and efficient delivery solutions for a range of businesses, including quick-commerce, e-commerce, D2C, online and offline retail companies, SMEs, and more.</motion.p>
    
        <div className="HomePage-Buttons flex-row items-center mx-auto isolate">
          <motion.button 
          whileHover={{scale:0.9}}
          whileTap={{scale:0.7}}
          className="First-Button-Contact text-pink-600 font-medium hover:text-white hover:rounded-full hover:bg-pink-600 transition ease-in-out duration-500 hover:shadow-lg">Contact Us</motion.button>
          <motion.button
           whileHover={{scale:0.9}}
           whileTap={{scale:0.7}}
           className="hover:shadow-lg max-w-[159px] w-[100%] h-[52px] font-medium Second-Button-Learn flex flex-row items-center font-base bg-blue-600 text-blue-600  rounded-full hover:bg-white hover:text-blue-600 transition ease-in-out duration-500 ">Learn more →</motion.button>
        </div>
      </div>
    </main>
    
     );
}
 
export default Hero;