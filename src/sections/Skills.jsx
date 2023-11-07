import { useInView } from "react-intersection-observer"
import { CircularProgressbar } from "react-circular-progressbar"
import 'react-circular-progressbar/dist/styles.css'

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { variants } from "../utils"


const Skills = () => {

  const {ref, inView} = useInView({
    threshold: 0.2,
  })


  const [fullBody, setFullBody] = useState(0)
  const [piercing, setPiercing] = useState(0)
  const [fullColor, setFullColor] = useState(0)
  const [temporary, setTemporary] = useState(0)

  
  useEffect(() => {
    if(inView) {
      setTimeout(() => {
        if(fullBody < 90) {
          setFullBody(prev => + prev + 1)
        } 
        if(piercing < 80) {
          setPiercing(prev => prev + 1)
        }
        if(fullColor < 75) {
          setFullColor(prev => prev + 1)
        }
        if(temporary < 95) {
          setTemporary(prev => prev + 1)
        }
      }, 50)
    } else {
      setFullBody(0)
      setPiercing(0)
      setFullColor(0)
      setTemporary(0)
    }
  }, [inView, fullBody, piercing, fullColor, temporary])

  const styles = {
    path : {
      stroke: '#111111'
    },
    trail: {
      stroke: '#eeeeee'
    },
    text: {
      fill: '#111111',
      fontSize: '24px'
    }
  }
  return (
    <motion.section ref={ref} 
    className='section font-primary'
    variants={variants.fadeIn('up')}
    initial='hidden'
    whileInView={'show'}
    viewport={{ once: true }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-y-6">
          <div className="w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6">
            <CircularProgressbar
            strokeWidth={1}
            value={fullBody}
            styles={styles}
            text={`${fullBody}%`}
            />
            <p className="uppercase font-light translate-[1.2px] text-center">
              full body tattoo
            </p>
          </div>

          <div className="w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6">
            <CircularProgressbar
            strokeWidth={1}
            value={piercing}
            styles={styles}
            text={`${piercing}%`}
            />
            <p className="uppercase font-light translate-[1.2px] text-center">
              safely piercing
            </p>
          </div>

          <div className="w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6">
            <CircularProgressbar
            strokeWidth={1}
            value={fullColor}
            styles={styles}
            text={`${fullColor}%`}
            />
            <p className="uppercase font-light translate-[1.2px] text-center">
              full color tattoo
            </p>
          </div>

          <div className="w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6">
            <CircularProgressbar
            strokeWidth={1}
            value={temporary}
            styles={styles}
            text={`${temporary}%`}
            />
            <p className="uppercase font-light translate-[1.2px] text-center">
              temporary tattoo
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Skills