
const OurService = () => {
    return ( 
        <div className="transition duration-700 ease-in-out mt-32 max-w-[1440px] w-[95%] justify-center mx-auto h-[100%] space-y-16">
            <div>
            <p className=" text-base leading-[100%] flex justify-center font-medium">OUR SERVICES</p>
            <p className="FS36 justify-center flex ">You&nbsp;<span className="text-blue-700"> select,&nbsp;</span> we <span className="text-blue-700 "> &nbsp;collect</span></p>
        </div>
        <div className="mt-10 mx-auto md:w-[95%] md:max-w-[1300px] justify-between items-center flex flex-col space-y-8 md:space-y-0 md:space-x-[12px] md:flex-row transition duration-700 ease-in-out ">
        <article className="cards">
                <img src="hypeDelivery.png" alt="img"/>
                <div className="mt-6 max-w-[350px] ">
                    <p className="flex flex-col text-[14px] font-light leading-[15.4px]">We do
                         <span className="font-bold text-[24px] leading-[26.4px]">
                        Hyperlocal Deliveries
                        </span>
                    </p>
                    <p className="font-light text-base leading-[140%] mt-4">The idea behind hyperlocal services is to provide quick and convenient services to customers within their immediate vicinity. This is made ...</p>
                </div>
            </article>
            <article className="cards">
                <img src="FulfilDel.png" alt="img"/>
                <div className="mt-6 max-w-[350px]">
                    <p className="flex flex-col text-[14px] font-light leading-[15.4px]">We do
                         <span className="font-bold text-[24px] leading-[26.4px]">
                        Hyperlocal Deliveries
                        </span>
                    </p>
                    <p className="font-light text-base leading-[140%] mt-4">The idea behind hyperlocal services is to provide quick and convenient services to customers within their immediate vicinity. This is made ...</p>
                </div>
            </article>
            <article className="cards">
                <img src="LastDel.png" alt="img"/>
                <div className="mt-6 max-w-[350px]">
                    <p className="flex flex-col text-[14px] font-light leading-[15.4px]">We do
                         <span className="font-bold text-[24px] leading-[26.4px]">
                        Hyperlocal Deliveries
                        </span>
                    </p>
                    <p className="font-light text-base leading-[140%] mt-4">The idea behind hyperlocal services is to provide quick and convenient services to customers within their immediate vicinity. This is made ...</p>
                </div>
            </article>
        </div>
        <div className="flex mx-auto gap-4 max-w-[338px] w-[95%] h-[100%]">
            <button className="border border-pink-600 w-[130px] h-[49px] rounded-[60px] text-base font-medium hover:bg-pink-600 hover:text-white">
               Learn More
            </button>
            <button className="w-[192px] h-[49px] bg-blue-600 rounded-[60px] border border-blue-600 flex px-[24px] items-center text-white font-meduim py-[16px] hover:bg-white hover:text-blue-600 transition ease-in-out duration-500 hover:shadow-lg">
                Get a free quote →
            </button>
        </div>
        <div className="mx-auto md:w-[95%] md:max-w-[1300px] ">
            <img src="OurSer.png" className="mt-36 justify-center flex "/>
        </div>
        </div>
     );
}
 
export default OurService;