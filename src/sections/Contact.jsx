import { data } from "../utils"
import { motion } from "framer-motion"

const Contact = () => {

  const {title, info, form} = data.contactData

  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-y-16">

          <div>

            <h2 className="h2 max-w-[490px]"> 
              {title}</h2>

            <div className="flex flex-col md:flex-row md:gap-x-5 gap-x-[10rem] gap-y-16 lg:gap-y-0">
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
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact