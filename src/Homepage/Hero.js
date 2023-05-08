const Hero = () => {
    return ( 
        <main className="mx-auto isolate">
        <div className="First-HomePage-Article flex flex-col justify-center m-auto ">
        <h2 className="Making-hyperlocal font-bold mx-auto max-w-[744px] w-[95%] md:mb-[20px] sm:mb-[30px] relative h-[100%] text-[40px] sm:text-[48px] sm:max-w-[954px] sm:w-[90%] xs:max-w-[500px] xs:w-[98%] sm:mt-0 xs:mt-[50px]">Making hyperlocal & last-mile deliveries cost-efficient and <span className="text-blue-600"> electrifying</span>⚡️</h2>
            
        <p className="At-Local-p text-base mx-auto font-light  max-w-[644px] w-[90%] relative isolate md:max-w-[70%] sm:max-w-[90%] ">At TOCAL, we specialise in hyperlocal and last-mile delivery services. Our platform offers a dedicated fleet of delivery executives equipped with EVs, providing fast and efficient delivery solutions for a range of businesses, including quick-commerce, e-commerce, D2C, online and offline retail companies, SMEs, and more.</p>
    
        <div className="HomePage-Buttons flex-row items-center mx-auto isolate">
          <button className="First-Button-Contact text-pink-600 font-medium hover:text-white hover:rounded-full hover:bg-pink-600 transition ease-in-out duration-500 hover:shadow-lg">Contact Us</button>
          <button className="hover:shadow-lg Second-Button-Learn flex flex-row items-center font-base bg-blue-600 text-blue-600  rounded-full hover:bg-white hover:text-blue-600 transition ease-in-out duration-500 ">Learn more  <span className=" arrow top-0  transform -translate-x-1/2 transform-origin-center animate-arrow-animation">→</span></button>
        </div>
      </div>
    </main>
    
     );
}
 
export default Hero;