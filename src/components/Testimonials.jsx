import {feedback} from '../constants/mock-data';
import FeedbackCard from './FeedbackCard';
import styles from "../style";


const Testimonials = () =>
  (
    <section className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div className='absolute z-[0] w-[18%] h-[60%] left-[81%] rounded-full blue__gradient overflow-clip'/>
      <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
        <h1 className={styles.heading2}>What people are <br className='sm:block hidden'/> saying about us</h1>
        <div className={`w-full md:mt-0 mt-6`}>
          <p className={`${styles.paragraph} max-w-[470px] text-left`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
        </div>
      </div>
      <div className='flex flex-wrap justify-center sm:justify-start w-full feedback-container relative z-[1]'>
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  )

export default Testimonials