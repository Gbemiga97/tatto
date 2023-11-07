import { motion } from "framer-motion"
import { variants } from "../utils"


const Copyright = () => {

  

  return (
    <motion.div
    variants={variants.fadeIn('up')}
    initial='hidden'
    whileInView={'show'}
    viewport={{ once: true }}
    className="bg-dark mt-24 text-[#dbdbdb] py-6 border-t border-[#2b2b2b]">
      <small className="tracking-[0.02em] text-base">
        &copy; {new Date().getFullYear()} <span className="font-semibold text-white">
          The Void Tattoo </span>
        All rights reserved
      </small>
    </motion.div>
  )
}

export default Copyright