import { Link } from "react-scroll"
import { data, variants } from "../utils"
import { motion } from "framer-motion"
import { Copyright } from "../components"

const Footer = () => {

  const {about, links, program, newsletter} = data.footerData

  return (
    <footer className="section bg-dark">
      <div className="container mx-auto">

        <motion.div 
        variants={variants.container}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: true}}
        className="text-white grid sm:grid-cols-2 gap-[2rem] xl:grid-cols-4">

          <motion.div 
          variants={variants.fadeIn('up')}
          className="flex-1 flex-col flex gap-y-6">
            <h5 className="font-primary text-xl uppercase tracking-[0.08em]">
              {about.title}</h5>
            <p className="leading-relaxed  text-[#dbdbdb]">
              {about.subtitle}</p>
      
          <div className="flex flex-col gap-y-4 font-semibold text-[#dbdbdb]">
            <div className="flex items-center gap-x-[10px]">
              <div>{about.address.icon}</div>
              <p>{about.address.name}</p>
            </div>

            <div className="flex items-center gap-x-[10px]" >
             <div>{about.phone.icon}</div>
             <p>{about.phone.number}</p>
            </div>

            <div className="flex items-center gap-x-[10px]" >
             <div>{about.email.icon}</div>
             <p>{about.email.address}</p>
            </div>
          </div>
          </motion.div>
          

          <motion.div 
          variants={variants.fadeIn('up')}
          
          className="flex-1 flex flex-col xl:items-center">
            <div>
            <h5 className="font-primary text-xl uppercase tracking-[0.08em] mb-6">
              {links.title}</h5>
            <ul className="flex flex-col gap-y-4 text-[#dbdbdb]">
              {
                links.items.map(({href, name}, i) => (
                  <li key={i}>
                    <Link
                    spy={true}
                    to={href}
                    className="hover:text-white cursor-pointer"
                    >
                    {name}
                    </Link>
                  </li>
                ))
              }
            </ul>
            </div>
          </motion.div>

          <motion.div 
          variants={variants.fadeIn('up')}
          className="flex-1 flex flex-col xl:items-center">
           <div>
            <h5 className="font-primary text-xl uppercase tracking-[0.08em] mb-6">
              {program.title}</h5>
            <ul className="flex flex-col gap-y-4 text-[#dbdbdb]">
              {
                program.items.map(({href, name}, i) => (
                  <li key={i}>
                    <Link
                    spy={true}
                    to={href}
                    className="hover:text-white cursor-pointer"
                    >
                    {name}
                    </Link>
                  </li>
                ))
              }
            </ul>
            </div>
          </motion.div>

          <motion.div
          variants={variants.fadeIn('up')}
          className="flex-1">
            <h5 className="font-primary text-xl uppercase tracking-[0.08em] mb-6">
              {newsletter.title}</h5>
            <p className="leading-relaxed mb-9 text-[#dbdbdb]">
              {newsletter.subtitle}</p>
            <form className="flex justify-between items-start border-b border-[#b6b6b6]">
              <input 
              className="outline-none placeholder:text-base italic placeholder:capitalize
              bg-transparent pb-2"
              type="text" 
              placeholder={newsletter.form.placeholder}
              />
              <button 
              className="text-2xl cursor-pointer"
              type="submit">
                {newsletter.form.icon}</button>
            </form>
          </motion.div>
        </motion.div>
        <Copyright />
      </div>
    </footer>
  )
}

export default Footer