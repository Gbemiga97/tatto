import { data, variants } from "../utils"
import { motion } from "framer-motion"


const About = () => {

  const {title, subtitle1, subtitle2, btnIcon, btnText} = data.aboutData

  return (
    <section className="lg:py-16 xl:pb-[160px]">
      <div className="container mx-auto">
        <motion.div 
        variants={variants.container}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: true }}
        className="flex flex-col lg:flex-row gap-x-[70px] items-center">

          <motion.div 
          variants={variants.fadeIn('right')}
          className="flex flex-col lg:flex-row flex-1">
            <div className='text-[360px] xl:text-[720px] leading-none font-tertiary lg:-tracking-[0.055em]
            bg-about bg-no-repeat bg-right bg-clip-text text-transparent'>
              01
            </div>
          </motion.div>

          <motion.div 
          variants={variants.fadeIn('left')}
          className="flex-1 h-full xl:mt-48">
              <h2 className="h2">
                {title}
                </h2>
                <div className="flex flex-col items-end">
                  <div className="max-w-[530px] text-grey">
                  <p className="mb-6">{subtitle1}</p>
                  <p className="mb-9">{subtitle2}</p>
                  <button className="btn btn-lg btn-link">
                    {btnText} <div className="text-xl">{btnIcon}</div>
                  </button>
                  </div>
                </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}

export default About