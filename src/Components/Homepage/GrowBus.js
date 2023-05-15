import { motion} from "framer-motion"
const GrowBus = () => {
    return ( 
        <div className="space-y-16 flex flex-col mx-auto justify-center items-center">
            <p className=" flex items-center text-[36px] font-bold justify-center leading-[100%] sm:mt-20 mt-16 max-w-[674px] w-[95%]  h-[34px]" > How we can help your business grow?</p>
        <article className=" max-w-[1300px] w-[90%] gap-[30px] sm:w-[100%] mx-auto items-center justify-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 space-y-9 lg:space-x-0" style={{justifyItems:"center", alignItems: "flex-start"}}>

                <img src="ResDel.png" alt="img" style={{marginTop:"36px"}}/>
                <img src="LowDel.png" alt="img"/>
                <img src="ZeroDel.png" alt="img"/>
                <img src="QuickRes.png" alt="img"/>

           </article>
           <div className=" flex mx-auto gap-4 max-w-[338px] w-[95%] h-[100%]">
            <motion.button
            whileHover={{scale:0.9}}
            whileTap={{scale:0.8}}
             className="border border-pink-600 w-[130px] h-[49px] rounded-[60px] text-base font-medium hover:bg-pink-600 hover:text-white  transition ease-in-out duration-500">
               Learn More
            </motion.button>

            <motion.button
            whileHover={{scale:0.9}}
            whileTap={{scale:0.8}}
             className="w-[192px] h-[49px] bg-blue-600 rounded-[60px] border border-blue-600 flex px-[24px] items-center text-white font-meduim py-[16px] hover:bg-white hover:text-blue-600 transition ease-in-out duration-500 hover:shadow-lg">
                Get a free quote →
            </motion.button>
        </div>
        </div>
     );
}
 
export default GrowBus;