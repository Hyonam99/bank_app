import styles from "../style";
import {discount, robot} from '../assets/index'
import GetStarted from "./GetStarted";

const Hero = () => 
  (
    <section id="Home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 flex-col ${styles.flexStart} xl:px-0 sm:px-16 px-6`}>
        <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
          <img src={discount} alt="discount-logo" className="w-[24px] h-[24px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For <span className="text-white">1 Month </span>Account
          </p>
        </div>
        <div className="w-full flex flex-row justify-between items-center">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[52px] text-[48px] ss:leading[100px] text-white leading-[60px]">
          The Next <br className="sm:block hidden"/> <span className="text-gradient">Generation</span>
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>
        <h1 className="font-poppins font-semibold ss:text-[52px] text-[40px] ss:leading[100px] text-white leading-[60px] w-full">
          Payment Method.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. 
          But with hundreds of credit cards on the market.</p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="robot-hand" className="w-[100%] h-[100%] relative z-[5]" />
        <div className="w-[45%] h-[40%] absolute top-0 z-[0] pink__gradient"/>
        <div className="w-[80%] h-[70%] rounded-full absolute bottom-40 z-[1] white__gradient"/>
        <div className="w-[50%] h-[50%] absolute right-20 z-[0] blue__gradient"/>
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  )

export default Hero