import { Link } from "react-scroll"
import { data } from "../utils"


const Nav = () => {

  const {items} = data.navData

  return (
    <nav>
      <ul className="flex gap-x-[58px]">
        {
          items.map(({name, href}, i) => (
            <li key={i}>
              <Link
              to={href}
              spy={true}
              className="link hover:border-b-2 hover:border-dark transition duration-300 cursor-pointer"
              >
              {name}
              </Link>
            </li>
          ) )
        }
      </ul>
    </nav>
  )
}

export default Nav