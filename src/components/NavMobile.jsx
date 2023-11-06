import { Link } from "react-scroll"
import { data } from "../utils"
import {Socials} from "."


const NavMobile = ({setShowNav}) => {

  const  {items} = data.navData


  return (
    <nav className="w-full h-full flex flex-col justify-evenly overflow-hidden">
      <ul className="flex flex-col justify-center items-center gap-y-6 py-6 mb-8">
        {
          items.map(({href, name,}, i) => (
            <li 
            key={i}>
              <Link
              to={href}
              spy={true}
            onClick={() => setShowNav(false)}

              className="cursor-pointer text-2xl font-primary"
              >
              {name}
              </Link>
            </li>
          ))
        }
      </ul>
      <div className="text-2xl">
        <Socials />
      </div>
    </nav>
  )
}

export default NavMobile