import { data, variants } from "../utils"
import { motion } from "framer-motion"



const Hero = () => {

  const {title, subtitle, btnIcon, btnText} = data.heroData

  return (
   <section id="/" className="bg-hero bg-cover bg-center min-h-[40vh] lg:h-[948px]
   bg-no-repeat relative mt-[120px] lg:mt-[150px]">
    <motion.div 
    variants={variants.container}
    initial="hidden"
    whileInView={'show'}
    viewport={{once: true}}
    className="container mx-auto min-h-[40vh] lg:h-full flex items-center
    justify-center xl:justify-end">

      <motion.div 
      variants={variants.fadeIn('down')}
      className="text-white text-center lg:text-left lg:max-w-[640px]">
        <h1 className="h1">
          {title}
        </h1>
        <p className="mb-8 lg:mb-16 max-w-lg leading-relaxed">
          {subtitle}
        </p>
        <div>
          <button className="btn btn-sm lg:btn-lg btn-outline mx-auto lg:mx-0">
            {btnText} <div className="text-xl">{btnIcon}</div>
          </button>
        </div>
      </motion.div>


      <div className="hidden lg:flex absolute -bottom-2 right-0 left-0 before:content-outlineText" />
    </motion.div>
   </section>
  )
}

export default Hero