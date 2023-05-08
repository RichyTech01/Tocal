
const OurService = () => {
    return ( 
        <div className="transition duration-700 ease-in-out mt-32 max-w-[1440px] w-[95%] justify-center mx-auto h-[100%] ">
            <div>
            <p className=" text-base leading-[100%] flex justify-center font-medium">OUR SERVICES</p>
            <p className="FS36 justify-center flex ">You&nbsp;<span className="text-blue-700"> select,&nbsp;</span> we <span className="text-blue-700 "> &nbsp;collect</span></p>
        </div>
        <div className="mt-10 mx-auto h-[100%] max-w-[500px] md:max-w-[1300px] justify-between space-x-8 items-start flex flex-col space-y-8 md:space-y-0 md:flex-row">
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
                <img src="hypeDelivery.png" alt="img"/>
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
                <img src="hypeDelivery.png" alt="img"/>
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
        </div>
     );
}
 
export default OurService;