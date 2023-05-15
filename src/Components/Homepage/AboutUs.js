import { motion } from "framer-motion";
const AboutUs = () => {
    return ( 
        <div>
        <div className="flex w-[95%] max-w-[1171px] md:gap-0 m-auto md:mt-[100px] h-full md:flex-row flex-col gap-28 xs:gap-[78px] xs:mt-[50px]">
            <motion.div
             initial={{ opacity: 0, x: -100 }}
             animate={{ opacity: 1, x:0 }}
             transition={{ duration: 2, ease:"easeInOut" }} 
             className="w-[95%] md:w-1/2  sm:max-w-[900px]">
                
                <h2 className="font-bold text-base h-[16px]">WHO WE ARE</h2>
                <h2 className="text-[36px] font-semibold leading-[100%] mt-3">Your lightening fast <span className='text-blue-700 w-[521px] '>EV-enabled</span> delivery partner</h2>
                <p className="max-w-[641px] h-[100%] leading-[140%] text-base font-light mt-10 ">Our trained and trustworthy delivery professionals make quick and  safe deliveries of your packages, including groceries, e-commerce, food, medicines, etc. Our full-mound technology platform ensures an end-to-end effective delivery operation every day; every delivery While doing this, we also make sure to give your customers a pleasurable experience of your brand until the last delegate of delivery.</p>
            </motion.div>
            <div className="w-[95%] md:w-[500px] md:flex justify-end ">
            <img src="Frame 109.png" className=" md:w-[500px] md:h-[350px] float-right"/>
            </div>
           
        </div>
        <div className=" w-[95%] max-w-[1171px] mx-auto relative h-[100%]">
                <button className="abUsBtn bg-blue-700 border border-blue-700 justify-center rounded-[60px] w-[143px] h-[52px] flex items-center text-white font-meduim hover:bg-white hover:text-blue-600 transition ease-in-out duration-500 mt-10 lg:mt-0  hover:shadow-lg ">
                    AboutUs →
                </button>
        </div>
        </div>
     );
}
 
export default AboutUs;