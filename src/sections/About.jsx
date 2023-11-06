import { data } from "../utils"
import { motion } from "framer-motion"


const About = () => {

  const {title, subtitle1, subtitle2, btnIcon, btnText} = data.aboutData

  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-col lg:">

          <div>
            <div></div>
          </div>

          <div>
              <h2>
                {title}
                </h2>
                <div>
                  <p>{subtitle1}</p>
                  <p>{subtitle2}</p>
                  <button>
                    {btnText} <div>{btnIcon}</div>
                  </button>
                </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About