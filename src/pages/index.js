import Nav from "@/Homepage/Nav";
import Hero from "@/Homepage/Hero";
import LottieSec from "@/Homepage/LottieSec";
import AboutUs from "@/Homepage/AboutUs";
import OurService from "@/Homepage/OurService";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";
import Head from "next/head";
       const index = () => {
            const { ref, inView } = useInView();
            const controls = useAnimation();
          
            React.useEffect(() => {
              if (inView) {
                controls.start("visible");
              }
            }, [controls, inView]);
          
            const variants = {
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 1, ease: "easeOut" },
              },
          
            }
  
    return ( 
      <motion.div 
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={variants}
            className="All-Cont mx-auto isolate "
          >
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          </Head>
              <Nav/>
              <Hero/> 
              <LottieSec/>
              <AboutUs/>
              <OurService/>
      </motion.div>
          
     );
}
 
export default index;