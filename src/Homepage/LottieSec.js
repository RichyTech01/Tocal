import { motion } from "framer-motion";
const LottieSec = () => {
    return (
      <motion.div 
       initial={{opacity:0, x:-100}}
       animate={{opacity:1, x:0}}
       transition={{duration:1, ease:'easeInOut'}}
      className="max-w-[1000px] w-[95%] max-h-[100%] mx-auto sm:mt-[280px]">
        <img src="/Lottie.png" className="border border-black md:mt-0 rounded-[20px] xs:mt-[400px] px:mt-[330px]"/>
      </motion.div>
    );
  };
  
  export default LottieSec;
  