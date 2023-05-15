import Nav from "@/Components/Homepage/Nav";
import Hero from "@/Components/Homepage/Hero";
import LottieSec from "@/Components/Homepage/LottieSec";
import AboutUs from "@/Components/Homepage/AboutUs";
import OurService from "@/Components/Homepage/OurService";
import GrowBus from "@/Components/Homepage/GrowBus";
import ServeThem from "@/Components/Homepage/ServeThem";
import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
       const index = () => {
       
  
    return ( 
      <motion.div 
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y:0 }}
      transition={{ duration: 0.7, ease:"easeInOut" }} 
            className="All-Cont mx-auto isolate max-w-[600px] w-[95%]"
          >
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          </Head>
              <Nav/>
              <Hero/> 
              <LottieSec/>
              <AboutUs/>
              <OurService/>
              <GrowBus/>
              <ServeThem/>
      </motion.div>
          
     );
}
 
export default index;