import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { motion } from 'framer-motion'
import { data, variants } from '../utils'
import {Pagination} from 'swiper/modules'

const Testimonial = () => {
  return (
    <motion.section id='testimonial'
    variants={variants.fadeIn('up')}
    initial='hidden'
    whileInView={'show'}
    viewport={{ once: true }}
    className="py-[40px] lg:pb-[160px] lg:pt-0">
      <div className="container mx-auto">
        <Swiper 
        grabCursor={true}
       pagination={{clickable: true}}
        modules={[Pagination]}
        className='testimonial'
        >
          {
            data.testimonialData.map(({quoteImg, message, name, occupation}, i) => (
              <SwiperSlide key={i}>
                <div className='max-w-[1200px] mx-auto flex flex-col items-center
                lg:flex-row lg:items-start gap-x-[38px]'>

                  <div className='w-[154px] h-[109px] mb-5'>
                    <img src={quoteImg} alt="quote" />
                  </div>

                   <div className='flex-1 lg:mt-[54px]'>
                    <p className='text-2xl lg:text-[36px] leading-normal mb-6 lg:mb-12'>
                      {message}</p>

                      <div className='flex items-center text-xl lg:text-2xl font-primary'>
                    <h5 className='font-semibold'>
                      {name}</h5>

                      <span className='mx-4'>|</span>

                    <p>{occupation}</p>
                   </div>
                   </div>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </motion.section>
  )
}

export default Testimonial