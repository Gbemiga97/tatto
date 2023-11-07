import ModalVideo from "react-modal-video"
import '../modalVideo.scss'
import { motion } from "framer-motion"
import { data, variants } from "../utils"
import { useState } from "react"



const Interview = () => {

  const {title, btnIcon, btnText} = data.interviewData

  const [isOpen, setIsOpen] = useState(false)


  return (
    <motion.section id="interview"
    variants={variants.fadeIn('up')}
    initial='hidden'
    whileInView={'show'}
    viewport={{ once: true }}
    className="bg-dark section bg-interview bg-no-repeat bg-cover  lg:h-[812px]">
      <div className="container mx-auto h-full">
        <div className="flex flex-col justify-center h-full">
          <div className="flex flex-col items-start max-w-[800px]">

            <motion.h3
            variants={variants.fadeIn('down')}
            className="text-white text-[40px] lg:text-[60px] leading-[1.1] font-tertiary
            -tracking-[1.5px] capitalize mb-8">
              {title}</motion.h3>

              <motion.div 
              variants={variants.fadeIn('down')}
              >

              <div
              onClick={() => setIsOpen(true)}
              className="flex text-white items-center gap-x-5 cursor-pointer hover:opacity-80 transition">
                <div className="w-[70px] h-[70px] lg:w-[91px] lg:h-[91px] border border-white/40
                 rounded-full text-dark p-[5px] lg:p-[8px]">

                  <div className="bg-white  w-full h-full rounded-full flex justify-center items-center">
                    <div className="pl-1">
                      {btnIcon}</div>
                  </div>
                 </div>
                  <p className="font-primary uppercase">
                    {btnText}
                  </p>
              </div>
          </motion.div>

          <ModalVideo 
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="_limqYQuNf8"
          onClose={() => setIsOpen(false)}
          />
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Interview