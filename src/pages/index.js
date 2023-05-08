import Nav from "@/Homepage/Nav";
import Hero from "@/Homepage/Hero";
import LottieSec from "@/Homepage/LottieSec";
import AboutUs from "@/Homepage/AboutUs";
import OurService from "@/Homepage/OurService";
import { motion } from "framer-motion";
import React from "react";
import Head from "next/head";
       const index = () => {
          
    return ( 
      <motion.div 
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x:0 }}
      transition={{ duration: 2, ease:"easeInOut" }}
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