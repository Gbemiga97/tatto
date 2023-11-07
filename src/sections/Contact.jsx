import { data, variants } from "../utils"
import { motion } from "framer-motion"

const Contact = () => {

  const {title, info, form} = data.contactData

  return (
    <section id="contact" className="section">
      <div className="container mx-auto">
        <motion.div 
        variants={variants.container}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: true}}
        className="flex flex-col lg:flex-row gap-y-16">

          <motion.div 
          variants={variants.fadeIn('right')}
          className="flex-1">

            <h2 className="h2 max-w-[490px]"> 
              {title}</h2>

            <div className="flex flex-col md:flex-row gap-x-5 gap-y-16 lg:gap-y-0">
              {
                info.map(({title, subtitle, address, phone, email, link}, i) => (
                  <div 
                  
                  key={i} >

                    <h5 className="font-primary uppercase font-medium mb-3">
                      {title}</h5>

                    <p className="mb-6 text-[#333] leading-[187%] tracking-[0.02em]" >
                      {subtitle}</p>

                    <div className="flex flex-col gap-y-3 mb-8">

                      <div className="flex items-center gap-[10px]">
                      <div>{address.icon}</div>
                      <p className="font-medium">
                        {address.name}</p>
                      </div>
                     
                     <div className="flex items-center gap-[10px]">
                       <div>{phone.icon}</div>
                       <p className="font-medium">
                        {phone.number}</p>
                     </div>

                     <div className="flex items-center gap-[10px]">
                      <div>{email.icon}</div>
                      <p className="font-medium">
                        {email.address}</p>
                     </div>
                     </div>

                     <a
                     className="font-medium border-b border-dark pb-[5px]"
                     href="#">{link}</a>
                   
                  </div>
                ))
              }
            </div>
          </motion.div>

          <motion.div 
          variants={variants.fadeIn('left')}
          className="flex-1 xl:pl-[40px] justify-center items-center">
            <form className="flex flex-col gap-y-10 w-full">
              <input 
              className="border-b border-dark placeholder:text-[#555] 
              italic tracking-[0.06em] outline-none pb-4"
              type="text"
               placeholder={form.name}/> 
               
                <input 
               className="border-b border-dark placeholder:text-[#555] 
               italic tracking-[0.06em] outline-none pb-4"
               type="text"
                placeholder={form.email}/>  
                
                <input 
                className="border-b border-dark placeholder:text-[#555] 
                italic tracking-[0.06em] outline-none pb-4"
                type="text"
                 placeholder={form.message}/>
                 <button className="btn btn-sm btn-dark self-start">
                  {form.btnText}</button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact